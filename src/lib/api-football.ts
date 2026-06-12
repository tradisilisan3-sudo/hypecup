/**
 * API-Football client for HypeCup
 * Provider: api-sports.io (v3.football.api-sports.io)
 * Plan: Free (100 req/day)
 * Docs: https://www.api-football.com/documentation-v3
 */

const API_KEY  = process.env.NEXT_PUBLIC_API_FOOTBALL_KEY!;
const BASE_URL = 'https://v3.football.api-sports.io';
const LEAGUE   = Number(process.env.NEXT_PUBLIC_WC_LEAGUE_ID  ?? 1);
const SEASON   = Number(process.env.NEXT_PUBLIC_WC_SEASON     ?? 2026);

// ---------------------------------------------------------------------------
// Low-level fetch helper
// ---------------------------------------------------------------------------
async function apiFetch<T>(endpoint: string): Promise<T | null> {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        'x-apisports-key': API_KEY,
      },
      // Cache for 5 minutes — reduces daily quota burn
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      console.error(`[API-Football] ${endpoint} → HTTP ${res.status}`);
      return null;
    }

    const json = await res.json();

    // API-Football wraps results in { response: [...] }
    if (json.errors && Object.keys(json.errors).length > 0) {
      console.error('[API-Football] API error:', json.errors);
      return null;
    }

    return json.response as T;
  } catch (err) {
    console.error(`[API-Football] fetch failed for ${endpoint}:`, err);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Types (slim — only what we need)
// ---------------------------------------------------------------------------
export interface ApiFixture {
  fixture: {
    id:     number;
    date:   string;   // ISO 8601 UTC
    status: { short: string; elapsed: number | null };
  };
  league: { round: string };
  teams: {
    home: { id: number; name: string; logo: string };
    away: { id: number; name: string; logo: string };
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
  all: {
    played: number;
    win:    number;
    draw:   number;
    lose:   number;
    goals:  { for: number; against: number };
  };
}

export interface ApiTopScorer {
  player: { id: number; name: string; photo: string };
  statistics: Array<{
    team:  { id: number; name: string; logo: string };
    goals: { total: number | null; assists: number | null };
    games: { appearences: number | null };
  }>;
}

// ---------------------------------------------------------------------------
// Public API functions
// ---------------------------------------------------------------------------

/**
 * All World Cup 2026 fixtures (group stage + knockout).
 * Cached 5 min — call this from a client-side hook with SWR-style refresh.
 */
export async function fetchFixtures(): Promise<ApiFixture[] | null> {
  return apiFetch<ApiFixture[]>(
    `/fixtures?league=${LEAGUE}&season=${SEASON}`
  );
}

/**
 * Currently live World Cup fixtures.
 */
export async function fetchLiveFixtures(): Promise<ApiFixture[] | null> {
  return apiFetch<ApiFixture[]>(
    `/fixtures?live=all&league=${LEAGUE}`
  );
}

/**
 * Group standings for all 12 groups.
 */
export async function fetchStandings(): Promise<ApiStanding[][] | null> {
  const data = await apiFetch<Array<{ league: { standings: ApiStanding[][] } }>>(
    `/standings?league=${LEAGUE}&season=${SEASON}`
  );
  return data?.[0]?.league?.standings ?? null;
}

/**
 * Top scorers list (up to 20 players).
 */
export async function fetchTopScorers(): Promise<ApiTopScorer[] | null> {
  return apiFetch<ApiTopScorer[]>(
    `/players/topscorers?league=${LEAGUE}&season=${SEASON}`
  );
}

/**
 * Top assist providers list (up to 20 players).
 */
export async function fetchTopAssists(): Promise<ApiTopScorer[] | null> {
  return apiFetch<ApiTopScorer[]>(
    `/players/topassists?league=${LEAGUE}&season=${SEASON}`
  );
}

// ---------------------------------------------------------------------------
// Status helpers
// ---------------------------------------------------------------------------

/** Map API status codes to our internal MatchStatus */
export function mapApiStatus(short: string): 'upcoming' | 'live' | 'finished' {
  if (['1H', '2H', 'HT', 'ET', 'BT', 'P', 'LIVE'].includes(short)) return 'live';
  if (['FT', 'AET', 'PEN'].includes(short)) return 'finished';
  return 'upcoming';
}
