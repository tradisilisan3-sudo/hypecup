'use client';

import { useState } from 'react';
import { Target, Lock, Check, Trophy, Award, Star } from 'lucide-react';
import { matches } from '@/data/matches';
import { teams, getTeamById } from '@/data/teams';
import { players } from '@/data/players';
import { getStadiumById } from '@/data/stadiums';
import { mockCurrentUser } from '@/data/mock-data';
import { usePredictionStore } from '@/store/prediction-store';
import { formatCompactDateTime } from '@/lib/timezone';
import { useTimezoneStore } from '@/store/timezone-store';
import { TeamFlag } from '@/components/team-flag';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { toast } from 'sonner';

function ScorePredictionCard({ match }: { match: typeof matches[0] }) {
  const home = getTeamById(match.homeTeamId);
  const away = getTeamById(match.awayTeamId);
  const { addPrediction, getPredictionForMatch } = usePredictionStore();
  const { timezone } = useTimezoneStore();
  
  const existing = getPredictionForMatch(match.id);
  const [homeScore, setHomeScore] = useState(existing?.homeScore ?? 0);
  const [awayScore, setAwayScore] = useState(existing?.awayScore ?? 0);
  const isLocked = new Date(match.kickoffTime) <= new Date();

  if (!home || !away) return null;

  const handleSubmit = () => {
    addPrediction({
      userId: mockCurrentUser.id,
      matchId: match.id,
      homeScore,
      awayScore,
    });
    toast.success('Prediction saved!', {
      description: `${home.name} ${homeScore} - ${awayScore} ${away.name}`,
    });
  };

  return (
    <div className={`glass-card p-4 transition-all duration-300 ${isLocked ? 'opacity-60' : 'hover:border-[#D4AF37]/20'}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {match.group && (
            <Badge variant="outline" className="text-xs border-[#D4AF37]/30 text-[#D4AF37]">
              Group {match.group}
            </Badge>
          )}
          <span className="text-xs text-muted-foreground">
            {formatCompactDateTime(match.kickoffTime, timezone)}
          </span>
        </div>
        {isLocked && <Lock className="w-4 h-4 text-red-400" />}
        {existing && !isLocked && <Check className="w-4 h-4 text-green-400" />}
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-1">
          <TeamFlag code={home.code} name={home.name} size="sm" />
          <span className="text-sm font-medium truncate">{home.code}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            disabled={isLocked}
            onClick={() => setHomeScore(Math.max(0, homeScore - 1))}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-bold disabled:opacity-30 transition-colors"
          >-</button>
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-lg font-bold text-[#D4AF37]">
            {homeScore}
          </div>
          <button
            disabled={isLocked}
            onClick={() => setHomeScore(homeScore + 1)}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-bold disabled:opacity-30 transition-colors"
          >+</button>
          
          <span className="text-muted-foreground mx-1">:</span>
          
          <button
            disabled={isLocked}
            onClick={() => setAwayScore(Math.max(0, awayScore - 1))}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-bold disabled:opacity-30 transition-colors"
          >-</button>
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-lg font-bold text-[#D4AF37]">
            {awayScore}
          </div>
          <button
            disabled={isLocked}
            onClick={() => setAwayScore(awayScore + 1)}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-bold disabled:opacity-30 transition-colors"
          >+</button>
        </div>

        <div className="flex items-center gap-2 flex-1 justify-end">
          <span className="text-sm font-medium truncate">{away.code}</span>
          <TeamFlag code={away.code} name={away.name} size="sm" />
        </div>
      </div>

      {!isLocked && (
        <Button
          onClick={handleSubmit}
          size="sm"
          className="w-full mt-3 bg-[#D4AF37] text-[#0A1628] hover:bg-[#B8960B] font-semibold"
        >
          {existing ? 'Update Prediction' : 'Save Prediction'}
        </Button>
      )}
    </div>
  );
}

function ChampionPrediction() {
  const { addTournamentPrediction, getTournamentPrediction } = usePredictionStore();
  const [champion, setChampion] = useState<number | undefined>(getTournamentPrediction('champion')?.teamId);
  const [runnerUp, setRunnerUp] = useState<number | undefined>(getTournamentPrediction('runner_up')?.teamId);
  const [third, setThird] = useState<number | undefined>(getTournamentPrediction('third_place')?.teamId);

  const handleSave = (type: 'champion' | 'runner_up' | 'third_place', teamId: number) => {
    addTournamentPrediction({ userId: mockCurrentUser.id, type, teamId });
    if (type === 'champion') setChampion(teamId);
    if (type === 'runner_up') setRunnerUp(teamId);
    if (type === 'third_place') setThird(teamId);
    toast.success(`${type.replace('_', ' ')} prediction saved!`);
  };

  const predictions = [
    { type: 'champion' as const, label: '🏆 Champion', selected: champion, color: 'border-yellow-500/30' },
    { type: 'runner_up' as const, label: '🥈 Runner Up', selected: runnerUp, color: 'border-gray-400/30' },
    { type: 'third_place' as const, label: '🥉 Third Place', selected: third, color: 'border-orange-700/30' },
  ];

  return (
    <div className="space-y-4">
      {predictions.map((pred) => (
        <div key={pred.type} className={`glass-card p-4 ${pred.color}`}>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            {pred.label}
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
            {teams.map((team) => (
              <button
                key={team.id}
                onClick={() => handleSave(pred.type, team.id)}
                className={`p-2 rounded-lg text-center transition-all duration-200 flex flex-col items-center gap-1.5 ${
                  pred.selected === team.id
                    ? 'bg-[#D4AF37]/20 border border-[#D4AF37]/50 scale-105'
                    : 'bg-white/5 hover:bg-white/10 border border-transparent'
                }`}
              >
                <TeamFlag code={team.code} name={team.name} size="sm" className={pred.selected === team.id ? 'ring-[#D4AF37]/50' : ''} />
                <span className="text-xs mt-0.5 block truncate">{team.code}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function TopScorerPrediction() {
  const { addTournamentPrediction, getTournamentPrediction } = usePredictionStore();
  const [selected, setSelected] = useState<number | undefined>(getTournamentPrediction('top_scorer')?.playerId);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlayers = players.filter((p) => {
    if (!searchQuery) return p.position === 'Forward' || p.position === 'Midfielder';
    return p.name.toLowerCase().includes(searchQuery.toLowerCase());
  }).slice(0, 24);

  const handleSelect = (playerId: number) => {
    addTournamentPrediction({ userId: mockCurrentUser.id, type: 'top_scorer', playerId });
    setSelected(playerId);
    toast.success('Top Scorer prediction saved!');
  };

  return (
    <div className="glass-card p-4">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        ⚽ Top Scorer Prediction
      </h3>
      <input
        placeholder="Search players..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full mb-3 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm outline-none focus:border-[#D4AF37]/50"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-[400px] overflow-y-auto">
        {filteredPlayers.map((player) => {
          const team = getTeamById(player.teamId);
          return (
            <button
              key={player.id}
              onClick={() => handleSelect(player.id)}
              className={`p-3 rounded-lg text-left transition-all ${
                selected === player.id
                  ? 'bg-[#D4AF37]/20 border border-[#D4AF37]/50'
                  : 'bg-white/5 hover:bg-white/10 border border-transparent'
              }`}
            >
              <p className="text-sm font-medium truncate">{player.name}</p>
              <div className="flex items-center gap-1.5 mt-1">
                {team && <TeamFlag code={team.code} name={team.name} size="xs" />}
                <span className="text-xs text-muted-foreground">{team?.code} · #{player.shirtNumber}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function PredictionsPage() {
  const groupMatches = matches.filter(m => m.stage === 'group' && m.homeTeamId > 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gradient-gold font-[family-name:var(--font-heading)]">
          Prediction Center
        </h1>
        <p className="text-muted-foreground mt-1">
          Make your predictions and earn points! 🎯
        </p>
      </div>

      <Tabs defaultValue="scores" className="w-full">
        <TabsList className="bg-white/5 w-full justify-start overflow-x-auto">
          <TabsTrigger value="scores" className="flex items-center gap-1.5">
            <Target className="w-4 h-4" /> Match Scores
          </TabsTrigger>
          <TabsTrigger value="champion" className="flex items-center gap-1.5">
            <Trophy className="w-4 h-4" /> Champion
          </TabsTrigger>
          <TabsTrigger value="scorer" className="flex items-center gap-1.5">
            <Star className="w-4 h-4" /> Top Scorer
          </TabsTrigger>
        </TabsList>

        <TabsContent value="scores" className="mt-4">
          <div className="glass-card p-4 mb-4">
            <h3 className="font-semibold text-[#D4AF37] mb-2">Scoring Rules</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div className="p-2 rounded-lg bg-green-500/10 text-center">
                <p className="text-lg font-bold text-green-400">+5</p>
                <p className="text-xs text-muted-foreground">Exact Score</p>
              </div>
              <div className="p-2 rounded-lg bg-blue-500/10 text-center">
                <p className="text-lg font-bold text-blue-400">+3</p>
                <p className="text-xs text-muted-foreground">Goal Diff</p>
              </div>
              <div className="p-2 rounded-lg bg-yellow-500/10 text-center">
                <p className="text-lg font-bold text-yellow-400">+1</p>
                <p className="text-xs text-muted-foreground">Winner</p>
              </div>
              <div className="p-2 rounded-lg bg-red-500/10 text-center">
                <p className="text-lg font-bold text-red-400">0</p>
                <p className="text-xs text-muted-foreground">Wrong</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {groupMatches.map((match) => (
              <ScorePredictionCard key={match.id} match={match} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="champion" className="mt-4">
          <ChampionPrediction />
        </TabsContent>

        <TabsContent value="scorer" className="mt-4">
          <TopScorerPrediction />
        </TabsContent>
      </Tabs>
    </div>
  );
}
