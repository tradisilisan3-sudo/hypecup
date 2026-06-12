import { NextResponse } from 'next/server';

const API_KEY = process.env.API_FOOTBALL_KEY ?? process.env.NEXT_PUBLIC_API_FOOTBALL_KEY ?? '';
const BASE    = 'https://v3.football.api-sports.io';

export async function GET() {
  try {
    const res = await fetch(
      `${BASE}/standings?league=1&season=2026`,
      {
        headers: { 'x-apisports-key': API_KEY },
        next: { revalidate: 300 },
      }
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
