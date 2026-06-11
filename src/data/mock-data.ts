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

export const mockStandings: Standing[] = teams.map((team, index) => ({
  teamId: team.id,
  group: team.group,
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  goalsFor: 0,
  goalsAgainst: 0,
  goalDifference: 0,
  points: 0,
  position: (index % 4) + 1, // 1-4 within each group
}));

// ---------------------------------------------------------------------------
// Mock Top Scorers & Assists (empty — tournament hasn't started)
// ---------------------------------------------------------------------------

export const mockTopScorers: TopScorer[] = [];

export const mockTopAssists: TopAssist[] = [];

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
