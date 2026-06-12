import { NextResponse } from 'next/server';

const API_KEY = process.env.API_FOOTBALL_KEY ?? process.env.NEXT_PUBLIC_API_FOOTBALL_KEY ?? '';
const BASE    = 'https://v3.football.api-sports.io';

async function apiFetch(path: string) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'x-apisports-key': API_KEY },
    next: { revalidate: 300 },
  });
  return res.json();
}

// GET /api/football/stats?type=scorers|assists
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') ?? 'scorers';

  try {
    const endpoint = type === 'assists'
      ? '/players/topassists?league=1&season=2026'
      : '/players/topscorers?league=1&season=2026';

    const data = await apiFetch(endpoint);
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
