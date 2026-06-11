'use client';

import { matches } from '@/data/matches';
import { getTeamById } from '@/data/teams';
import { formatCompactDateTime } from '@/lib/timezone';
import { useTimezoneStore } from '@/store/timezone-store';
import { TeamFlag } from '@/components/team-flag';
import { Badge } from '@/components/ui/badge';
import type { MatchStage } from '@/types';

const stageConfig: Record<string, { label: string; color: string }> = {
  round_of_32: { label: 'Round of 32', color: 'border-blue-500/30 text-blue-400' },
  round_of_16: { label: 'Round of 16', color: 'border-purple-500/30 text-purple-400' },
  quarter_final: { label: 'Quarter Final', color: 'border-orange-500/30 text-orange-400' },
  semi_final: { label: 'Semi Final', color: 'border-red-500/30 text-red-400' },
  third_place: { label: '3rd Place', color: 'border-amber-600/30 text-amber-500' },
  final: { label: 'Final', color: 'border-[#D4AF37]/50 text-[#D4AF37]' },
};

function BracketMatch({ match }: { match: typeof matches[0] }) {
  const home = match.homeTeamId ? getTeamById(match.homeTeamId) : null;
  const away = match.awayTeamId ? getTeamById(match.awayTeamId) : null;
  const { timezone } = useTimezoneStore();

  return (
    <div className="glass-card p-3 min-w-[200px] hover:border-[#D4AF37]/20 transition-all duration-300">
      <div className="text-center mb-2">
        <p className="text-xs text-muted-foreground">
          {formatCompactDateTime(match.kickoffTime, timezone)}
        </p>
      </div>
      
      <div className="space-y-1.5">
        <div className={`flex items-center justify-between p-2 rounded-lg ${
          match.status === 'finished' && match.homeScore !== undefined && match.awayScore !== undefined && match.homeScore > match.awayScore
            ? 'bg-green-500/10'
            : 'bg-white/5'
        }`}>
          <div className="flex items-center gap-2">
            {home ? (
              <TeamFlag code={home.code} name={home.name} size="xs" />
            ) : (
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-muted-foreground shrink-0">?</div>
            )}
            <span className="text-sm font-medium">{home?.code ?? 'TBD'}</span>
          </div>
          <span className="font-bold text-sm">
            {match.status !== 'upcoming' ? (match.homeScore ?? 0) : '-'}
          </span>
        </div>
        
        <div className={`flex items-center justify-between p-2 rounded-lg ${
          match.status === 'finished' && match.homeScore !== undefined && match.awayScore !== undefined && match.awayScore > match.homeScore
            ? 'bg-green-500/10'
            : 'bg-white/5'
        }`}>
          <div className="flex items-center gap-2">
            {away ? (
              <TeamFlag code={away.code} name={away.name} size="xs" />
            ) : (
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-muted-foreground shrink-0">?</div>
            )}
            <span className="text-sm font-medium">{away?.code ?? 'TBD'}</span>
          </div>
          <span className="font-bold text-sm">
            {match.status !== 'upcoming' ? (match.awayScore ?? 0) : '-'}
          </span>
        </div>
      </div>
    </div>
  );
}

function BracketStage({ stage, label }: { stage: MatchStage; label: string }) {
  const stageMatches = matches.filter(m => m.stage === stage);
  const config = stageConfig[stage];

  if (stageMatches.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Badge variant="outline" className={`${config?.color}`}>
          {config?.label ?? label}
        </Badge>
        <span className="text-xs text-muted-foreground">{stageMatches.length} matches</span>
      </div>
      
      <div className={`grid gap-3 ${
        stage === 'final' || stage === 'third_place'
          ? 'grid-cols-1 max-w-xs mx-auto'
          : stage === 'semi_final'
            ? 'grid-cols-1 sm:grid-cols-2 max-w-lg mx-auto'
            : stage === 'quarter_final'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
              : stage === 'round_of_16'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      }`}>
        {stageMatches.map((match) => (
          <BracketMatch key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}

export default function BracketPage() {
  const knockoutStages: { stage: MatchStage; label: string }[] = [
    { stage: 'round_of_32', label: 'Round of 32' },
    { stage: 'round_of_16', label: 'Round of 16' },
    { stage: 'quarter_final', label: 'Quarter Finals' },
    { stage: 'semi_final', label: 'Semi Finals' },
    { stage: 'third_place', label: 'Third Place' },
    { stage: 'final', label: 'Final' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gradient-gold font-[family-name:var(--font-heading)]">
          Knockout Bracket
        </h1>
        <p className="text-muted-foreground mt-1">
          The road to the Final at MetLife Stadium 🏟
        </p>
      </div>

      {/* Tournament Flow */}
      <div className="glass-card p-4">
        <div className="flex items-center justify-between overflow-x-auto gap-2 text-xs">
          {knockoutStages.map((s, i) => (
            <div key={s.stage} className="flex items-center gap-2">
              <div className={`px-3 py-1.5 rounded-full whitespace-nowrap ${
                s.stage === 'final'
                  ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 font-bold'
                  : 'bg-white/5 text-muted-foreground'
              }`}>
                {s.label}
              </div>
              {i < knockoutStages.length - 1 && (
                <span className="text-muted-foreground">→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Final Highlight */}
      <div className="glass-gold p-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5" />
        <div className="relative z-10">
          <span className="text-4xl mb-2 block">🏆</span>
          <h2 className="text-xl font-bold text-[#D4AF37] font-[family-name:var(--font-heading)]">
            FIFA World Cup 2026 Final
          </h2>
          <p className="text-muted-foreground mt-1">July 19, 2026 • MetLife Stadium, East Rutherford</p>
        </div>
      </div>

      {/* Bracket stages in reverse order (Final first) */}
      {[...knockoutStages].reverse().map((s) => (
        <BracketStage key={s.stage} stage={s.stage} label={s.label} />
      ))}
    </div>
  );
}
