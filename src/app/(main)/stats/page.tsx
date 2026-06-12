'use client';

import { useLiveTopScorers, useLiveTopAssists } from '@/hooks/use-live-data';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { RefreshCw, Wifi, WifiOff } from 'lucide-react';

function LiveBadge({ error }: { error: string | null }) {
  if (error) {
    return (
      <span className="flex items-center gap-1.5 text-xs text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 px-2 py-1 rounded-full">
        <WifiOff className="w-3 h-3" />
        Offline — Cached Data
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1.5 text-xs text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-1 rounded-full">
      <Wifi className="w-3 h-3" />
      Live Data
    </span>
  );
}

function TopScorersTable() {
  const { scorers, loading, error, refetch } = useLiveTopScorers();

  if (loading) {
    return (
      <div className="glass-card p-12 text-center">
        <RefreshCw className="w-8 h-8 text-[#D4AF37] mx-auto mb-3 animate-spin" />
        <p className="text-muted-foreground text-sm">Fetching live scorer data…</p>
      </div>
    );
  }

  if (scorers.length === 0) {
    return (
      <div className="glass-card p-12 text-center">
        <p className="text-4xl mb-3">⚽</p>
        <p className="text-muted-foreground">No scorer data yet — check back after more matches!</p>
        {error && <p className="text-xs text-yellow-400 mt-2">{error}</p>}
      </div>
    );
  }

  return (
    <div className="glass-card overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <LiveBadge error={error} />
        <button
          onClick={refetch}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-white transition-colors"
        >
          <RefreshCw className="w-3 h-3" />
          Refresh
        </button>
      </div>
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
            {scorers.map((scorer, index) => (
              <tr
                key={scorer.name}
                className={`border-b border-white/5 hover:bg-white/5 transition-colors ${index === 0 ? 'bg-[#D4AF37]/5' : ''}`}
              >
                <td className="p-4">
                  <span className={`font-bold text-lg ${index === 0 ? 'text-[#D4AF37]' : index < 3 ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}
                  </span>
                </td>
                <td className="p-4">
                  <p className="font-semibold">{scorer.name}</p>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    {scorer.teamLogo && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={scorer.teamLogo} alt={scorer.teamName} className="w-5 h-5 object-contain" />
                    )}
                    <span className="text-muted-foreground text-xs">{scorer.teamName}</span>
                  </div>
                </td>
                <td className="p-4 text-center text-muted-foreground">{scorer.matches}</td>
                <td className="p-4 text-center">
                  <span className="font-bold text-[#D4AF37] text-xl">{scorer.goals}</span>
                </td>
                <td className="p-4 text-center hidden sm:table-cell text-muted-foreground">{scorer.assists}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TopAssistsTable() {
  const { assisters, loading, error, refetch } = useLiveTopAssists();

  if (loading) {
    return (
      <div className="glass-card p-12 text-center">
        <RefreshCw className="w-8 h-8 text-[#D4AF37] mx-auto mb-3 animate-spin" />
        <p className="text-muted-foreground text-sm">Fetching live assist data…</p>
      </div>
    );
  }

  if (assisters.length === 0) {
    return (
      <div className="glass-card p-12 text-center">
        <p className="text-4xl mb-3">🎯</p>
        <p className="text-muted-foreground">No assist data yet — check back after more matches!</p>
        {error && <p className="text-xs text-yellow-400 mt-2">{error}</p>}
      </div>
    );
  }

  return (
    <div className="glass-card overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <LiveBadge error={error} />
        <button
          onClick={refetch}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-white transition-colors"
        >
          <RefreshCw className="w-3 h-3" />
          Refresh
        </button>
      </div>
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
            {assisters.map((a, index) => (
              <tr
                key={a.name}
                className={`border-b border-white/5 hover:bg-white/5 transition-colors ${index === 0 ? 'bg-[#D4AF37]/5' : ''}`}
              >
                <td className="p-4">
                  <span className={`font-bold text-lg ${index === 0 ? 'text-[#D4AF37]' : index < 3 ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}
                  </span>
                </td>
                <td className="p-4">
                  <p className="font-semibold">{a.name}</p>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    {a.teamLogo && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={a.teamLogo} alt={a.teamName} className="w-5 h-5 object-contain" />
                    )}
                    <span className="text-muted-foreground text-xs">{a.teamName}</span>
                  </div>
                </td>
                <td className="p-4 text-center text-muted-foreground">{a.matches}</td>
                <td className="p-4 text-center">
                  <span className="font-bold text-[#D4AF37] text-xl">{a.assists}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
          Live top scorers & assist leaders — updated automatically every 5 minutes ⚡
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
