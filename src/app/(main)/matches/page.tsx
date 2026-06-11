'use client';

import { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { matches } from '@/data/matches';
import { getTeamById } from '@/data/teams';
import { getStadiumById } from '@/data/stadiums';
import { formatTimeOnly, formatMatchDateTime } from '@/lib/timezone';
import { useTimezoneStore } from '@/store/timezone-store';
import { TeamFlag } from '@/components/team-flag';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { MatchStage, MatchStatus } from '@/types';

const stageLabels: Record<MatchStage, string> = {
  group: 'Group Stage',
  round_of_32: 'Round of 32',
  round_of_16: 'Round of 16',
  quarter_final: 'Quarter Final',
  semi_final: 'Semi Final',
  third_place: '3rd Place',
  final: 'Final',
};

const statusColors: Record<MatchStatus, string> = {
  upcoming: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  live: 'bg-red-500/10 text-red-400 border-red-500/20 animate-pulse',
  finished: 'bg-green-500/10 text-green-400 border-green-500/20',
};

function MatchCard({ match }: { match: typeof matches[0] }) {
  const home = getTeamById(match.homeTeamId);
  const away = getTeamById(match.awayTeamId);
  const stadium = getStadiumById(match.stadiumId);
  const { timezone } = useTimezoneStore();

  if (!home || !away) {
    return (
      <div className="glass-card p-4 opacity-50">
        <div className="text-center text-sm text-muted-foreground">
          <p className="font-medium">{stageLabels[match.stage]}</p>
          <p className="text-xs mt-1">TBD vs TBD</p>
          <p className="text-xs mt-1">{formatMatchDateTime(match.kickoffTime, timezone)}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-4 hover:border-[#D4AF37]/20 transition-all duration-300 group">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {match.group && (
            <Badge variant="outline" className="text-xs border-[#D4AF37]/30 text-[#D4AF37]">
              Group {match.group}
            </Badge>
          )}
          {!match.group && (
            <Badge variant="outline" className="text-xs border-purple-500/30 text-purple-400">
              {stageLabels[match.stage]}
            </Badge>
          )}
        </div>
        <Badge variant="outline" className={`text-xs ${statusColors[match.status]}`}>
          {match.status === 'live' ? '● LIVE' : match.status.charAt(0).toUpperCase() + match.status.slice(1)}
        </Badge>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <TeamFlag code={home.code} name={home.name} size="md" />
          <div>
            <p className="font-semibold text-sm">{home.name}</p>
            <p className="text-xs text-muted-foreground">{home.code}</p>
          </div>
        </div>

        <div className="text-center px-4 min-w-[80px]">
          {match.status === 'finished' || match.status === 'live' ? (
            <div>
              <span className="text-2xl font-bold">
                {match.homeScore ?? 0} - {match.awayScore ?? 0}
              </span>
              {match.minute && (
                <p className="text-xs text-red-400 mt-0.5">{match.minute}&apos;</p>
              )}
            </div>
          ) : (
            <div>
              <p className="text-sm font-medium text-[#D4AF37]">
                {formatTimeOnly(match.kickoffTime, timezone)}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {formatMatchDateTime(match.kickoffTime, timezone).split(',')[0]}
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 flex-1 justify-end text-right">
          <div>
            <p className="font-semibold text-sm">{away.name}</p>
            <p className="text-xs text-muted-foreground">{away.code}</p>
          </div>
          <TeamFlag code={away.code} name={away.name} size="md" />
        </div>
      </div>

      {stadium && (
        <div className="mt-3 pt-3 border-t border-white/5">
          <p className="text-xs text-muted-foreground text-center">
            🏟 {stadium.name}, {stadium.city}
          </p>
        </div>
      )}
    </div>
  );
}

export default function MatchesPage() {
  const [stageFilter, setStageFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMatches = useMemo(() => {
    return matches.filter((m) => {
      if (stageFilter !== 'all' && m.stage !== stageFilter) return false;
      if (statusFilter !== 'all' && m.status !== statusFilter) return false;
      if (searchQuery) {
        const home = getTeamById(m.homeTeamId);
        const away = getTeamById(m.awayTeamId);
        const query = searchQuery.toLowerCase();
        if (!home?.name.toLowerCase().includes(query) && !away?.name.toLowerCase().includes(query)) {
          return false;
        }
      }
      return true;
    });
  }, [stageFilter, statusFilter, searchQuery]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gradient-gold font-[family-name:var(--font-heading)]">
          Matches
        </h1>
        <p className="text-muted-foreground mt-1">
          All 104 matches of the FIFA World Cup 2026
        </p>
      </div>

      {/* Filters */}
      <div className="glass-card p-4 space-y-4">
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search teams..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-white/5 border-white/10"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <Tabs value={stageFilter} onValueChange={setStageFilter}>
            <TabsList className="bg-white/5 w-full justify-start">
              <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
              <TabsTrigger value="group" className="text-xs">Groups</TabsTrigger>
              <TabsTrigger value="round_of_32" className="text-xs">R32</TabsTrigger>
              <TabsTrigger value="round_of_16" className="text-xs">R16</TabsTrigger>
              <TabsTrigger value="quarter_final" className="text-xs">QF</TabsTrigger>
              <TabsTrigger value="semi_final" className="text-xs">SF</TabsTrigger>
              <TabsTrigger value="final" className="text-xs">Final</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex gap-2">
          {(['all', 'upcoming', 'live', 'finished'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                statusFilter === status
                  ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30'
                  : 'bg-white/5 text-muted-foreground hover:bg-white/10'
              }`}
            >
              {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Match Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredMatches.length} matches
        </p>
      </div>

      {/* Match Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>

      {filteredMatches.length === 0 && (
        <div className="glass-card p-12 text-center">
          <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
          <p className="text-muted-foreground">No matches found matching your filters.</p>
        </div>
      )}
    </div>
  );
}
