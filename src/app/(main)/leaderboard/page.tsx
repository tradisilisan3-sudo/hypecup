'use client';

import { mockUsers } from '@/data/mock-data';
import { getTeamById } from '@/data/teams';
import { getBadgeEmoji, getBadgeColor, calculateAccuracy } from '@/lib/scoring/calculate-points';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, TrendingUp, Crown } from 'lucide-react';

export default function LeaderboardPage() {
  const sortedUsers = [...mockUsers].sort((a, b) => b.totalPoints - a.totalPoints);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gradient-gold font-[family-name:var(--font-heading)]">
          Leaderboard
        </h1>
        <p className="text-muted-foreground mt-1">
          See how you stack up against other predictors 🏆
        </p>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {sortedUsers.slice(0, 3).map((user, index) => {
          const favTeam = user.favoriteTeamId ? getTeamById(user.favoriteTeamId) : null;
          const medals = ['🥇', '🥈', '🥉'];
          const heights = ['h-36 md:h-44', 'h-28 md:h-36', 'h-24 md:h-32'];
          const orders = ['order-2', 'order-1', 'order-3'];
          const bgColors = [
            'from-yellow-500/20 to-yellow-600/5 border-yellow-500/30',
            'from-gray-400/20 to-gray-500/5 border-gray-400/30',
            'from-orange-600/20 to-orange-700/5 border-orange-600/30',
          ];

          return (
            <div key={user.id} className={`${orders[index]} flex flex-col items-center`}>
              <div className="text-center mb-2">
                <span className="text-3xl md:text-4xl">{medals[index]}</span>
              </div>
              <div className={`glass-card ${heights[index]} w-full flex flex-col items-center justify-center p-3 bg-gradient-to-b ${bgColors[index]}`}>
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center text-lg md:text-xl font-bold text-[#0A1628] mb-2">
                  {user.username.charAt(0).toUpperCase()}
                </div>
                <p className="font-semibold text-sm truncate max-w-full">{user.username}</p>
                <p className="text-lg md:text-2xl font-bold text-[#D4AF37] mt-1">{user.totalPoints}</p>
                <p className="text-xs text-muted-foreground">points</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full Leaderboard Table */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">#</th>
                <th className="text-left p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">User</th>
                <th className="text-center p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium hidden md:table-cell">Badge</th>
                <th className="text-center p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">Points</th>
                <th className="text-center p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium hidden sm:table-cell">Exact</th>
                <th className="text-center p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium hidden sm:table-cell">Diff</th>
                <th className="text-center p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium hidden md:table-cell">Winner</th>
                <th className="text-center p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium hidden lg:table-cell">Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {sortedUsers.map((user, index) => {
                const rank = index + 1;
                const accuracy = calculateAccuracy(user.exactScores, user.correctDiffs, user.correctWinners, user.totalPredictions);
                const favTeam = user.favoriteTeamId ? getTeamById(user.favoriteTeamId) : null;
                
                return (
                  <tr
                    key={user.id}
                    className={`border-b border-white/5 hover:bg-white/5 transition-colors ${
                      rank <= 3 ? 'bg-[#D4AF37]/5' : ''
                    }`}
                  >
                    <td className="p-4">
                      <span className={`font-bold ${rank <= 3 ? 'text-[#D4AF37]' : 'text-muted-foreground'}`}>
                        {rank}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#0A1628] flex items-center justify-center text-sm font-bold border border-white/10">
                          {user.username.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{user.fullName}</p>
                          <p className="text-xs text-muted-foreground">@{user.username}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center hidden md:table-cell">
                      <Badge variant="outline" className={`text-xs ${getBadgeColor(user.badge)}`}>
                        {getBadgeEmoji(user.badge)} {user.badge}
                      </Badge>
                    </td>
                    <td className="p-4 text-center">
                      <span className="font-bold text-[#D4AF37]">{user.totalPoints}</span>
                    </td>
                    <td className="p-4 text-center hidden sm:table-cell">
                      <span className="text-green-400">{user.exactScores}</span>
                    </td>
                    <td className="p-4 text-center hidden sm:table-cell">
                      <span className="text-blue-400">{user.correctDiffs}</span>
                    </td>
                    <td className="p-4 text-center hidden md:table-cell">
                      <span className="text-yellow-400">{user.correctWinners}</span>
                    </td>
                    <td className="p-4 text-center hidden lg:table-cell">
                      <span className="text-muted-foreground">{accuracy}%</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
