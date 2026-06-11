import type { Team } from '@/types';

export const teams: Team[] = [
  // Group A
  { id: 1, name: 'Mexico', code: 'MEX', flagUrl: '🇲🇽', group: 'A', fifaRanking: 15, confederation: 'CONCACAF', isHost: true },
  { id: 2, name: 'South Africa', code: 'RSA', flagUrl: '🇿🇦', group: 'A', fifaRanking: 59, confederation: 'CAF', isHost: false },
  { id: 3, name: 'Korea Republic', code: 'KOR', flagUrl: '🇰🇷', group: 'A', fifaRanking: 22, confederation: 'AFC', isHost: false },
  { id: 4, name: 'Czechia', code: 'CZE', flagUrl: '🇨🇿', group: 'A', fifaRanking: 36, confederation: 'UEFA', isHost: false },

  // Group B
  { id: 5, name: 'Canada', code: 'CAN', flagUrl: '🇨🇦', group: 'B', fifaRanking: 33, confederation: 'CONCACAF', isHost: true },
  { id: 6, name: 'Bosnia and Herzegovina', code: 'BIH', flagUrl: '🇧🇦', group: 'B', fifaRanking: 57, confederation: 'UEFA', isHost: false },
  { id: 7, name: 'Qatar', code: 'QAT', flagUrl: '🇶🇦', group: 'B', fifaRanking: 45, confederation: 'AFC', isHost: false },
  { id: 8, name: 'Switzerland', code: 'SUI', flagUrl: '🇨🇭', group: 'B', fifaRanking: 19, confederation: 'UEFA', isHost: false },

  // Group C
  { id: 9, name: 'Brazil', code: 'BRA', flagUrl: '🇧🇷', group: 'C', fifaRanking: 5, confederation: 'CONMEBOL', isHost: false },
  { id: 10, name: 'Morocco', code: 'MAR', flagUrl: '🇲🇦', group: 'C', fifaRanking: 13, confederation: 'CAF', isHost: false },
  { id: 11, name: 'Haiti', code: 'HAI', flagUrl: '🇭🇹', group: 'C', fifaRanking: 87, confederation: 'CONCACAF', isHost: false },
  { id: 12, name: 'Scotland', code: 'SCO', flagUrl: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', group: 'C', fifaRanking: 42, confederation: 'UEFA', isHost: false },

  // Group D
  { id: 13, name: 'United States', code: 'USA', flagUrl: '🇺🇸', group: 'D', fifaRanking: 11, confederation: 'CONCACAF', isHost: true },
  { id: 14, name: 'Paraguay', code: 'PAR', flagUrl: '🇵🇾', group: 'D', fifaRanking: 52, confederation: 'CONMEBOL', isHost: false },
  { id: 15, name: 'Australia', code: 'AUS', flagUrl: '🇦🇺', group: 'D', fifaRanking: 24, confederation: 'AFC', isHost: false },
  { id: 16, name: 'Türkiye', code: 'TUR', flagUrl: '🇹🇷', group: 'D', fifaRanking: 26, confederation: 'UEFA', isHost: false },

  // Group E
  { id: 17, name: 'Germany', code: 'GER', flagUrl: '🇩🇪', group: 'E', fifaRanking: 3, confederation: 'UEFA', isHost: false },
  { id: 18, name: 'Curaçao', code: 'CUW', flagUrl: '🇨🇼', group: 'E', fifaRanking: 90, confederation: 'CONCACAF', isHost: false },
  { id: 19, name: "Côte d'Ivoire", code: 'CIV', flagUrl: '🇨🇮', group: 'E', fifaRanking: 39, confederation: 'CAF', isHost: false },
  { id: 20, name: 'Ecuador', code: 'ECU', flagUrl: '🇪🇨', group: 'E', fifaRanking: 30, confederation: 'CONMEBOL', isHost: false },

  // Group F
  { id: 21, name: 'Netherlands', code: 'NED', flagUrl: '🇳🇱', group: 'F', fifaRanking: 7, confederation: 'UEFA', isHost: false },
  { id: 22, name: 'Japan', code: 'JPN', flagUrl: '🇯🇵', group: 'F', fifaRanking: 14, confederation: 'AFC', isHost: false },
  { id: 23, name: 'Sweden', code: 'SWE', flagUrl: '🇸🇪', group: 'F', fifaRanking: 35, confederation: 'UEFA', isHost: false },
  { id: 24, name: 'Tunisia', code: 'TUN', flagUrl: '🇹🇳', group: 'F', fifaRanking: 40, confederation: 'CAF', isHost: false },

  // Group G
  { id: 25, name: 'Belgium', code: 'BEL', flagUrl: '🇧🇪', group: 'G', fifaRanking: 6, confederation: 'UEFA', isHost: false },
  { id: 26, name: 'Egypt', code: 'EGY', flagUrl: '🇪🇬', group: 'G', fifaRanking: 33, confederation: 'CAF', isHost: false },
  { id: 27, name: 'IR Iran', code: 'IRN', flagUrl: '🇮🇷', group: 'G', fifaRanking: 21, confederation: 'AFC', isHost: false },
  { id: 28, name: 'New Zealand', code: 'NZL', flagUrl: '🇳🇿', group: 'G', fifaRanking: 93, confederation: 'OFC', isHost: false },

  // Group H
  { id: 29, name: 'Spain', code: 'ESP', flagUrl: '🇪🇸', group: 'H', fifaRanking: 2, confederation: 'UEFA', isHost: false },
  { id: 30, name: 'Cabo Verde', code: 'CPV', flagUrl: '🇨🇻', group: 'H', fifaRanking: 72, confederation: 'CAF', isHost: false },
  { id: 31, name: 'Saudi Arabia', code: 'KSA', flagUrl: '🇸🇦', group: 'H', fifaRanking: 56, confederation: 'AFC', isHost: false },
  { id: 32, name: 'Uruguay', code: 'URU', flagUrl: '🇺🇾', group: 'H', fifaRanking: 9, confederation: 'CONMEBOL', isHost: false },

  // Group I
  { id: 33, name: 'France', code: 'FRA', flagUrl: '🇫🇷', group: 'I', fifaRanking: 1, confederation: 'UEFA', isHost: false },
  { id: 34, name: 'Senegal', code: 'SEN', flagUrl: '🇸🇳', group: 'I', fifaRanking: 20, confederation: 'CAF', isHost: false },
  { id: 35, name: 'Iraq', code: 'IRQ', flagUrl: '🇮🇶', group: 'I', fifaRanking: 55, confederation: 'AFC', isHost: false },
  { id: 36, name: 'Norway', code: 'NOR', flagUrl: '🇳🇴', group: 'I', fifaRanking: 44, confederation: 'UEFA', isHost: false },

  // Group J
  { id: 37, name: 'Argentina', code: 'ARG', flagUrl: '🇦🇷', group: 'J', fifaRanking: 4, confederation: 'CONMEBOL', isHost: false },
  { id: 38, name: 'Algeria', code: 'ALG', flagUrl: '🇩🇿', group: 'J', fifaRanking: 37, confederation: 'CAF', isHost: false },
  { id: 39, name: 'Austria', code: 'AUT', flagUrl: '🇦🇹', group: 'J', fifaRanking: 23, confederation: 'UEFA', isHost: false },
  { id: 40, name: 'Jordan', code: 'JOR', flagUrl: '🇯🇴', group: 'J', fifaRanking: 68, confederation: 'AFC', isHost: false },

  // Group K
  { id: 41, name: 'Portugal', code: 'POR', flagUrl: '🇵🇹', group: 'K', fifaRanking: 8, confederation: 'UEFA', isHost: false },
  { id: 42, name: 'DR Congo', code: 'COD', flagUrl: '🇨🇩', group: 'K', fifaRanking: 50, confederation: 'CAF', isHost: false },
  { id: 43, name: 'Uzbekistan', code: 'UZB', flagUrl: '🇺🇿', group: 'K', fifaRanking: 62, confederation: 'AFC', isHost: false },
  { id: 44, name: 'Colombia', code: 'COL', flagUrl: '🇨🇴', group: 'K', fifaRanking: 10, confederation: 'CONMEBOL', isHost: false },

  // Group L
  { id: 45, name: 'England', code: 'ENG', flagUrl: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', group: 'L', fifaRanking: 4, confederation: 'UEFA', isHost: false },
  { id: 46, name: 'Croatia', code: 'CRO', flagUrl: '🇭🇷', group: 'L', fifaRanking: 16, confederation: 'UEFA', isHost: false },
  { id: 47, name: 'Ghana', code: 'GHA', flagUrl: '🇬🇭', group: 'L', fifaRanking: 48, confederation: 'CAF', isHost: false },
  { id: 48, name: 'Panama', code: 'PAN', flagUrl: '🇵🇦', group: 'L', fifaRanking: 43, confederation: 'CONCACAF', isHost: false },
];

export function getTeamById(id: number): Team | undefined {
  return teams.find((t) => t.id === id);
}

export function getTeamsByGroup(group: string): Team[] {
  return teams.filter((t) => t.group === group);
}

export function getGroupLetters(): string[] {
  return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
}
