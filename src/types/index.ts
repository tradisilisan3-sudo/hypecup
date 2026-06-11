export interface Team {
  id: number;
  name: string;
  code: string; // 3-letter FIFA code
  flagUrl: string; // emoji flag
  group: string; // A through L
  fifaRanking: number;
  confederation: string;
  isHost: boolean;
}

export interface Stadium {
  id: number;
  name: string;
  city: string;
  country: string;
  capacity: number;
}

export interface Player {
  id: number;
  name: string;
  teamId: number;
  position: string;
  shirtNumber: number;
}

export type MatchStage =
  | 'group'
  | 'round_of_32'
  | 'round_of_16'
  | 'quarter_final'
  | 'semi_final'
  | 'third_place'
  | 'final';

export type MatchStatus = 'upcoming' | 'live' | 'finished';

export interface Match {
  id: number;
  homeTeamId: number;
  awayTeamId: number;
  stadiumId: number;
  kickoffTime: string; // ISO 8601
  stage: MatchStage;
  group?: string;
  homeScore?: number;
  awayScore?: number;
  status: MatchStatus;
  minute?: number; // for live matches
}

export interface Prediction {
  id: number;
  userId: string;
  matchId: number;
  homeScore: number;
  awayScore: number;
  pointsEarned?: number;
  createdAt: string;
}

export interface TournamentPrediction {
  id: number;
  userId: string;
  type: 'champion' | 'runner_up' | 'third_place' | 'top_scorer' | 'top_assist';
  teamId?: number;
  playerId?: number;
}

export interface UserProfile {
  id: string;
  username: string;
  fullName: string;
  avatarUrl: string;
  favoriteTeamId?: number;
  totalPoints: number;
  badge: 'Rookie' | 'Analyst' | 'Expert' | 'Legend';
  exactScores: number;
  correctDiffs: number;
  correctWinners: number;
  totalPredictions: number;
  rank: number;
}

export interface LeaderboardEntry {
  rank: number;
  user: UserProfile;
  totalPoints: number;
  exactScores: number;
  correctPredictions: number;
  badge: string;
}

export interface FriendGroup {
  id: string;
  name: string;
  inviteCode: string;
  createdBy: string;
  members: UserProfile[];
  createdAt: string;
}

export interface Notification {
  id: number;
  userId: string;
  type:
    | 'match_starting'
    | 'prediction_closing'
    | 'score_change'
    | 'rank_change'
    | 'favorite_team';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export interface Standing {
  teamId: number;
  group: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  position: number;
}

export interface TopScorer {
  playerId: number;
  goals: number;
  assists: number;
  matchesPlayed: number;
}

export interface TopAssist {
  playerId: number;
  assists: number;
  matchesPlayed: number;
}
