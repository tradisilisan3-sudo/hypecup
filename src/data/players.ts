import type { Player } from '@/types';

export const players: Player[] = [
  // ── Group A ─────────────────────────────────────────────────
  // Mexico (id: 1)
  { id: 1, name: 'Guillermo Ochoa', teamId: 1, position: 'GK', shirtNumber: 13 },
  { id: 2, name: 'Edson Álvarez', teamId: 1, position: 'MF', shirtNumber: 4 },
  { id: 3, name: 'Hirving Lozano', teamId: 1, position: 'FW', shirtNumber: 22 },

  // South Africa (id: 2)
  { id: 4, name: 'Percy Tau', teamId: 2, position: 'FW', shirtNumber: 11 },
  { id: 5, name: 'Ronwen Williams', teamId: 2, position: 'GK', shirtNumber: 1 },

  // Korea Republic (id: 3)
  { id: 6, name: 'Son Heung-min', teamId: 3, position: 'FW', shirtNumber: 7 },
  { id: 7, name: 'Kim Min-jae', teamId: 3, position: 'DF', shirtNumber: 3 },
  { id: 8, name: 'Lee Kang-in', teamId: 3, position: 'MF', shirtNumber: 10 },

  // Czechia (id: 4)
  { id: 9, name: 'Patrik Schick', teamId: 4, position: 'FW', shirtNumber: 10 },
  { id: 10, name: 'Tomáš Souček', teamId: 4, position: 'MF', shirtNumber: 28 },

  // ── Group B ─────────────────────────────────────────────────
  // Canada (id: 5)
  { id: 11, name: 'Alphonso Davies', teamId: 5, position: 'DF', shirtNumber: 19 },
  { id: 12, name: 'Jonathan David', teamId: 5, position: 'FW', shirtNumber: 20 },
  { id: 13, name: 'Cyle Larin', teamId: 5, position: 'FW', shirtNumber: 17 },

  // Bosnia and Herzegovina (id: 6)
  { id: 14, name: 'Edin Džeko', teamId: 6, position: 'FW', shirtNumber: 11 },
  { id: 15, name: 'Miralem Pjanić', teamId: 6, position: 'MF', shirtNumber: 15 },

  // Qatar (id: 7)
  { id: 16, name: 'Akram Afif', teamId: 7, position: 'FW', shirtNumber: 11 },
  { id: 17, name: 'Almoez Ali', teamId: 7, position: 'FW', shirtNumber: 19 },

  // Switzerland (id: 8)
  { id: 18, name: 'Granit Xhaka', teamId: 8, position: 'MF', shirtNumber: 10 },
  { id: 19, name: 'Breel Embolo', teamId: 8, position: 'FW', shirtNumber: 7 },
  { id: 20, name: 'Yann Sommer', teamId: 8, position: 'GK', shirtNumber: 1 },

  // ── Group C ─────────────────────────────────────────────────
  // Brazil (id: 9)
  { id: 21, name: 'Vinícius Júnior', teamId: 9, position: 'FW', shirtNumber: 7 },
  { id: 22, name: 'Rodrygo', teamId: 9, position: 'FW', shirtNumber: 11 },
  { id: 23, name: 'Casemiro', teamId: 9, position: 'MF', shirtNumber: 5 },

  // Morocco (id: 10)
  { id: 24, name: 'Achraf Hakimi', teamId: 10, position: 'DF', shirtNumber: 2 },
  { id: 25, name: 'Hakim Ziyech', teamId: 10, position: 'FW', shirtNumber: 7 },
  { id: 26, name: 'Youssef En-Nesyri', teamId: 10, position: 'FW', shirtNumber: 19 },

  // Haiti (id: 11)
  { id: 27, name: 'Duckens Nazon', teamId: 11, position: 'FW', shirtNumber: 20 },
  { id: 28, name: 'Frantzdy Pierrot', teamId: 11, position: 'FW', shirtNumber: 9 },

  // Scotland (id: 12)
  { id: 29, name: 'Andrew Robertson', teamId: 12, position: 'DF', shirtNumber: 3 },
  { id: 30, name: 'John McGinn', teamId: 12, position: 'MF', shirtNumber: 7 },
  { id: 31, name: 'Scott McTominay', teamId: 12, position: 'MF', shirtNumber: 6 },

  // ── Group D ─────────────────────────────────────────────────
  // United States (id: 13)
  { id: 32, name: 'Christian Pulisic', teamId: 13, position: 'FW', shirtNumber: 10 },
  { id: 33, name: 'Weston McKennie', teamId: 13, position: 'MF', shirtNumber: 8 },
  { id: 34, name: 'Gio Reyna', teamId: 13, position: 'MF', shirtNumber: 7 },

  // Paraguay (id: 14)
  { id: 35, name: 'Miguel Almirón', teamId: 14, position: 'MF', shirtNumber: 24 },
  { id: 36, name: 'Julio Enciso', teamId: 14, position: 'FW', shirtNumber: 10 },

  // Australia (id: 15)
  { id: 37, name: 'Mathew Leckie', teamId: 15, position: 'FW', shirtNumber: 7 },
  { id: 38, name: 'Jackson Irvine', teamId: 15, position: 'MF', shirtNumber: 8 },

  // Türkiye (id: 16)
  { id: 39, name: 'Hakan Çalhanoğlu', teamId: 16, position: 'MF', shirtNumber: 10 },
  { id: 40, name: 'Arda Güler', teamId: 16, position: 'MF', shirtNumber: 8 },
  { id: 41, name: 'Kerem Aktürkoğlu', teamId: 16, position: 'FW', shirtNumber: 7 },

  // ── Group E ─────────────────────────────────────────────────
  // Germany (id: 17)
  { id: 42, name: 'Jamal Musiala', teamId: 17, position: 'MF', shirtNumber: 10 },
  { id: 43, name: 'Florian Wirtz', teamId: 17, position: 'MF', shirtNumber: 17 },
  { id: 44, name: 'Kai Havertz', teamId: 17, position: 'FW', shirtNumber: 7 },

  // Curaçao (id: 18)
  { id: 45, name: 'Juninho Bacuna', teamId: 18, position: 'MF', shirtNumber: 14 },
  { id: 46, name: 'Kenji Gorré', teamId: 18, position: 'FW', shirtNumber: 7 },

  // Côte d'Ivoire (id: 19)
  { id: 47, name: 'Sébastien Haller', teamId: 19, position: 'FW', shirtNumber: 9 },
  { id: 48, name: 'Franck Kessié', teamId: 19, position: 'MF', shirtNumber: 8 },
  { id: 49, name: 'Nicolas Pépé', teamId: 19, position: 'FW', shirtNumber: 19 },

  // Ecuador (id: 20)
  { id: 50, name: 'Moisés Caicedo', teamId: 20, position: 'MF', shirtNumber: 23 },
  { id: 51, name: 'Enner Valencia', teamId: 20, position: 'FW', shirtNumber: 13 },

  // ── Group F ─────────────────────────────────────────────────
  // Netherlands (id: 21)
  { id: 52, name: 'Virgil van Dijk', teamId: 21, position: 'DF', shirtNumber: 4 },
  { id: 53, name: 'Cody Gakpo', teamId: 21, position: 'FW', shirtNumber: 11 },
  { id: 54, name: 'Frenkie de Jong', teamId: 21, position: 'MF', shirtNumber: 21 },

  // Japan (id: 22)
  { id: 55, name: 'Takefusa Kubo', teamId: 22, position: 'FW', shirtNumber: 11 },
  { id: 56, name: 'Kaoru Mitoma', teamId: 22, position: 'FW', shirtNumber: 9 },
  { id: 57, name: 'Wataru Endo', teamId: 22, position: 'MF', shirtNumber: 6 },

  // Sweden (id: 23)
  { id: 58, name: 'Alexander Isak', teamId: 23, position: 'FW', shirtNumber: 11 },
  { id: 59, name: 'Dejan Kulusevski', teamId: 23, position: 'FW', shirtNumber: 21 },

  // Tunisia (id: 24)
  { id: 60, name: 'Youssef Msakni', teamId: 24, position: 'FW', shirtNumber: 7 },
  { id: 61, name: 'Aïssa Laïdouni', teamId: 24, position: 'MF', shirtNumber: 14 },

  // ── Group G ─────────────────────────────────────────────────
  // Belgium (id: 25)
  { id: 62, name: 'Kevin De Bruyne', teamId: 25, position: 'MF', shirtNumber: 7 },
  { id: 63, name: 'Romelu Lukaku', teamId: 25, position: 'FW', shirtNumber: 9 },
  { id: 64, name: 'Jérémy Doku', teamId: 25, position: 'FW', shirtNumber: 11 },

  // Egypt (id: 26)
  { id: 65, name: 'Mohamed Salah', teamId: 26, position: 'FW', shirtNumber: 10 },
  { id: 66, name: 'Omar Marmoush', teamId: 26, position: 'FW', shirtNumber: 9 },

  // IR Iran (id: 27)
  { id: 67, name: 'Mehdi Taremi', teamId: 27, position: 'FW', shirtNumber: 9 },
  { id: 68, name: 'Sardar Azmoun', teamId: 27, position: 'FW', shirtNumber: 20 },

  // New Zealand (id: 28)
  { id: 69, name: 'Chris Wood', teamId: 28, position: 'FW', shirtNumber: 9 },
  { id: 70, name: 'Liberato Cacace', teamId: 28, position: 'DF', shirtNumber: 3 },

  // ── Group H ─────────────────────────────────────────────────
  // Spain (id: 29)
  { id: 71, name: 'Pedri', teamId: 29, position: 'MF', shirtNumber: 8 },
  { id: 72, name: 'Lamine Yamal', teamId: 29, position: 'FW', shirtNumber: 19 },
  { id: 73, name: 'Rodri', teamId: 29, position: 'MF', shirtNumber: 6 },

  // Cabo Verde (id: 30)
  { id: 74, name: 'Garry Rodrigues', teamId: 30, position: 'FW', shirtNumber: 7 },
  { id: 75, name: 'Ryan Mendes', teamId: 30, position: 'FW', shirtNumber: 10 },

  // Saudi Arabia (id: 31)
  { id: 76, name: 'Salem Al-Dawsari', teamId: 31, position: 'FW', shirtNumber: 10 },
  { id: 77, name: 'Mohammed Al-Owais', teamId: 31, position: 'GK', shirtNumber: 1 },

  // Uruguay (id: 32)
  { id: 78, name: 'Federico Valverde', teamId: 32, position: 'MF', shirtNumber: 15 },
  { id: 79, name: 'Darwin Núñez', teamId: 32, position: 'FW', shirtNumber: 11 },
  { id: 80, name: 'Ronald Araújo', teamId: 32, position: 'DF', shirtNumber: 4 },

  // ── Group I ─────────────────────────────────────────────────
  // France (id: 33)
  { id: 81, name: 'Kylian Mbappé', teamId: 33, position: 'FW', shirtNumber: 10 },
  { id: 82, name: 'Antoine Griezmann', teamId: 33, position: 'FW', shirtNumber: 7 },
  { id: 83, name: 'Aurélien Tchouaméni', teamId: 33, position: 'MF', shirtNumber: 8 },

  // Senegal (id: 34)
  { id: 84, name: 'Sadio Mané', teamId: 34, position: 'FW', shirtNumber: 10 },
  { id: 85, name: 'Kalidou Koulibaly', teamId: 34, position: 'DF', shirtNumber: 3 },
  { id: 86, name: 'Ismaïla Sarr', teamId: 34, position: 'FW', shirtNumber: 18 },

  // Iraq (id: 35)
  { id: 87, name: 'Mohanad Ali', teamId: 35, position: 'FW', shirtNumber: 9 },
  { id: 88, name: 'Aymen Hussein', teamId: 35, position: 'FW', shirtNumber: 10 },

  // Norway (id: 36)
  { id: 89, name: 'Erling Haaland', teamId: 36, position: 'FW', shirtNumber: 9 },
  { id: 90, name: 'Martin Ødegaard', teamId: 36, position: 'MF', shirtNumber: 10 },
  { id: 91, name: 'Alexander Sørloth', teamId: 36, position: 'FW', shirtNumber: 19 },

  // ── Group J ─────────────────────────────────────────────────
  // Argentina (id: 37)
  { id: 92, name: 'Lionel Messi', teamId: 37, position: 'FW', shirtNumber: 10 },
  { id: 93, name: 'Julián Álvarez', teamId: 37, position: 'FW', shirtNumber: 9 },
  { id: 94, name: 'Enzo Fernández', teamId: 37, position: 'MF', shirtNumber: 24 },

  // Algeria (id: 38)
  { id: 95, name: 'Riyad Mahrez', teamId: 38, position: 'FW', shirtNumber: 7 },
  { id: 96, name: 'Ismaël Bennacer', teamId: 38, position: 'MF', shirtNumber: 4 },

  // Austria (id: 39)
  { id: 97, name: 'David Alaba', teamId: 39, position: 'DF', shirtNumber: 8 },
  { id: 98, name: 'Marcel Sabitzer', teamId: 39, position: 'MF', shirtNumber: 7 },
  { id: 99, name: 'Christoph Baumgartner', teamId: 39, position: 'MF', shirtNumber: 14 },

  // Jordan (id: 40)
  { id: 100, name: 'Mousa Al-Taamari', teamId: 40, position: 'FW', shirtNumber: 7 },
  { id: 101, name: 'Yazan Al-Arab', teamId: 40, position: 'FW', shirtNumber: 11 },

  // ── Group K ─────────────────────────────────────────────────
  // Portugal (id: 41)
  { id: 102, name: 'Cristiano Ronaldo', teamId: 41, position: 'FW', shirtNumber: 7 },
  { id: 103, name: 'Bruno Fernandes', teamId: 41, position: 'MF', shirtNumber: 8 },
  { id: 104, name: 'Bernardo Silva', teamId: 41, position: 'MF', shirtNumber: 10 },

  // DR Congo (id: 42)
  { id: 105, name: 'Cédric Bakambu', teamId: 42, position: 'FW', shirtNumber: 9 },
  { id: 106, name: 'Chancel Mbemba', teamId: 42, position: 'DF', shirtNumber: 2 },

  // Uzbekistan (id: 43)
  { id: 107, name: 'Eldor Shomurodov', teamId: 43, position: 'FW', shirtNumber: 9 },
  { id: 108, name: 'Abbosbek Fayzullaev', teamId: 43, position: 'MF', shirtNumber: 10 },

  // Colombia (id: 44)
  { id: 109, name: 'Luis Díaz', teamId: 44, position: 'FW', shirtNumber: 7 },
  { id: 110, name: 'James Rodríguez', teamId: 44, position: 'MF', shirtNumber: 10 },
  { id: 111, name: 'Jhon Arias', teamId: 44, position: 'FW', shirtNumber: 17 },

  // ── Group L ─────────────────────────────────────────────────
  // England (id: 45)
  { id: 112, name: 'Jude Bellingham', teamId: 45, position: 'MF', shirtNumber: 10 },
  { id: 113, name: 'Harry Kane', teamId: 45, position: 'FW', shirtNumber: 9 },
  { id: 114, name: 'Bukayo Saka', teamId: 45, position: 'FW', shirtNumber: 7 },

  // Croatia (id: 46)
  { id: 115, name: 'Luka Modrić', teamId: 46, position: 'MF', shirtNumber: 10 },
  { id: 116, name: 'Mateo Kovačić', teamId: 46, position: 'MF', shirtNumber: 8 },
  { id: 117, name: 'Joško Gvardiol', teamId: 46, position: 'DF', shirtNumber: 20 },

  // Ghana (id: 47)
  { id: 118, name: 'Mohammed Kudus', teamId: 47, position: 'MF', shirtNumber: 10 },
  { id: 119, name: 'Thomas Partey', teamId: 47, position: 'MF', shirtNumber: 5 },

  // Panama (id: 48)
  { id: 120, name: 'Edgar Bárcenas', teamId: 48, position: 'FW', shirtNumber: 10 },
  { id: 121, name: 'José Fajardo', teamId: 48, position: 'FW', shirtNumber: 9 },
];

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------

export function getPlayerById(id: number): Player | undefined {
  return players.find((p) => p.id === id);
}

export function getPlayersByTeam(teamId: number): Player[] {
  return players.filter((p) => p.teamId === teamId);
}
