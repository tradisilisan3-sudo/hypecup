/**
 * World Cup Predictor 2026 - Scoring Engine
 * 
 * Point calculation rules:
 * - Exact Score: +5 points (predicted score matches exactly)
 * - Correct Goal Difference: +3 points (goal difference matches)
 * - Correct Winner: +1 point (predicted correct winning team or draw)
 * - Wrong: 0 points
 */

export type PointType = 'exact_score' | 'correct_diff' | 'correct_winner' | 'wrong';

export interface ScoreResult {
  points: number;
  type: PointType;
  label: string;
}

export function calculateMatchPoints(
  predictedHome: number,
  predictedAway: number,
  actualHome: number,
  actualAway: number
): ScoreResult {
  // Exact score match
  if (predictedHome === actualHome && predictedAway === actualAway) {
    return { points: 5, type: 'exact_score', label: 'Exact Score! 🎯' };
  }

  // Correct goal difference
  const predictedDiff = predictedHome - predictedAway;
  const actualDiff = actualHome - actualAway;
  
  if (predictedDiff === actualDiff) {
    return { points: 3, type: 'correct_diff', label: 'Correct Goal Difference' };
  }

  // Correct winner/draw
  const predictedResult = Math.sign(predictedDiff); // 1 = home win, -1 = away win, 0 = draw
  const actualResult = Math.sign(actualDiff);
  
  if (predictedResult === actualResult) {
    return { points: 1, type: 'correct_winner', label: 'Correct Winner' };
  }

  // Wrong prediction
  return { points: 0, type: 'wrong', label: 'Wrong Prediction' };
}

export function getBadge(totalPoints: number): 'Rookie' | 'Analyst' | 'Expert' | 'Legend' {
  if (totalPoints >= 300) return 'Legend';
  if (totalPoints >= 150) return 'Expert';
  if (totalPoints >= 50) return 'Analyst';
  return 'Rookie';
}

export function getBadgeColor(badge: string): string {
  switch (badge) {
    case 'Legend': return 'text-yellow-400';
    case 'Expert': return 'text-purple-400';
    case 'Analyst': return 'text-blue-400';
    default: return 'text-gray-400';
  }
}

export function getBadgeEmoji(badge: string): string {
  switch (badge) {
    case 'Legend': return '🏆';
    case 'Expert': return '⭐';
    case 'Analyst': return '📊';
    default: return '🔰';
  }
}

export function getPointTypeColor(type: PointType): string {
  switch (type) {
    case 'exact_score': return 'text-green-400 bg-green-400/10';
    case 'correct_diff': return 'text-blue-400 bg-blue-400/10';
    case 'correct_winner': return 'text-yellow-400 bg-yellow-400/10';
    default: return 'text-red-400 bg-red-400/10';
  }
}

/**
 * Calculate accuracy percentage
 */
export function calculateAccuracy(
  exactScores: number,
  correctDiffs: number,
  correctWinners: number,
  totalPredictions: number
): number {
  if (totalPredictions === 0) return 0;
  const correct = exactScores + correctDiffs + correctWinners;
  return Math.round((correct / totalPredictions) * 100);
}
