import { NextResponse } from 'next/server';

const API_KEY = process.env.API_FOOTBALL_KEY ?? process.env.NEXT_PUBLIC_API_FOOTBALL_KEY ?? '';
const BASE    = 'https://v3.football.api-sports.io';

async function apiFetch(path: string) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'x-apisports-key': API_KEY },
    next: { revalidate: 300 }, // cache 5 min on server
  });
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
}

// GET /api/football/fixtures?from=2026-06-11&to=2026-07-19
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const from   = searchParams.get('from') ?? '2026-06-11';
  const to     = searchParams.get('to')   ?? '2026-07-19';
  const league = searchParams.get('league') ?? '1';
  const season = searchParams.get('season') ?? '2026';
  const live   = searchParams.get('live');

  try {
    let data;
    if (live === 'all') {
      data = await apiFetch(`/fixtures?live=all&league=${league}`);
    } else {
      data = await apiFetch(
        `/fixtures?league=${league}&season=${season}&from=${from}&to=${to}`
      );
    }
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
