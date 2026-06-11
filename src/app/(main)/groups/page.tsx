'use client';

import { useState } from 'react';
import { mockFriendGroups, mockCurrentUser } from '@/data/mock-data';
import { getBadgeEmoji, calculateAccuracy } from '@/lib/scoring/calculate-points';
import { Users, Plus, Copy, LogIn, Crown, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';

function GroupCard({ group }: { group: typeof mockFriendGroups[0] }) {
  const copyInviteCode = () => {
    navigator.clipboard.writeText(group.inviteCode);
    toast.success('Invite code copied!', { description: group.inviteCode });
  };

  const sortedMembers = [...group.members].sort((a, b) => b.totalPoints - a.totalPoints);

  return (
    <div className="glass-card overflow-hidden">
      <div className="p-4 border-b border-white/10 bg-gradient-to-r from-[#D4AF37]/10 to-transparent">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-bold">{group.name}</h3>
              <p className="text-xs text-muted-foreground">{group.members.length} members</p>
            </div>
          </div>
          <button
            onClick={copyInviteCode}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-muted-foreground transition-colors"
          >
            <Copy className="w-3 h-3" />
            {group.inviteCode}
          </button>
        </div>
      </div>

      <div className="p-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left pb-2 text-xs uppercase text-muted-foreground">#</th>
              <th className="text-left pb-2 text-xs uppercase text-muted-foreground">Member</th>
              <th className="text-center pb-2 text-xs uppercase text-muted-foreground">Points</th>
              <th className="text-center pb-2 text-xs uppercase text-muted-foreground hidden sm:table-cell">Badge</th>
            </tr>
          </thead>
          <tbody>
            {sortedMembers.map((member, index) => (
              <tr key={member.id} className="border-b border-white/5">
                <td className="py-2.5">
                  <span className={`font-bold text-sm ${index === 0 ? 'text-[#D4AF37]' : 'text-muted-foreground'}`}>
                    {index === 0 && <Crown className="w-4 h-4 inline mr-1" />}
                    {index + 1}
                  </span>
                </td>
                <td className="py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#0A1628] flex items-center justify-center text-xs font-bold border border-white/10">
                      {member.username.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-medium text-sm">{member.username}</span>
                    {member.id === mockCurrentUser.id && (
                      <Badge variant="outline" className="text-[10px] border-[#D4AF37]/30 text-[#D4AF37]">You</Badge>
                    )}
                  </div>
                </td>
                <td className="py-2.5 text-center font-bold text-[#D4AF37]">{member.totalPoints}</td>
                <td className="py-2.5 text-center hidden sm:table-cell text-xs">
                  {getBadgeEmoji(member.badge)} {member.badge}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function GroupsPage() {
  const [newGroupName, setNewGroupName] = useState('');
  const [joinCode, setJoinCode] = useState('');

  const handleCreateGroup = () => {
    if (!newGroupName.trim()) return;
    toast.success('Group created!', { description: `"${newGroupName}" is ready. Share the invite code!` });
    setNewGroupName('');
  };

  const handleJoinGroup = () => {
    if (!joinCode.trim()) return;
    toast.success('Joined group!', { description: `You joined using code: ${joinCode}` });
    setJoinCode('');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gradient-gold font-[family-name:var(--font-heading)]">
            Friend Groups
          </h1>
          <p className="text-muted-foreground mt-1">
            Compete with friends in private groups 👥
          </p>
        </div>

        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger
              render={<Button className="bg-[#D4AF37] text-[#0A1628] hover:bg-[#B8960B]" />}
            >
              <Plus className="w-4 h-4 mr-2" /> Create Group
            </DialogTrigger>
            <DialogContent className="glass border-white/10">
              <DialogHeader>
                <DialogTitle className="text-[#D4AF37]">Create New Group</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <Input
                  placeholder="Group name..."
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                  className="bg-white/5 border-white/10"
                />
                <Button onClick={handleCreateGroup} className="w-full bg-[#D4AF37] text-[#0A1628] hover:bg-[#B8960B]">
                  Create Group
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger
              render={<Button variant="outline" className="border-white/10" />}
            >
              <LogIn className="w-4 h-4 mr-2" /> Join Group
            </DialogTrigger>
            <DialogContent className="glass border-white/10">
              <DialogHeader>
                <DialogTitle className="text-[#D4AF37]">Join a Group</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <Input
                  placeholder="Enter invite code..."
                  value={joinCode}
                  onChange={(e) => setJoinCode(e.target.value)}
                  className="bg-white/5 border-white/10"
                />
                <Button onClick={handleJoinGroup} className="w-full bg-[#D4AF37] text-[#0A1628] hover:bg-[#B8960B]">
                  Join Group
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {mockFriendGroups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>

      {mockFriendGroups.length === 0 && (
        <div className="glass-card p-12 text-center">
          <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-30" />
          <h3 className="text-lg font-semibold mb-2">No groups yet</h3>
          <p className="text-muted-foreground mb-4">Create a group or join one with an invite code</p>
        </div>
      )}
    </div>
  );
}
