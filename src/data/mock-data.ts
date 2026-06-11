import type {
  FriendGroup,
  Notification,
  Prediction,
  Standing,
  TopAssist,
  TopScorer,
  UserProfile,
} from '@/types';
import { teams } from '@/data/teams';

// ---------------------------------------------------------------------------
// Mock Current User
// ---------------------------------------------------------------------------

export const mockCurrentUser: UserProfile = {
  id: 'user-001',
  username: 'golazo_king',
  fullName: 'Alex Rivera',
  avatarUrl: '👤',
  favoriteTeamId: 37, // Argentina
  totalPoints: 0,
  badge: 'Rookie',
  exactScores: 0,
  correctDiffs: 0,
  correctWinners: 0,
  totalPredictions: 0,
  rank: 1,
};

// ---------------------------------------------------------------------------
// Mock Users (for leaderboard)
// ---------------------------------------------------------------------------

export const mockUsers: UserProfile[] = [
  mockCurrentUser,
  {
    id: 'user-002',
    username: 'futbol_wizard',
    fullName: 'Maria Santos',
    avatarUrl: '👩',
    favoriteTeamId: 9, // Brazil
    totalPoints: 0,
    badge: 'Rookie',
    exactScores: 0,
    correctDiffs: 0,
    correctWinners: 0,
    totalPredictions: 0,
    rank: 2,
  },
  {
    id: 'user-003',
    username: 'the_analyst',
    fullName: 'James Walker',
    avatarUrl: '🧔',
    favoriteTeamId: 45, // England
    totalPoints: 0,
    badge: 'Rookie',
    exactScores: 0,
    correctDiffs: 0,
    correctWinners: 0,
    totalPredictions: 0,
    rank: 3,
  },
  {
    id: 'user-004',
    username: 'die_mannschaft',
    fullName: 'Lukas Müller',
    avatarUrl: '👨',
    favoriteTeamId: 17, // Germany
    totalPoints: 0,
    badge: 'Rookie',
    exactScores: 0,
    correctDiffs: 0,
    correctWinners: 0,
    totalPredictions: 0,
    rank: 4,
  },
  {
    id: 'user-005',
    username: 'les_bleus_fan',
    fullName: 'Sophie Martin',
    avatarUrl: '👩‍🦰',
    favoriteTeamId: 33, // France
    totalPoints: 0,
    badge: 'Rookie',
    exactScores: 0,
    correctDiffs: 0,
    correctWinners: 0,
    totalPredictions: 0,
    rank: 5,
  },
  {
    id: 'user-006',
    username: 'samurai_blue',
    fullName: 'Kenji Tanaka',
    avatarUrl: '🧑',
    favoriteTeamId: 22, // Japan
    totalPoints: 0,
    badge: 'Rookie',
    exactScores: 0,
    correctDiffs: 0,
    correctWinners: 0,
    totalPredictions: 0,
    rank: 6,
  },
  {
    id: 'user-007',
    username: 'oranje_army',
    fullName: 'Dirk van den Berg',
    avatarUrl: '👱',
    favoriteTeamId: 21, // Netherlands
    totalPoints: 0,
    badge: 'Rookie',
    exactScores: 0,
    correctDiffs: 0,
    correctWinners: 0,
    totalPredictions: 0,
    rank: 7,
  },
  {
    id: 'user-008',
    username: 'tango_pro',
    fullName: 'Valentina López',
    avatarUrl: '👩‍🦱',
    favoriteTeamId: 37, // Argentina
    totalPoints: 0,
    badge: 'Rookie',
    exactScores: 0,
    correctDiffs: 0,
    correctWinners: 0,
    totalPredictions: 0,
    rank: 8,
  },
  {
    id: 'user-009',
    username: 'pharaoh_fan',
    fullName: 'Ahmed Hassan',
    avatarUrl: '👨‍🦲',
    favoriteTeamId: 26, // Egypt
    totalPoints: 0,
    badge: 'Rookie',
    exactScores: 0,
    correctDiffs: 0,
    correctWinners: 0,
    totalPredictions: 0,
    rank: 9,
  },
  {
    id: 'user-010',
    username: 'us_soccer',
    fullName: 'Chris Johnson',
    avatarUrl: '🧢',
    favoriteTeamId: 13, // USA
    totalPoints: 0,
    badge: 'Rookie',
    exactScores: 0,
    correctDiffs: 0,
    correctWinners: 0,
    totalPredictions: 0,
    rank: 10,
  },
  {
    id: 'user-011',
    username: 'la_roja',
    fullName: 'Carlos Ruiz',
    avatarUrl: '👨‍🦳',
    favoriteTeamId: 29, // Spain
    totalPoints: 0,
    badge: 'Rookie',
    exactScores: 0,
    correctDiffs: 0,
    correctWinners: 0,
    totalPredictions: 0,
    rank: 11,
  },
  {
    id: 'user-012',
    username: 'maple_leaf_fc',
    fullName: 'Taylor Chen',
    avatarUrl: '🧑‍🦰',
    favoriteTeamId: 5, // Canada
    totalPoints: 0,
    badge: 'Rookie',
    exactScores: 0,
    correctDiffs: 0,
    correctWinners: 0,
    totalPredictions: 0,
    rank: 12,
  },
  {
    id: 'user-013',
    username: 'samba_king',
    fullName: 'Rafael Oliveira',
    avatarUrl: '👨‍🎤',
    favoriteTeamId: 9, // Brazil
    totalPoints: 0,
    badge: 'Rookie',
    exactScores: 0,
    correctDiffs: 0,
    correctWinners: 0,
    totalPredictions: 0,
    rank: 13,
  },
  {
    id: 'user-014',
    username: 'atlas_lion',
    fullName: 'Youssef El Amrani',
    avatarUrl: '🦁',
    favoriteTeamId: 10, // Morocco
    totalPoints: 0,
    badge: 'Rookie',
    exactScores: 0,
    correctDiffs: 0,
    correctWinners: 0,
    totalPredictions: 0,
    rank: 14,
  },
  {
    id: 'user-015',
    username: 'viking_thunder',
    fullName: 'Erik Larsen',
    avatarUrl: '⚡',
    favoriteTeamId: 36, // Norway
    totalPoints: 0,
    badge: 'Rookie',
    exactScores: 0,
    correctDiffs: 0,
    correctWinners: 0,
    totalPredictions: 0,
    rank: 15,
  },
];

// ---------------------------------------------------------------------------
// Mock Predictions (current user's upcoming-match predictions)
// ---------------------------------------------------------------------------

export const mockPredictions: Prediction[] = [
  { id: 1, userId: 'user-001', matchId: 1, homeScore: 2, awayScore: 0, createdAt: '2026-06-04T10:00:00Z' },
  { id: 2, userId: 'user-001', matchId: 2, homeScore: 1, awayScore: 1, createdAt: '2026-06-04T10:05:00Z' },
  { id: 3, userId: 'user-001', matchId: 3, homeScore: 3, awayScore: 1, createdAt: '2026-06-04T10:10:00Z' },
  { id: 4, userId: 'user-001', matchId: 5, homeScore: 2, awayScore: 1, createdAt: '2026-06-04T10:15:00Z' },
  { id: 5, userId: 'user-001', matchId: 7, homeScore: 3, awayScore: 0, createdAt: '2026-06-04T10:20:00Z' },
  { id: 6, userId: 'user-001', matchId: 11, homeScore: 1, awayScore: 2, createdAt: '2026-06-04T10:25:00Z' },
  { id: 7, userId: 'user-001', matchId: 17, homeScore: 2, awayScore: 0, createdAt: '2026-06-04T10:30:00Z' },
  { id: 8, userId: 'user-001', matchId: 19, homeScore: 3, awayScore: 1, createdAt: '2026-06-04T10:35:00Z' },
];

// ---------------------------------------------------------------------------
// Mock Standings (initial — all zeros, tournament hasn't started)
// ---------------------------------------------------------------------------

// Mexico: W1 D0 L0 GF2 GA0 GD+2 Pts3
// South Africa: W0 D0 L1 GF0 GA2 GD-2 Pts0
// All other teams: 0 played (tournament just started)
export const mockStandings: Standing[] = [
  // Group A — Mexico vs South Africa played (2-0)
  { teamId: 1,  group: 'A', played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 2, goalsAgainst: 0, goalDifference: 2,  points: 3, position: 1 }, // Mexico
  { teamId: 3,  group: 'A', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0,  points: 0, position: 2 }, // Korea Republic
  { teamId: 4,  group: 'A', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0,  points: 0, position: 3 }, // Czechia
  { teamId: 2,  group: 'A', played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 0, goalsAgainst: 2, goalDifference: -2, points: 0, position: 4 }, // South Africa
  // Group B
  { teamId: 5,  group: 'B', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 1 }, // Canada
  { teamId: 6,  group: 'B', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 2 }, // Bosnia
  { teamId: 7,  group: 'B', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 3 }, // Qatar
  { teamId: 8,  group: 'B', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 4 }, // Switzerland
  // Group C
  { teamId: 9,  group: 'C', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 1 }, // Brazil
  { teamId: 10, group: 'C', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 2 }, // Morocco
  { teamId: 11, group: 'C', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 3 }, // Haiti
  { teamId: 12, group: 'C', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 4 }, // Scotland
  // Group D
  { teamId: 13, group: 'D', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 1 }, // USA
  { teamId: 14, group: 'D', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 2 }, // Paraguay
  { teamId: 15, group: 'D', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 3 }, // Australia
  { teamId: 16, group: 'D', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 4 }, // Türkiye
  // Group E
  { teamId: 17, group: 'E', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 1 }, // Germany
  { teamId: 18, group: 'E', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 2 }, // Curaçao
  { teamId: 19, group: 'E', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 3 }, // Côte d'Ivoire
  { teamId: 20, group: 'E', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 4 }, // Ecuador
  // Group F
  { teamId: 21, group: 'F', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 1 }, // Netherlands
  { teamId: 22, group: 'F', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 2 }, // Japan
  { teamId: 23, group: 'F', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 3 }, // Sweden
  { teamId: 24, group: 'F', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 4 }, // Tunisia
  // Group G
  { teamId: 25, group: 'G', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 1 }, // Belgium
  { teamId: 26, group: 'G', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 2 }, // Egypt
  { teamId: 27, group: 'G', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 3 }, // IR Iran
  { teamId: 28, group: 'G', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 4 }, // New Zealand
  // Group H
  { teamId: 29, group: 'H', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 1 }, // Spain
  { teamId: 30, group: 'H', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 2 }, // Cabo Verde
  { teamId: 31, group: 'H', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 3 }, // Saudi Arabia
  { teamId: 32, group: 'H', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 4 }, // Uruguay
  // Group I
  { teamId: 33, group: 'I', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 1 }, // France
  { teamId: 34, group: 'I', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 2 }, // Senegal
  { teamId: 35, group: 'I', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 3 }, // Iraq
  { teamId: 36, group: 'I', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 4 }, // Norway
  // Group J
  { teamId: 37, group: 'J', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 1 }, // Argentina
  { teamId: 38, group: 'J', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 2 }, // Algeria
  { teamId: 39, group: 'J', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 3 }, // Austria
  { teamId: 40, group: 'J', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 4 }, // Jordan
  // Group K
  { teamId: 41, group: 'K', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 1 }, // Portugal
  { teamId: 42, group: 'K', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 2 }, // DR Congo
  { teamId: 43, group: 'K', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 3 }, // Uzbekistan
  { teamId: 44, group: 'K', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 4 }, // Colombia
  // Group L
  { teamId: 45, group: 'L', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 1 }, // England
  { teamId: 46, group: 'L', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 2 }, // Croatia
  { teamId: 47, group: 'L', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 3 }, // Ghana
  { teamId: 48, group: 'L', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0, position: 4 }, // Panama
];

// ---------------------------------------------------------------------------
// Mock Top Scorers — updated from finished matches
// ---------------------------------------------------------------------------
// Mexico 2–0 South Africa (Jun 11): Quiñones 9', Jiménez 67'
export const mockTopScorers: TopScorer[] = [
  { playerId: 123, goals: 1, assists: 1, matchesPlayed: 1 }, // Julián Quiñones (goal + assist on 2nd)
  { playerId: 122, goals: 1, assists: 0, matchesPlayed: 1 }, // Raúl Jiménez
];

// ---------------------------------------------------------------------------
// Mock Top Assists — updated from finished matches
// ---------------------------------------------------------------------------
export const mockTopAssists: TopAssist[] = [
  { playerId: 123, assists: 1, matchesPlayed: 1 }, // Julián Quiñones (assisted 2nd goal)
  { playerId: 124, assists: 1, matchesPlayed: 1 }, // Roberto Alvarado (assist on header)
];

// ---------------------------------------------------------------------------
// Mock Notifications
// ---------------------------------------------------------------------------

export const mockNotifications: Notification[] = [
  {
    id: 1,
    userId: 'user-001',
    type: 'match_starting',
    title: 'Opening Match in 7 Days!',
    message: 'Mexico vs South Africa kicks off the 2026 World Cup at Estadio Azteca on June 11.',
    isRead: false,
    createdAt: '2026-06-04T08:00:00Z',
  },
  {
    id: 2,
    userId: 'user-001',
    type: 'prediction_closing',
    title: 'Submit Your Predictions',
    message: 'Predictions for Matchday 1 close 1 hour before kickoff. Don\'t miss out!',
    isRead: false,
    createdAt: '2026-06-04T09:00:00Z',
  },
  {
    id: 3,
    userId: 'user-001',
    type: 'favorite_team',
    title: 'Argentina Schedule Released',
    message: 'Your favorite team Argentina plays their first match vs Algeria on June 15 at Hard Rock Stadium.',
    isRead: true,
    createdAt: '2026-06-03T14:00:00Z',
  },
  {
    id: 4,
    userId: 'user-001',
    type: 'rank_change',
    title: 'Welcome to the Leaderboard!',
    message: 'You\'re ranked #1 — let\'s see how long you can hold the top spot once the tournament kicks off.',
    isRead: true,
    createdAt: '2026-06-02T10:00:00Z',
  },
  {
    id: 5,
    userId: 'user-001',
    type: 'prediction_closing',
    title: 'Tournament Predictions Open',
    message: 'Who will win the 2026 World Cup? Submit your champion, top scorer, and more predictions now.',
    isRead: true,
    createdAt: '2026-06-01T12:00:00Z',
  },
  {
    id: 6,
    userId: 'user-001',
    type: 'match_starting',
    title: 'Full Schedule Available',
    message: 'The complete 2026 FIFA World Cup schedule is now available. 104 matches across 16 stadiums!',
    isRead: true,
    createdAt: '2026-05-30T08:00:00Z',
  },
];

// ---------------------------------------------------------------------------
// Mock Friend Groups
// ---------------------------------------------------------------------------

export const mockFriendGroups: FriendGroup[] = [
  {
    id: 'group-001',
    name: 'Office League',
    inviteCode: 'OFFICE2026',
    createdBy: 'user-001',
    members: [mockUsers[0], mockUsers[1], mockUsers[2], mockUsers[3], mockUsers[9]],
    createdAt: '2026-05-28T12:00:00Z',
  },
  {
    id: 'group-002',
    name: 'Football Fanatics',
    inviteCode: 'FANATIC26',
    createdBy: 'user-005',
    members: [mockUsers[0], mockUsers[4], mockUsers[5], mockUsers[6], mockUsers[7], mockUsers[8], mockUsers[13]],
    createdAt: '2026-05-25T09:30:00Z',
  },
];
