/**
 * AI Prediction Engine
 * 
 * Calculates match outcome probabilities based on:
 * - FIFA Rankings
 * - Home advantage
 * - Historical performance modifiers
 */

export interface AIPrediction {
  homeWin: number;
  draw: number;
  awayWin: number;
  predictedScore: { home: number; away: number };
  confidence: 'low' | 'medium' | 'high';
}

/**
 * Calculate win probability based on FIFA ranking difference and other factors
 */
export function calculatePrediction(
  homeRanking: number,
  awayRanking: number,
  isNeutralVenue: boolean = true
): AIPrediction {
  // Base probability from ranking difference
  // Lower ranking = better team
  const rankDiff = awayRanking - homeRanking; // positive = home team ranked higher
  
  // Convert rank difference to probability using logistic function
  // A rank difference of ~30 gives roughly 70% win probability
  const k = 0.03; // steepness factor
  const homeAdvantage = isNeutralVenue ? 0 : 0.05; // 5% boost for true home
  
  const rawHomeProb = 1 / (1 + Math.exp(-k * rankDiff)) + homeAdvantage;
  
  // Add draw probability (typically 20-28% in World Cup)
  const drawBase = 0.24;
  const rankCloseness = 1 - Math.abs(rankDiff) / 100; // closer ranks = more likely draw
  const drawProb = Math.min(0.35, Math.max(0.15, drawBase * (0.7 + 0.6 * rankCloseness)));
  
  // Distribute remaining probability
  const remainingProb = 1 - drawProb;
  let homeWin = rawHomeProb * remainingProb;
  let awayWin = (1 - rawHomeProb) * remainingProb;
  
  // Normalize to ensure sum = 1
  const total = homeWin + drawProb + awayWin;
  homeWin = homeWin / total;
  awayWin = awayWin / total;
  const draw = drawProb / total;
  
  // Round to 1 decimal
  const homeWinPct = Math.round(homeWin * 1000) / 10;
  const drawPct = Math.round(draw * 1000) / 10;
  const awayWinPct = Math.round((1 - homeWin - draw) * 1000) / 10;
  
  // Predict score based on probabilities
  const predictedScore = predictScore(homeWin, awayWin, draw);
  
  // Confidence based on how decisive the prediction is
  const maxProb = Math.max(homeWinPct, drawPct, awayWinPct);
  const confidence: AIPrediction['confidence'] = 
    maxProb > 55 ? 'high' : maxProb > 40 ? 'medium' : 'low';
  
  return {
    homeWin: homeWinPct,
    draw: drawPct,
    awayWin: awayWinPct,
    predictedScore,
    confidence,
  };
}

function predictScore(homeWinProb: number, awayWinProb: number, drawProb: number): { home: number; away: number } {
  // World Cup average goals per game: ~2.5
  const avgGoals = 2.5;
  
  if (drawProb > homeWinProb && drawProb > awayWinProb) {
    // Draw likely
    const goals = Math.round(avgGoals / 2);
    return { home: goals, away: goals };
  }
  
  const stronger = homeWinProb > awayWinProb ? 'home' : 'away';
  const dominance = Math.abs(homeWinProb - awayWinProb);
  
  if (dominance > 0.4) {
    // Very dominant team
    return stronger === 'home' ? { home: 3, away: 0 } : { home: 0, away: 3 };
  } else if (dominance > 0.25) {
    return stronger === 'home' ? { home: 2, away: 0 } : { home: 0, away: 2 };
  } else if (dominance > 0.15) {
    return stronger === 'home' ? { home: 2, away: 1 } : { home: 1, away: 2 };
  } else {
    return stronger === 'home' ? { home: 1, away: 0 } : { home: 0, away: 1 };
  }
}

/**
 * Get a text analysis of the prediction
 */
export function getPredictionAnalysis(
  homeTeam: string,
  awayTeam: string,
  prediction: AIPrediction
): string {
  const { homeWin, draw, awayWin, confidence } = prediction;
  const maxProb = Math.max(homeWin, draw, awayWin);
  
  if (maxProb === homeWin) {
    if (homeWin > 60) {
      return `${homeTeam} are strong favorites in this matchup. Their superior ranking and form suggest a comfortable victory.`;
    }
    return `${homeTeam} have a slight edge, but ${awayTeam} could spring a surprise. Expect a competitive match.`;
  }
  
  if (maxProb === awayWin) {
    if (awayWin > 60) {
      return `${awayTeam} are the clear favorites here. Their quality should see them through despite ${homeTeam}'s efforts.`;
    }
    return `${awayTeam} are marginally favored, but this could go either way. A tight contest is expected.`;
  }
  
  return `This is a very evenly matched contest. Both ${homeTeam} and ${awayTeam} have similar chances, making a draw the most likely outcome.`;
}
