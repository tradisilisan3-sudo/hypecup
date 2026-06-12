'use client';

import { useEffect, useState, useCallback } from 'react';
import {
  fetchFixtures,
  fetchLiveFixtures,
  fetchStandings,
  fetchTopScorers,
  fetchTopAssists,
  mapApiStatus,
  type ApiFixture,
  type ApiStanding,
  type ApiTopScorer,
} from '@/lib/api-football';
import { matches as mockMatches } from '@/data/matches';
import { mockStandings } from '@/data/mock-data';
import { mockTopScorers, mockTopAssists } from '@/data/mock-data';
import type { Match, Standing, TopScorer, TopAssist } from '@/types';

// ---------------------------------------------------------------------------
// Helper: map API fixture → our Match type
// Tries to match by date proximity to our static match list
// ---------------------------------------------------------------------------
function mapApiFixtureToMatch(f: ApiFixture): Partial<Match> {
  return {
    kickoffTime: f.fixture.date,
    homeScore: f.goals.home ?? undefined,
    awayScore: f.goals.away ?? undefined,
    status: mapApiStatus(f.fixture.status.short),
    minute: f.fixture.status.elapsed ?? undefined,
  };
}

// ---------------------------------------------------------------------------
// useLiveMatches
// Returns matches merged: static fixture list + live scores from API
// Refreshes every 60 seconds when there are live games, every 5 min otherwise
// ---------------------------------------------------------------------------
export function useLiveMatches() {
  const [matches, setMatches]   = useState<Match[]>(mockMatches);
  const [isLive, setIsLive]     = useState(false);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      // First check for live games (cheap call)
      const liveData = await fetchLiveFixtures();
      const hasLive  = (liveData?.length ?? 0) > 0;
      setIsLive(hasLive);

      // Fetch full fixture list
      const allData  = await fetchFixtures();
      if (!allData) {
        setError('Could not reach API. Using cached data.');
        return;
      }

      // Merge API data onto our static list (preserving teamIds, stadiumId, group, stage)
      const merged = mockMatches.map((mock) => {
        // Find matching API fixture by comparing kickoff time (within 10 min window)
        const mockTime = new Date(mock.kickoffTime).getTime();
        const apiMatch = allData.find((f) => {
          const apiTime = new Date(f.fixture.date).getTime();
          return Math.abs(apiTime - mockTime) < 10 * 60 * 1000; // 10 min tolerance
        });

        if (!apiMatch) return mock;

        const update = mapApiFixtureToMatch(apiMatch);
        return { ...mock, ...update } as Match;
      });

      setMatches(merged);
      setError(null);
    } catch {
      setError('Failed to load live data. Using cached data.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();

    // Poll: 60s if live, 5min otherwise
    const interval = setInterval(load, isLive ? 60_000 : 300_000);
    return () => clearInterval(interval);
  }, [load, isLive]);

  return { matches, isLive, loading, error, refetch: load };
}

// ---------------------------------------------------------------------------
// useLiveStandings
// Returns standings from API, falls back to mock data
// Refreshes every 5 minutes
// ---------------------------------------------------------------------------
export function useLiveStandings() {
  const [standings, setStandings] = useState<Standing[]>(mockStandings);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const data = await fetchStandings();
      if (!data) {
        setError('Could not reach API. Using cached standings.');
        return;
      }

      // Flatten all groups into Standing[]
      const mapped: Standing[] = data.flatMap((group) =>
        group.map((entry: ApiStanding) => {
          // Extract single letter group from string like "Group A"
          const groupLetter = entry.group.replace('Group ', '').trim();
          return {
            teamId:         entry.team.id,        // NOTE: API team IDs ≠ our internal IDs
            group:          groupLetter,
            played:         entry.all.played,
            won:            entry.all.win,
            drawn:          entry.all.draw,
            lost:           entry.all.lose,
            goalsFor:       entry.all.goals.for,
            goalsAgainst:   entry.all.goals.against,
            goalDifference: entry.goalsDiff,
            points:         entry.points,
            position:       entry.rank,
            // Store API team name for display fallback
            apiTeamName:    entry.team.name,
            apiTeamLogo:    entry.team.logo,
          } as Standing & { apiTeamName: string; apiTeamLogo: string };
        })
      );

      setStandings(mapped);
      setError(null);
    } catch {
      setError('Failed to load standings. Using cached data.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
    const interval = setInterval(load, 300_000); // 5 min
    return () => clearInterval(interval);
  }, [load]);

  return { standings, loading, error, refetch: load };
}

// ---------------------------------------------------------------------------
// useLiveTopScorers
// ---------------------------------------------------------------------------
export function useLiveTopScorers() {
  const [scorers, setScorers] = useState<
    Array<{ name: string; teamName: string; teamLogo: string; goals: number; assists: number; matches: number }>
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const data = await fetchTopScorers();
      if (!data || data.length === 0) {
        setError('No scorer data yet. Tournament may just be starting.');
        setLoading(false);
        return;
      }

      const mapped = data.slice(0, 20).map((p: ApiTopScorer) => {
        const stat = p.statistics[0];
        return {
          name:     p.player.name,
          teamName: stat?.team.name  ?? '',
          teamLogo: stat?.team.logo  ?? '',
          goals:    stat?.goals.total    ?? 0,
          assists:  stat?.goals.assists  ?? 0,
          matches:  stat?.games.appearences ?? 0,
        };
      });

      setScorers(mapped);
      setError(null);
    } catch {
      setError('Failed to load top scorers.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
    const interval = setInterval(load, 300_000);
    return () => clearInterval(interval);
  }, [load]);

  return { scorers, loading, error, refetch: load };
}

// ---------------------------------------------------------------------------
// useLiveTopAssists
// ---------------------------------------------------------------------------
export function useLiveTopAssists() {
  const [assisters, setAssisters] = useState<
    Array<{ name: string; teamName: string; teamLogo: string; assists: number; matches: number }>
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const data = await fetchTopAssists();
      if (!data || data.length === 0) {
        setError('No assist data yet.');
        setLoading(false);
        return;
      }

      const mapped = data.slice(0, 20).map((p: ApiTopScorer) => {
        const stat = p.statistics[0];
        return {
          name:     p.player.name,
          teamName: stat?.team.name         ?? '',
          teamLogo: stat?.team.logo         ?? '',
          assists:  stat?.goals.assists     ?? 0,
          matches:  stat?.games.appearences ?? 0,
        };
      });

      setAssisters(mapped);
      setError(null);
    } catch {
      setError('Failed to load top assists.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
    const interval = setInterval(load, 300_000);
    return () => clearInterval(interval);
  }, [load]);

  return { assisters, loading, error, refetch: load };
}
