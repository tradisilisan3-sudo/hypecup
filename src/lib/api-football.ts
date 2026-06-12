/**
 * API-Football client for HypeCup
 * All requests go through internal Next.js API routes (/api/football/*)
 * to avoid CORS and keep the API key server-side only.
 *
 * Docs: https://www.api-football.com/documentation-v3
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface ApiFixture {
  fixture: {
    id:     number;
    date:   string; // ISO 8601 UTC
    status: { short: string; elapsed: number | null; long: string };
  };
  league: {
    id:    number;
    name:  string;
    round: string;
  };
  teams: {
    home: { id: number; name: string; logo: string; winner: boolean | null };
    away: { id: number; name: string; logo: string; winner: boolean | null };
  };
  goals: { home: number | null; away: number | null };
  score: {
    halftime:  { home: number | null; away: number | null };
    fulltime:  { home: number | null; away: number | null };
    extratime: { home: number | null; away: number | null };
    penalty:   { home: number | null; away: number | null };
  };
}

export interface ApiStanding {
  rank:          number;
  team:          { id: number; name: string; logo: string };
  points:        number;
  goalsDiff:     number;
  group:         string;
  form:          string;
  all: {
    played: number;
    win:    number;
    draw:   number;
    lose:   number;
    goals:  { for: number; against: number };
  };
}

export interface ApiTopScorer {
  player: {
    id:    number;
    name:  string;
    photo: string;
  };
  statistics: Array<{
    team:  { id: number; name: string; logo: string };
    goals: { total: number | null; assists: number | null };
    games: { appearences: number | null };
  }>;
}

// ---------------------------------------------------------------------------
// Internal helpers — calls our own Next.js API routes (no CORS issue)
// ---------------------------------------------------------------------------
async function internalFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(path, {
      // No-store on client side so we always get fresh data
      cache: 'no-store',
    });
    if (!res.ok) {
      console.error(`[HypeCup API] ${path} → HTTP ${res.status}`);
      return null;
    }
    const json = await res.json();
    if (json.error) {
      console.error('[HypeCup API] Server error:', json.error);
      return null;
    }
    return (json.response ?? json) as T;
  } catch (err) {
    console.error(`[HypeCup API] fetch failed for ${path}:`, err);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Public API functions — called from client-side hooks
// ---------------------------------------------------------------------------

/** All World Cup 2026 group stage fixtures */
export async function fetchFixtures(): Promise<ApiFixture[] | null> {
  return internalFetch<ApiFixture[]>(
    '/api/football/fixtures?from=2026-06-11&to=2026-06-30&league=1&season=2026'
  );
}

/** Currently live World Cup fixtures */
export async function fetchLiveFixtures(): Promise<ApiFixture[] | null> {
  return internalFetch<ApiFixture[]>('/api/football/fixtures?live=all&league=1');
}

/** Group standings for all 12 groups */
export async function fetchStandings(): Promise<ApiStanding[][] | null> {
  const data = await internalFetch<Array<{ league: { standings: ApiStanding[][] } }>>(
    '/api/football/standings'
  );
  return data?.[0]?.league?.standings ?? null;
}

/** Top scorers */
export async function fetchTopScorers(): Promise<ApiTopScorer[] | null> {
  return internalFetch<ApiTopScorer[]>('/api/football/stats?type=scorers');
}

/** Top assist providers */
export async function fetchTopAssists(): Promise<ApiTopScorer[] | null> {
  return internalFetch<ApiTopScorer[]>('/api/football/stats?type=assists');
}

// ---------------------------------------------------------------------------
// Status mapper
// ---------------------------------------------------------------------------

/** Map API status short codes → our internal MatchStatus */
export function mapApiStatus(short: string): 'upcoming' | 'live' | 'finished' {
  if (['1H', '2H', 'HT', 'ET', 'BT', 'P', 'LIVE'].includes(short)) return 'live';
  if (['FT', 'AET', 'PEN'].includes(short)) return 'finished';
  return 'upcoming';
}
