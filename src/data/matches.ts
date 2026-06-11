import type { Match, MatchStage } from '@/types';

// All times in UTC. ET (Eastern Daylight Time) = UTC-4.
// Official FIFA kickoff slots: 12PM ET=16:00Z, 3PM ET=19:00Z, 6PM ET=22:00Z, 9PM ET=01:00Z(+1), 12AM ET=04:00Z(+1)
// Sources: FIFA.com, FOX Sports, CBS Sports official schedule

export const matches: Match[] = [
  // ============================================================
  // GROUP STAGE — MATCHDAY 1 (June 11–16)
  // ============================================================

  // June 11 — Opening Day
  { id: 1,  homeTeamId: 1,  awayTeamId: 2,  stadiumId: 12, kickoffTime: '2026-06-11T19:00:00Z', stage: 'group', group: 'A', status: 'finished', homeScore: 2, awayScore: 0 }, // Mexico vs South Africa @ Estadio Azteca — 3:00PM ET
  { id: 2,  homeTeamId: 3,  awayTeamId: 4,  stadiumId: 2,  kickoffTime: '2026-06-12T02:00:00Z', stage: 'group', group: 'A', status: 'upcoming' }, // Korea Republic vs Czechia @ Guadalajara — 10:00PM ET Jun 11

  // June 12
  { id: 3,  homeTeamId: 5,  awayTeamId: 6,  stadiumId: 15, kickoffTime: '2026-06-12T19:00:00Z', stage: 'group', group: 'B', status: 'upcoming' }, // Canada vs Bosnia @ Toronto — 3:00PM ET
  { id: 4,  homeTeamId: 13, awayTeamId: 8,  stadiumId: 4,  kickoffTime: '2026-06-13T01:00:00Z', stage: 'group', group: 'D', status: 'upcoming' }, // USA vs Paraguay @ LA — 9:00PM ET Jun 12

  // June 13
  { id: 5,  homeTeamId: 7,  awayTeamId: 8,  stadiumId: 6,  kickoffTime: '2026-06-13T19:00:00Z', stage: 'group', group: 'B', status: 'upcoming' }, // Qatar vs Switzerland @ San Francisco — 3:00PM ET
  { id: 6,  homeTeamId: 9,  awayTeamId: 10, stadiumId: 1,  kickoffTime: '2026-06-13T22:00:00Z', stage: 'group', group: 'C', status: 'upcoming' }, // Brazil vs Morocco @ MetLife — 6:00PM ET
  { id: 7,  homeTeamId: 11, awayTeamId: 12, stadiumId: 4,  kickoffTime: '2026-06-14T01:00:00Z', stage: 'group', group: 'C', status: 'upcoming' }, // Haiti vs Scotland @ Boston — 9:00PM ET Jun 13
  { id: 8,  homeTeamId: 15, awayTeamId: 16, stadiumId: 5,  kickoffTime: '2026-06-14T04:00:00Z', stage: 'group', group: 'D', status: 'upcoming' }, // Australia vs Türkiye @ BC Place Vancouver — 12:00AM ET Jun 14

  // June 14
  { id: 9,  homeTeamId: 17, awayTeamId: 18, stadiumId: 3,  kickoffTime: '2026-06-14T19:00:00Z', stage: 'group', group: 'E', status: 'upcoming' }, // Germany vs Curaçao @ Houston — 3:00PM ET
  { id: 10, homeTeamId: 21, awayTeamId: 22, stadiumId: 9,  kickoffTime: '2026-06-14T22:00:00Z', stage: 'group', group: 'F', status: 'upcoming' }, // Netherlands vs Japan @ Dallas — 6:00PM ET (4PM CT)
  { id: 11, homeTeamId: 19, awayTeamId: 20, stadiumId: 6,  kickoffTime: '2026-06-15T01:00:00Z', stage: 'group', group: 'E', status: 'upcoming' }, // Côte d'Ivoire vs Ecuador — 9:00PM ET Jun 14
  { id: 12, homeTeamId: 23, awayTeamId: 24, stadiumId: 11, kickoffTime: '2026-06-15T04:00:00Z', stage: 'group', group: 'F', status: 'upcoming' }, // Sweden vs Tunisia @ Seattle — 12:00AM ET Jun 15

  // June 15
  { id: 13, homeTeamId: 25, awayTeamId: 26, stadiumId: 11, kickoffTime: '2026-06-15T19:00:00Z', stage: 'group', group: 'G', status: 'upcoming' }, // Belgium vs Egypt @ Seattle — 3:00PM ET (12PM PT)
  { id: 14, homeTeamId: 29, awayTeamId: 30, stadiumId: 4,  kickoffTime: '2026-06-15T22:00:00Z', stage: 'group', group: 'H', status: 'upcoming' }, // Spain vs Cabo Verde — 6:00PM ET
  { id: 15, homeTeamId: 27, awayTeamId: 28, stadiumId: 7,  kickoffTime: '2026-06-16T01:00:00Z', stage: 'group', group: 'G', status: 'upcoming' }, // IR Iran vs New Zealand — 9:00PM ET Jun 15
  { id: 16, homeTeamId: 31, awayTeamId: 32, stadiumId: 10, kickoffTime: '2026-06-16T04:00:00Z', stage: 'group', group: 'H', status: 'upcoming' }, // Saudi Arabia vs Uruguay — 12:00AM ET Jun 16

  // June 16
  { id: 17, homeTeamId: 33, awayTeamId: 34, stadiumId: 9,  kickoffTime: '2026-06-16T19:00:00Z', stage: 'group', group: 'I', status: 'upcoming' }, // France vs Senegal — 3:00PM ET
  { id: 18, homeTeamId: 41, awayTeamId: 42, stadiumId: 1,  kickoffTime: '2026-06-16T21:00:00Z', stage: 'group', group: 'K', status: 'upcoming' }, // Portugal vs DR Congo @ MetLife — 5:00PM ET
  { id: 19, homeTeamId: 35, awayTeamId: 36, stadiumId: 14, kickoffTime: '2026-06-17T01:00:00Z', stage: 'group', group: 'I', status: 'upcoming' }, // Iraq vs Norway — 9:00PM ET Jun 16
  { id: 20, homeTeamId: 43, awayTeamId: 44, stadiumId: 3,  kickoffTime: '2026-06-17T02:00:00Z', stage: 'group', group: 'K', status: 'upcoming' }, // Uzbekistan vs Colombia — 10:00PM ET Jun 16

  // June 17
  { id: 21, homeTeamId: 37, awayTeamId: 38, stadiumId: 4,  kickoffTime: '2026-06-17T19:00:00Z', stage: 'group', group: 'J', status: 'upcoming' }, // Argentina vs Algeria — 3:00PM ET
  { id: 22, homeTeamId: 45, awayTeamId: 46, stadiumId: 5,  kickoffTime: '2026-06-17T20:00:00Z', stage: 'group', group: 'L', status: 'upcoming' }, // England vs Croatia @ Dallas — 4:00PM ET (3PM CT)
  { id: 23, homeTeamId: 39, awayTeamId: 40, stadiumId: 8,  kickoffTime: '2026-06-17T23:00:00Z', stage: 'group', group: 'J', status: 'upcoming' }, // Austria vs Jordan — 7:00PM ET
  { id: 24, homeTeamId: 47, awayTeamId: 48, stadiumId: 13, kickoffTime: '2026-06-18T02:00:00Z', stage: 'group', group: 'L', status: 'upcoming' }, // Ghana vs Panama — 10:00PM ET Jun 17

  // ============================================================
  // GROUP STAGE — MATCHDAY 2 (June 18–23)
  // ============================================================

  // June 18
  { id: 25, homeTeamId: 1,  awayTeamId: 3,  stadiumId: 13, kickoffTime: '2026-06-18T19:00:00Z', stage: 'group', group: 'A', status: 'upcoming' }, // Mexico vs Korea Republic
  { id: 26, homeTeamId: 4,  awayTeamId: 2,  stadiumId: 10, kickoffTime: '2026-06-18T22:00:00Z', stage: 'group', group: 'A', status: 'upcoming' }, // Czechia vs South Africa
  { id: 27, homeTeamId: 8,  awayTeamId: 5,  stadiumId: 16, kickoffTime: '2026-06-19T01:00:00Z', stage: 'group', group: 'B', status: 'upcoming' }, // Switzerland vs Canada
  { id: 28, homeTeamId: 6,  awayTeamId: 7,  stadiumId: 3,  kickoffTime: '2026-06-19T04:00:00Z', stage: 'group', group: 'B', status: 'upcoming' }, // Bosnia vs Qatar

  // June 19
  { id: 29, homeTeamId: 10, awayTeamId: 11, stadiumId: 14, kickoffTime: '2026-06-19T19:00:00Z', stage: 'group', group: 'C', status: 'upcoming' }, // Morocco vs Haiti
  { id: 30, homeTeamId: 12, awayTeamId: 9,  stadiumId: 7,  kickoffTime: '2026-06-19T22:00:00Z', stage: 'group', group: 'C', status: 'upcoming' }, // Scotland vs Brazil
  { id: 31, homeTeamId: 16, awayTeamId: 13, stadiumId: 3,  kickoffTime: '2026-06-20T01:00:00Z', stage: 'group', group: 'D', status: 'upcoming' }, // Türkiye vs USA
  { id: 32, homeTeamId: 14, awayTeamId: 15, stadiumId: 6,  kickoffTime: '2026-06-20T04:00:00Z', stage: 'group', group: 'D', status: 'upcoming' }, // Paraguay vs Australia

  // June 20
  { id: 33, homeTeamId: 20, awayTeamId: 17, stadiumId: 1,  kickoffTime: '2026-06-20T19:00:00Z', stage: 'group', group: 'E', status: 'upcoming' }, // Ecuador vs Germany
  { id: 34, homeTeamId: 18, awayTeamId: 19, stadiumId: 12, kickoffTime: '2026-06-20T22:00:00Z', stage: 'group', group: 'E', status: 'upcoming' }, // Curaçao vs Côte d'Ivoire
  { id: 35, homeTeamId: 24, awayTeamId: 21, stadiumId: 5,  kickoffTime: '2026-06-21T01:00:00Z', stage: 'group', group: 'F', status: 'upcoming' }, // Tunisia vs Netherlands
  { id: 36, homeTeamId: 22, awayTeamId: 23, stadiumId: 8,  kickoffTime: '2026-06-21T04:00:00Z', stage: 'group', group: 'F', status: 'upcoming' }, // Japan vs Sweden

  // June 21
  { id: 37, homeTeamId: 26, awayTeamId: 27, stadiumId: 9,  kickoffTime: '2026-06-21T19:00:00Z', stage: 'group', group: 'G', status: 'upcoming' }, // Egypt vs IR Iran
  { id: 38, homeTeamId: 28, awayTeamId: 25, stadiumId: 15, kickoffTime: '2026-06-21T22:00:00Z', stage: 'group', group: 'G', status: 'upcoming' }, // New Zealand vs Belgium
  { id: 39, homeTeamId: 32, awayTeamId: 29, stadiumId: 2,  kickoffTime: '2026-06-22T01:00:00Z', stage: 'group', group: 'H', status: 'upcoming' }, // Uruguay vs Spain
  { id: 40, homeTeamId: 30, awayTeamId: 31, stadiumId: 11, kickoffTime: '2026-06-22T04:00:00Z', stage: 'group', group: 'H', status: 'upcoming' }, // Cabo Verde vs Saudi Arabia

  // June 22
  { id: 41, homeTeamId: 34, awayTeamId: 35, stadiumId: 6,  kickoffTime: '2026-06-22T19:00:00Z', stage: 'group', group: 'I', status: 'upcoming' }, // Senegal vs Iraq
  { id: 42, homeTeamId: 36, awayTeamId: 33, stadiumId: 10, kickoffTime: '2026-06-22T22:00:00Z', stage: 'group', group: 'I', status: 'upcoming' }, // Norway vs France
  { id: 43, homeTeamId: 38, awayTeamId: 39, stadiumId: 7,  kickoffTime: '2026-06-23T01:00:00Z', stage: 'group', group: 'J', status: 'upcoming' }, // Algeria vs Austria
  { id: 44, homeTeamId: 40, awayTeamId: 37, stadiumId: 4,  kickoffTime: '2026-06-23T04:00:00Z', stage: 'group', group: 'J', status: 'upcoming' }, // Jordan vs Argentina

  // June 23
  { id: 45, homeTeamId: 42, awayTeamId: 43, stadiumId: 5,  kickoffTime: '2026-06-23T19:00:00Z', stage: 'group', group: 'K', status: 'upcoming' }, // DR Congo vs Uzbekistan
  { id: 46, homeTeamId: 44, awayTeamId: 41, stadiumId: 2,  kickoffTime: '2026-06-23T22:00:00Z', stage: 'group', group: 'K', status: 'upcoming' }, // Colombia vs Portugal
  { id: 47, homeTeamId: 46, awayTeamId: 47, stadiumId: 12, kickoffTime: '2026-06-24T01:00:00Z', stage: 'group', group: 'L', status: 'upcoming' }, // Croatia vs Ghana
  { id: 48, homeTeamId: 48, awayTeamId: 45, stadiumId: 1,  kickoffTime: '2026-06-24T04:00:00Z', stage: 'group', group: 'L', status: 'upcoming' }, // Panama vs England

  // ============================================================
  // GROUP STAGE — MATCHDAY 3 (June 24–28) — Simultaneous kickoffs
  // ============================================================

  // June 24 — Group A final matchday
  { id: 49, homeTeamId: 2,  awayTeamId: 3,  stadiumId: 11, kickoffTime: '2026-06-25T00:00:00Z', stage: 'group', group: 'A', status: 'upcoming' }, // South Africa vs Korea Republic — 8:00PM ET Jun 24
  { id: 50, homeTeamId: 4,  awayTeamId: 1,  stadiumId: 12, kickoffTime: '2026-06-25T00:00:00Z', stage: 'group', group: 'A', status: 'upcoming' }, // Czechia vs Mexico (simultaneous)

  // Group B final matchday
  { id: 51, homeTeamId: 8,  awayTeamId: 6,  stadiumId: 16, kickoffTime: '2026-06-25T20:00:00Z', stage: 'group', group: 'B', status: 'upcoming' }, // Switzerland vs Bosnia — 4:00PM ET (Seattle)
  { id: 52, homeTeamId: 7,  awayTeamId: 5,  stadiumId: 15, kickoffTime: '2026-06-25T20:00:00Z', stage: 'group', group: 'B', status: 'upcoming' }, // Qatar vs Canada (simultaneous)

  // June 25 — Group C & D
  { id: 53, homeTeamId: 12, awayTeamId: 11, stadiumId: 7,  kickoffTime: '2026-06-26T00:00:00Z', stage: 'group', group: 'C', status: 'upcoming' }, // Scotland vs Haiti
  { id: 54, homeTeamId: 10, awayTeamId: 9,  stadiumId: 1,  kickoffTime: '2026-06-26T00:00:00Z', stage: 'group', group: 'C', status: 'upcoming' }, // Morocco vs Brazil (simultaneous)
  { id: 55, homeTeamId: 15, awayTeamId: 13, stadiumId: 8,  kickoffTime: '2026-06-26T20:00:00Z', stage: 'group', group: 'D', status: 'upcoming' }, // Australia vs USA — 4:00PM ET (Seattle)
  { id: 56, homeTeamId: 16, awayTeamId: 14, stadiumId: 14, kickoffTime: '2026-06-26T20:00:00Z', stage: 'group', group: 'D', status: 'upcoming' }, // Türkiye vs Paraguay (simultaneous)

  // June 26 — Group E & F
  { id: 57, homeTeamId: 18, awayTeamId: 20, stadiumId: 13, kickoffTime: '2026-06-27T00:00:00Z', stage: 'group', group: 'E', status: 'upcoming' }, // Curaçao vs Ecuador
  { id: 58, homeTeamId: 19, awayTeamId: 17, stadiumId: 3,  kickoffTime: '2026-06-27T00:00:00Z', stage: 'group', group: 'E', status: 'upcoming' }, // Côte d'Ivoire vs Germany (simultaneous)
  { id: 59, homeTeamId: 23, awayTeamId: 22, stadiumId: 9,  kickoffTime: '2026-06-27T20:00:00Z', stage: 'group', group: 'F', status: 'upcoming' }, // Sweden vs Japan
  { id: 60, homeTeamId: 24, awayTeamId: 21, stadiumId: 5,  kickoffTime: '2026-06-27T20:00:00Z', stage: 'group', group: 'F', status: 'upcoming' }, // Tunisia vs Netherlands (simultaneous)

  // June 27 — Group G & H
  { id: 61, homeTeamId: 28, awayTeamId: 26, stadiumId: 10, kickoffTime: '2026-06-28T00:00:00Z', stage: 'group', group: 'G', status: 'upcoming' }, // New Zealand vs Egypt
  { id: 62, homeTeamId: 27, awayTeamId: 25, stadiumId: 6,  kickoffTime: '2026-06-28T00:00:00Z', stage: 'group', group: 'G', status: 'upcoming' }, // IR Iran vs Belgium (simultaneous)
  { id: 63, homeTeamId: 31, awayTeamId: 29, stadiumId: 4,  kickoffTime: '2026-06-28T20:00:00Z', stage: 'group', group: 'H', status: 'upcoming' }, // Saudi Arabia vs Spain
  { id: 64, homeTeamId: 30, awayTeamId: 32, stadiumId: 2,  kickoffTime: '2026-06-28T20:00:00Z', stage: 'group', group: 'H', status: 'upcoming' }, // Cabo Verde vs Uruguay (simultaneous)

  // June 28 — Group I & J
  { id: 65, homeTeamId: 35, awayTeamId: 33, stadiumId: 3,  kickoffTime: '2026-06-29T00:00:00Z', stage: 'group', group: 'I', status: 'upcoming' }, // Iraq vs France
  { id: 66, homeTeamId: 36, awayTeamId: 34, stadiumId: 11, kickoffTime: '2026-06-29T00:00:00Z', stage: 'group', group: 'I', status: 'upcoming' }, // Norway vs Senegal (simultaneous)
  { id: 67, homeTeamId: 39, awayTeamId: 37, stadiumId: 1,  kickoffTime: '2026-06-29T20:00:00Z', stage: 'group', group: 'J', status: 'upcoming' }, // Austria vs Argentina
  { id: 68, homeTeamId: 40, awayTeamId: 38, stadiumId: 14, kickoffTime: '2026-06-29T20:00:00Z', stage: 'group', group: 'J', status: 'upcoming' }, // Jordan vs Algeria (simultaneous)

  // June 29 — Group K & L  (actual dates per FIFA — these wrap to June 29 UTC)
  { id: 69, homeTeamId: 43, awayTeamId: 41, stadiumId: 7,  kickoffTime: '2026-06-30T00:00:00Z', stage: 'group', group: 'K', status: 'upcoming' }, // Uzbekistan vs Portugal
  { id: 70, homeTeamId: 44, awayTeamId: 42, stadiumId: 6,  kickoffTime: '2026-06-30T00:00:00Z', stage: 'group', group: 'K', status: 'upcoming' }, // Colombia vs DR Congo (simultaneous)
  { id: 71, homeTeamId: 47, awayTeamId: 45, stadiumId: 5,  kickoffTime: '2026-06-30T20:00:00Z', stage: 'group', group: 'L', status: 'upcoming' }, // Ghana vs England
  { id: 72, homeTeamId: 48, awayTeamId: 46, stadiumId: 12, kickoffTime: '2026-06-30T20:00:00Z', stage: 'group', group: 'L', status: 'upcoming' }, // Panama vs Croatia (simultaneous)

  // ============================================================
  // ROUND OF 32 — (July 1–4, per official FIFA schedule)
  // ============================================================
  { id: 73,  homeTeamId: 0, awayTeamId: 0, stadiumId: 1,  kickoffTime: '2026-07-01T19:00:00Z', stage: 'round_of_32', status: 'upcoming' },
  { id: 74,  homeTeamId: 0, awayTeamId: 0, stadiumId: 2,  kickoffTime: '2026-07-01T22:00:00Z', stage: 'round_of_32', status: 'upcoming' },
  { id: 75,  homeTeamId: 0, awayTeamId: 0, stadiumId: 3,  kickoffTime: '2026-07-02T01:00:00Z', stage: 'round_of_32', status: 'upcoming' },
  { id: 76,  homeTeamId: 0, awayTeamId: 0, stadiumId: 4,  kickoffTime: '2026-07-02T19:00:00Z', stage: 'round_of_32', status: 'upcoming' },
  { id: 77,  homeTeamId: 0, awayTeamId: 0, stadiumId: 5,  kickoffTime: '2026-07-02T22:00:00Z', stage: 'round_of_32', status: 'upcoming' },
  { id: 78,  homeTeamId: 0, awayTeamId: 0, stadiumId: 6,  kickoffTime: '2026-07-03T01:00:00Z', stage: 'round_of_32', status: 'upcoming' },
  { id: 79,  homeTeamId: 0, awayTeamId: 0, stadiumId: 7,  kickoffTime: '2026-07-03T19:00:00Z', stage: 'round_of_32', status: 'upcoming' },
  { id: 80,  homeTeamId: 0, awayTeamId: 0, stadiumId: 8,  kickoffTime: '2026-07-03T22:00:00Z', stage: 'round_of_32', status: 'upcoming' },
  { id: 81,  homeTeamId: 0, awayTeamId: 0, stadiumId: 9,  kickoffTime: '2026-07-04T01:00:00Z', stage: 'round_of_32', status: 'upcoming' },
  { id: 82,  homeTeamId: 0, awayTeamId: 0, stadiumId: 10, kickoffTime: '2026-07-04T19:00:00Z', stage: 'round_of_32', status: 'upcoming' },
  { id: 83,  homeTeamId: 0, awayTeamId: 0, stadiumId: 11, kickoffTime: '2026-07-04T22:00:00Z', stage: 'round_of_32', status: 'upcoming' },
  { id: 84,  homeTeamId: 0, awayTeamId: 0, stadiumId: 12, kickoffTime: '2026-07-05T01:00:00Z', stage: 'round_of_32', status: 'upcoming' },
  { id: 85,  homeTeamId: 0, awayTeamId: 0, stadiumId: 13, kickoffTime: '2026-07-05T19:00:00Z', stage: 'round_of_32', status: 'upcoming' },
  { id: 86,  homeTeamId: 0, awayTeamId: 0, stadiumId: 14, kickoffTime: '2026-07-05T22:00:00Z', stage: 'round_of_32', status: 'upcoming' },
  { id: 87,  homeTeamId: 0, awayTeamId: 0, stadiumId: 15, kickoffTime: '2026-07-06T01:00:00Z', stage: 'round_of_32', status: 'upcoming' },
  { id: 88,  homeTeamId: 0, awayTeamId: 0, stadiumId: 16, kickoffTime: '2026-07-06T19:00:00Z', stage: 'round_of_32', status: 'upcoming' },

  // ============================================================
  // ROUND OF 16 — (July 7–10)
  // ============================================================
  { id: 89,  homeTeamId: 0, awayTeamId: 0, stadiumId: 1,  kickoffTime: '2026-07-07T19:00:00Z', stage: 'round_of_16', status: 'upcoming' },
  { id: 90,  homeTeamId: 0, awayTeamId: 0, stadiumId: 3,  kickoffTime: '2026-07-07T23:00:00Z', stage: 'round_of_16', status: 'upcoming' },
  { id: 91,  homeTeamId: 0, awayTeamId: 0, stadiumId: 5,  kickoffTime: '2026-07-08T19:00:00Z', stage: 'round_of_16', status: 'upcoming' },
  { id: 92,  homeTeamId: 0, awayTeamId: 0, stadiumId: 6,  kickoffTime: '2026-07-08T23:00:00Z', stage: 'round_of_16', status: 'upcoming' },
  { id: 93,  homeTeamId: 0, awayTeamId: 0, stadiumId: 2,  kickoffTime: '2026-07-09T19:00:00Z', stage: 'round_of_16', status: 'upcoming' },
  { id: 94,  homeTeamId: 0, awayTeamId: 0, stadiumId: 4,  kickoffTime: '2026-07-09T23:00:00Z', stage: 'round_of_16', status: 'upcoming' },
  { id: 95,  homeTeamId: 0, awayTeamId: 0, stadiumId: 12, kickoffTime: '2026-07-10T19:00:00Z', stage: 'round_of_16', status: 'upcoming' },
  { id: 96,  homeTeamId: 0, awayTeamId: 0, stadiumId: 10, kickoffTime: '2026-07-10T23:00:00Z', stage: 'round_of_16', status: 'upcoming' },

  // ============================================================
  // QUARTER-FINALS — (July 11–13)
  // ============================================================
  { id: 97,  homeTeamId: 0, awayTeamId: 0, stadiumId: 1,  kickoffTime: '2026-07-11T19:00:00Z', stage: 'quarter_final', status: 'upcoming' },
  { id: 98,  homeTeamId: 0, awayTeamId: 0, stadiumId: 2,  kickoffTime: '2026-07-11T23:00:00Z', stage: 'quarter_final', status: 'upcoming' },
  { id: 99,  homeTeamId: 0, awayTeamId: 0, stadiumId: 3,  kickoffTime: '2026-07-12T19:00:00Z', stage: 'quarter_final', status: 'upcoming' },
  { id: 100, homeTeamId: 0, awayTeamId: 0, stadiumId: 12, kickoffTime: '2026-07-13T19:00:00Z', stage: 'quarter_final', status: 'upcoming' },

  // ============================================================
  // SEMI-FINALS — (July 14–15)
  // ============================================================
  { id: 101, homeTeamId: 0, awayTeamId: 0, stadiumId: 1,  kickoffTime: '2026-07-14T22:00:00Z', stage: 'semi_final', status: 'upcoming' }, // MetLife Stadium — 6PM ET
  { id: 102, homeTeamId: 0, awayTeamId: 0, stadiumId: 3,  kickoffTime: '2026-07-15T22:00:00Z', stage: 'semi_final', status: 'upcoming' }, // AT&T Stadium Dallas — 6PM ET

  // ============================================================
  // THIRD-PLACE PLAY-OFF (July 18)
  // ============================================================
  { id: 103, homeTeamId: 0, awayTeamId: 0, stadiumId: 12, kickoffTime: '2026-07-18T22:00:00Z', stage: 'third_place', status: 'upcoming' }, // Rose Bowl — 6PM ET

  // ============================================================
  // FINAL (July 19)
  // ============================================================
  { id: 104, homeTeamId: 0, awayTeamId: 0, stadiumId: 1,  kickoffTime: '2026-07-19T22:00:00Z', stage: 'final', status: 'upcoming' }, // MetLife Stadium — 6PM ET
];

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------

export function getMatchesByStage(stage: MatchStage): Match[] {
  return matches.filter((m) => m.stage === stage);
}

export function getMatchesByGroup(group: string): Match[] {
  return matches.filter((m) => m.group === group);
}

export function getMatchesByDate(date: string): Match[] {
  return matches.filter((m) => m.kickoffTime.startsWith(date));
}

export function getMatchById(id: number): Match | undefined {
  return matches.find((m) => m.id === id);
}

export function getUpcomingMatches(): Match[] {
  return matches.filter((m) => m.status === 'upcoming');
}

export function getLiveMatches(): Match[] {
  return matches.filter((m) => m.status === 'live');
}

export function getFinishedMatches(): Match[] {
  return matches.filter((m) => m.status === 'finished');
}

export function getNextMatch(): Match | undefined {
  const now = new Date().toISOString();
  return matches
    .filter((m) => m.status === 'upcoming' && m.kickoffTime > now)
    .sort((a, b) => a.kickoffTime.localeCompare(b.kickoffTime))[0];
}
