'use client';

import { Trophy, Target, Medal, TrendingUp, Clock, Calendar, ChevronRight, Zap, Star } from 'lucide-react';
import { useCountdown } from '@/hooks/use-countdown';
import { getNextMatch, matches } from '@/data/matches';
import { getTeamById } from '@/data/teams';
import { getStadiumById } from '@/data/stadiums';
import { mockCurrentUser } from '@/data/mock-data';
import { getBadgeEmoji, calculateAccuracy } from '@/lib/scoring/calculate-points';
import { calculatePrediction } from '@/lib/ai/prediction-engine';
import { formatMatchDateTime, formatTimeOnly } from '@/lib/timezone';
import { useTimezoneStore } from '@/store/timezone-store';
import { TeamFlag } from '@/components/team-flag';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';

function CountdownTimer() {
  const nextMatch = getNextMatch();
  const countdown = useCountdown(nextMatch?.kickoffTime || '2026-06-11T18:00:00Z');
  const home = nextMatch ? getTeamById(nextMatch.homeTeamId) : null;
  const away = nextMatch ? getTeamById(nextMatch.awayTeamId) : null;
  const stadium = nextMatch ? getStadiumById(nextMatch.stadiumId) : null;
  const { timezone } = useTimezoneStore();

  const digits = [
    { label: 'Days', value: countdown.days },
    { label: 'Hours', value: countdown.hours },
    { label: 'Minutes', value: countdown.minutes },
    { label: 'Seconds', value: countdown.seconds },
  ];

  return (
    <div className="glass-gold p-6 md:p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-[#D4AF37]" />
          <h2 className="text-lg font-semibold text-[#D4AF37]">Next Match Countdown</h2>
        </div>
        
        <div className="flex justify-center gap-3 md:gap-6 mb-6">
          {digits.map((d) => (
            <div key={d.label} className="text-center">
              <div className="glass-card px-3 py-2 md:px-5 md:py-3 rounded-xl mb-1 min-w-[60px] md:min-w-[80px]">
                <span className="text-2xl md:text-4xl font-bold text-gradient-gold font-[family-name:var(--font-heading)]">
                  {String(d.value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{d.label}</span>
            </div>
          ))}
        </div>

        {home && away && (
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <div className="flex flex-col items-center">
              <TeamFlag code={home.code} name={home.name} size="xl" />
              <p className="text-sm font-medium mt-2">{home.name}</p>
            </div>
            <div className="text-center">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">vs</span>
              {stadium && (
                <p className="text-xs text-muted-foreground mt-1">{stadium.name}</p>
              )}
              {nextMatch && (
                <p className="text-xs text-[#D4AF37] mt-0.5 font-medium">
                  {formatMatchDateTime(nextMatch.kickoffTime, timezone)}
                </p>
              )}
            </div>
            <div className="flex flex-col items-center">
              <TeamFlag code={away.code} name={away.name} size="xl" />
              <p className="text-sm font-medium mt-2">{away.name}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StatsCards() {
  const user = mockCurrentUser;
  const accuracy = calculateAccuracy(user.exactScores, user.correctDiffs, user.correctWinners, user.totalPredictions);
  
  const stats = [
    { label: 'Total Points', value: user.totalPoints, icon: Trophy, color: 'text-[#D4AF37]' },
    { label: 'Predictions', value: user.totalPredictions, icon: Target, color: 'text-blue-400' },
    { label: 'Global Rank', value: `#${user.rank}`, icon: Medal, color: 'text-purple-400' },
    { label: 'Accuracy', value: `${accuracy}%`, icon: TrendingUp, color: 'text-green-400' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="glass-card p-4 md:p-6 group hover:border-[#D4AF37]/30 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
            <stat.icon className={`w-4 h-4 ${stat.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
          </div>
          <p className={`text-xl md:text-3xl font-bold ${stat.color}`}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

function TodayMatches() {
  const { timezone } = useTimezoneStore();
  const today = new Date().toISOString().slice(0, 10);
  const todayMatches = matches.filter(m => m.kickoffTime.startsWith(today)).slice(0, 4);
  const upcomingMatches = todayMatches.length > 0 ? todayMatches : matches.filter(m => m.status === 'upcoming' && m.homeTeamId > 0).slice(0, 4);

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#D4AF37]" />
          <h2 className="text-lg font-semibold">Upcoming Matches</h2>
        </div>
        <Link href="/matches" className="text-sm text-[#D4AF37] hover:underline flex items-center gap-1">
          View All <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      
      <div className="space-y-3">
        {upcomingMatches.map((match) => {
          const home = getTeamById(match.homeTeamId);
          const away = getTeamById(match.awayTeamId);
          if (!home || !away) return null;
          
          return (
            <div key={match.id} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/8 transition-colors">
              <div className="flex items-center gap-2.5 flex-1">
                <TeamFlag code={home.code} name={home.name} size="sm" />
                <span className="text-sm font-medium truncate">{home.code}</span>
              </div>
              <div className="text-center px-3">
                {match.status === 'live' ? (
                  <Badge variant="destructive" className="animate-pulse">LIVE</Badge>
                ) : match.status === 'finished' ? (
                  <span className="text-lg font-bold">{match.homeScore} - {match.awayScore}</span>
                ) : (
                  <span className="text-xs text-[#D4AF37] font-medium">
                    {formatTimeOnly(match.kickoffTime, timezone)}
                  </span>
                )}
                {match.group && <p className="text-xs text-muted-foreground mt-0.5">Group {match.group}</p>}
              </div>
              <div className="flex items-center gap-2.5 flex-1 justify-end">
                <span className="text-sm font-medium truncate">{away.code}</span>
                <TeamFlag code={away.code} name={away.name} size="sm" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function UserRankCard() {
  const user = mockCurrentUser;
  
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-[#D4AF37]" />
          <h2 className="text-lg font-semibold">Your Profile</h2>
        </div>
        <Badge variant="outline" className="border-[#D4AF37]/30 text-[#D4AF37]">
          {getBadgeEmoji(user.badge)} {user.badge}
        </Badge>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center text-2xl font-bold text-[#0A1628]">
            {user.username.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-semibold text-lg">{user.fullName}</p>
            <p className="text-sm text-muted-foreground">@{user.username}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Points to Expert</span>
              <span className="text-[#D4AF37]">{user.totalPoints}/150</span>
            </div>
            <Progress value={(user.totalPoints / 150) * 100} className="h-2" />
          </div>
          
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 rounded-lg bg-green-500/10">
              <p className="text-lg font-bold text-green-400">{user.exactScores}</p>
              <p className="text-xs text-muted-foreground">Exact</p>
            </div>
            <div className="p-2 rounded-lg bg-blue-500/10">
              <p className="text-lg font-bold text-blue-400">{user.correctDiffs}</p>
              <p className="text-xs text-muted-foreground">Diff</p>
            </div>
            <div className="p-2 rounded-lg bg-yellow-500/10">
              <p className="text-lg font-bold text-yellow-400">{user.correctWinners}</p>
              <p className="text-xs text-muted-foreground">Winner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AIPredictionPreview() {
  const nextMatch = getNextMatch();
  const home = nextMatch ? getTeamById(nextMatch.homeTeamId) : null;
  const away = nextMatch ? getTeamById(nextMatch.awayTeamId) : null;
  
  if (!home || !away) return null;
  
  const prediction = calculatePrediction(home.fifaRanking, away.fifaRanking);

  return (
    <div className="glass-card p-6">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-5 h-5 text-[#D4AF37]" />
        <h2 className="text-lg font-semibold">AI Prediction</h2>
        <Badge variant="outline" className="text-xs border-purple-500/30 text-purple-400">Beta</Badge>
      </div>
      
      <div className="flex items-center justify-center gap-3 mb-4">
        <TeamFlag code={home.code} name={home.name} size="sm" />
        <span className="text-sm text-muted-foreground">{home.name}</span>
        <span className="text-xs text-muted-foreground">vs</span>
        <span className="text-sm text-muted-foreground">{away.name}</span>
        <TeamFlag code={away.code} name={away.name} size="sm" />
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>{home.code} Win</span>
            <span className="text-green-400">{prediction.homeWin}%</span>
          </div>
          <div className="w-full bg-white/5 rounded-full h-2.5">
            <div className="bg-green-500 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${prediction.homeWin}%` }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Draw</span>
            <span className="text-yellow-400">{prediction.draw}%</span>
          </div>
          <div className="w-full bg-white/5 rounded-full h-2.5">
            <div className="bg-yellow-500 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${prediction.draw}%` }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>{away.code} Win</span>
            <span className="text-blue-400">{prediction.awayWin}%</span>
          </div>
          <div className="w-full bg-white/5 rounded-full h-2.5">
            <div className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${prediction.awayWin}%` }} />
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-xs text-muted-foreground">Predicted Score</p>
        <p className="text-xl font-bold text-[#D4AF37]">
          {prediction.predictedScore.home} - {prediction.predictedScore.away}
        </p>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gradient-gold font-[family-name:var(--font-heading)]">
          Dashboard
        </h1>
        <p className="text-muted-foreground mt-1">
          Welcome to HypeCup ⚽
        </p>
      </div>

      <CountdownTimer />
      <StatsCards />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-2">
          <TodayMatches />
        </div>
        <div className="space-y-4 md:space-y-6">
          <UserRankCard />
          <AIPredictionPreview />
        </div>
      </div>
    </div>
  );
}
