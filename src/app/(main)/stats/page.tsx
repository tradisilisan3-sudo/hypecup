'use client';

import { mockTopScorers, mockTopAssists } from '@/data/mock-data';
import { getPlayerById } from '@/data/players';
import { getTeamById } from '@/data/teams';
import { TeamFlag } from '@/components/team-flag';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

function TopScorersTable() {
  const scorers = [...mockTopScorers].sort((a, b) => b.goals - a.goals);

  return (
    <div className="glass-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">#</th>
              <th className="text-left p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">Player</th>
              <th className="text-left p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">Team</th>
              <th className="text-center p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">MP</th>
              <th className="text-center p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">Goals</th>
              <th className="text-center p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium hidden sm:table-cell">Assists</th>
            </tr>
          </thead>
          <tbody>
            {scorers.map((scorer, index) => {
              const player = getPlayerById(scorer.playerId);
              const team = player ? getTeamById(player.teamId) : null;
              
              return (
                <tr key={scorer.playerId} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4">
                    <span className={`font-bold ${index < 3 ? 'text-[#D4AF37]' : 'text-muted-foreground'}`}>
                      {index + 1}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#0A1628] flex items-center justify-center text-sm font-bold border border-white/10">
                        {player?.shirtNumber}
                      </div>
                      <p className="font-medium">{player?.name ?? 'Unknown'}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      {team && <TeamFlag code={team.code} name={team.name} size="xs" />}
                      <span className="text-muted-foreground">{team?.code}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center text-muted-foreground">{scorer.matchesPlayed}</td>
                  <td className="p-4 text-center">
                    <span className="font-bold text-[#D4AF37] text-lg">{scorer.goals}</span>
                  </td>
                  <td className="p-4 text-center hidden sm:table-cell text-muted-foreground">{scorer.assists}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {scorers.length === 0 && (
        <div className="p-12 text-center text-muted-foreground">
          <p className="text-lg">⚽</p>
          <p className="mt-2">Top scorer data will appear once the tournament begins.</p>
        </div>
      )}
    </div>
  );
}

function TopAssistsTable() {
  const assists = [...mockTopAssists].sort((a, b) => b.assists - a.assists);

  return (
    <div className="glass-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">#</th>
              <th className="text-left p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">Player</th>
              <th className="text-left p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">Team</th>
              <th className="text-center p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">MP</th>
              <th className="text-center p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">Assists</th>
            </tr>
          </thead>
          <tbody>
            {assists.map((assist, index) => {
              const player = getPlayerById(assist.playerId);
              const team = player ? getTeamById(player.teamId) : null;
              
              return (
                <tr key={assist.playerId} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4">
                    <span className={`font-bold ${index < 3 ? 'text-[#D4AF37]' : 'text-muted-foreground'}`}>
                      {index + 1}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#0A1628] flex items-center justify-center text-sm font-bold border border-white/10">
                        {player?.shirtNumber}
                      </div>
                      <p className="font-medium">{player?.name ?? 'Unknown'}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      {team && <TeamFlag code={team.code} name={team.name} size="xs" />}
                      <span className="text-muted-foreground">{team?.code}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center text-muted-foreground">{assist.matchesPlayed}</td>
                  <td className="p-4 text-center">
                    <span className="font-bold text-[#D4AF37] text-lg">{assist.assists}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {assists.length === 0 && (
        <div className="p-12 text-center text-muted-foreground">
          <p className="text-lg">🎯</p>
          <p className="mt-2">Top assist data will appear once the tournament begins.</p>
        </div>
      )}
    </div>
  );
}

export default function StatsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gradient-gold font-[family-name:var(--font-heading)]">
          Tournament Stats
        </h1>
        <p className="text-muted-foreground mt-1">
          Top scorers and assist leaders of the World Cup 2026
        </p>
      </div>

      <Tabs defaultValue="scorers" className="w-full">
        <TabsList className="bg-white/5">
          <TabsTrigger value="scorers">⚽ Top Scorers</TabsTrigger>
          <TabsTrigger value="assists">🎯 Top Assists</TabsTrigger>
        </TabsList>

        <TabsContent value="scorers" className="mt-4">
          <TopScorersTable />
        </TabsContent>

        <TabsContent value="assists" className="mt-4">
          <TopAssistsTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}
