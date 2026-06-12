'use client';

import { getGroupLetters, getTeamsByGroup } from '@/data/teams';
import { useLiveStandings } from '@/hooks/use-live-data';
import { TeamFlag } from '@/components/team-flag';
import { RefreshCw, Wifi, WifiOff } from 'lucide-react';
import type { Standing } from '@/types';

function GroupTable({
  group,
  standings,
}: {
  group: string;
  standings: Standing[];
}) {
  const teams = getTeamsByGroup(group);

  const rows = teams
    .map((team) => {
      const standing = standings.find((s) => s.teamId === team.id);
      return { team, standing };
    })
    .sort((a, b) => {
      if (!a.standing || !b.standing) return 0;
      if (b.standing.points !== a.standing.points)
        return b.standing.points - a.standing.points;
      return b.standing.goalDifference - a.standing.goalDifference;
    });

  return (
    <div className="glass-card overflow-hidden">
      <div className="px-4 py-3 border-b border-white/10 bg-gradient-to-r from-[#D4AF37]/10 to-transparent">
        <h3 className="font-bold text-[#D4AF37] font-[family-name:var(--font-heading)]">
          Group {group}
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-3 text-xs uppercase tracking-wider text-muted-foreground font-medium w-8">#</th>
              <th className="text-left p-3 text-xs uppercase tracking-wider text-muted-foreground font-medium">Team</th>
              <th className="text-center p-3 text-xs uppercase tracking-wider text-muted-foreground font-medium">P</th>
              <th className="text-center p-3 text-xs uppercase tracking-wider text-muted-foreground font-medium">W</th>
              <th className="text-center p-3 text-xs uppercase tracking-wider text-muted-foreground font-medium">D</th>
              <th className="text-center p-3 text-xs uppercase tracking-wider text-muted-foreground font-medium">L</th>
              <th className="text-center p-3 text-xs uppercase tracking-wider text-muted-foreground font-medium hidden sm:table-cell">GF</th>
              <th className="text-center p-3 text-xs uppercase tracking-wider text-muted-foreground font-medium hidden sm:table-cell">GA</th>
              <th className="text-center p-3 text-xs uppercase tracking-wider text-muted-foreground font-medium">GD</th>
              <th className="text-center p-3 text-xs uppercase tracking-wider text-muted-foreground font-bold font-medium">Pts</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ team, standing }, index) => {
              const pos = index + 1;
              const qualColor =
                pos <= 2
                  ? 'border-l-4 border-l-green-500'
                  : pos === 3
                  ? 'border-l-4 border-l-yellow-500'
                  : 'border-l-4 border-l-transparent';

              return (
                <tr
                  key={team.id}
                  className={`border-b border-white/5 hover:bg-white/5 transition-colors ${qualColor}`}
                >
                  <td className="p-3 text-muted-foreground font-medium">{pos}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-2.5">
                      <TeamFlag code={team.code} name={team.name} size="sm" />
                      <span className="font-medium">{team.name}</span>
                    </div>
                  </td>
                  <td className="p-3 text-center text-muted-foreground">{standing?.played ?? 0}</td>
                  <td className="p-3 text-center text-green-400">{standing?.won ?? 0}</td>
                  <td className="p-3 text-center text-yellow-400">{standing?.drawn ?? 0}</td>
                  <td className="p-3 text-center text-red-400">{standing?.lost ?? 0}</td>
                  <td className="p-3 text-center text-muted-foreground hidden sm:table-cell">{standing?.goalsFor ?? 0}</td>
                  <td className="p-3 text-center text-muted-foreground hidden sm:table-cell">{standing?.goalsAgainst ?? 0}</td>
                  <td className="p-3 text-center">{standing?.goalDifference ?? 0}</td>
                  <td className="p-3 text-center font-bold text-[#D4AF37]">{standing?.points ?? 0}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function StandingsPage() {
  const groups = getGroupLetters();
  const { standings, loading, error, refetch } = useLiveStandings();

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gradient-gold font-[family-name:var(--font-heading)]">
            Group Standings
          </h1>
          <p className="text-muted-foreground mt-1">
            12 groups, 48 teams — top 2 + 8 best 3rd qualify
          </p>
        </div>

        {/* Live / Offline badge */}
        <div className="flex items-center gap-3">
          {error ? (
            <span className="flex items-center gap-1.5 text-xs text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 px-2 py-1 rounded-full">
              <WifiOff className="w-3 h-3" /> Cached
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-1 rounded-full">
              <Wifi className="w-3 h-3" /> Live
            </span>
          )}
          <button
            onClick={refetch}
            disabled={loading}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-white transition-colors disabled:opacity-40"
          >
            <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <div className="w-3 h-3 rounded-sm bg-green-500" /> Top 2 (Auto-qualify)
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <div className="w-3 h-3 rounded-sm bg-yellow-500" /> 3rd (Possible qualify)
        </div>
      </div>

      {loading ? (
        <div className="glass-card p-12 text-center">
          <RefreshCw className="w-8 h-8 text-[#D4AF37] mx-auto mb-3 animate-spin" />
          <p className="text-muted-foreground text-sm">Loading live standings…</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {groups.map((group) => (
            <GroupTable key={group} group={group} standings={standings} />
          ))}
        </div>
      )}
    </div>
  );
}
