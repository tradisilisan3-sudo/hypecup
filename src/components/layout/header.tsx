"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Search, Bell, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TimezoneSelector } from "@/components/timezone-selector";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/matches": "Matches",
  "/predictions": "Predictions",
  "/leaderboard": "Leaderboard",
  "/standings": "Standings",
  "/stats": "Statistics",
  "/bracket": "Bracket",
  "/groups": "Groups",
  "/admin": "Admin",
};

function getPageTitle(pathname: string): string {
  // Exact match
  if (pageTitles[pathname]) return pageTitles[pathname];

  // Prefix match
  for (const [path, title] of Object.entries(pageTitles)) {
    if (pathname.startsWith(path)) return title;
  }

  return "HypeCup";
}

export function Header() {
  const pathname = usePathname();
  const title = getPageTitle(pathname);

  return (
    <header
      className={cn(
        "shrink-0 h-16 flex items-center justify-between gap-4 px-4 md:px-6 lg:px-8",
        "border-b border-white/[0.06]",
        "bg-[#0A1628]/60 backdrop-blur-xl"
      )}
    >
      {/* Left: Page Title */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white/60 hover:text-white hover:bg-white/[0.04]"
        >
          <Menu className="w-5 h-5" />
        </Button>
        <h2 className="text-lg font-semibold text-white truncate font-[family-name:var(--font-heading)]">
          {title}
        </h2>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Timezone Selector */}
        <div className="hidden sm:block">
          <TimezoneSelector />
        </div>

        {/* Search */}
        <Button
          variant="ghost"
          size="icon"
          className="text-white/40 hover:text-white hover:bg-white/[0.04] rounded-xl"
        >
          <Search className="w-[18px] h-[18px]" />
          <span className="sr-only">Search</span>
        </Button>

        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="relative text-white/40 hover:text-white hover:bg-white/[0.04] rounded-xl"
        >
          <Bell className="w-[18px] h-[18px]" />
          <Badge
            variant="destructive"
            className="absolute -top-0.5 -right-0.5 h-4 min-w-4 px-1 text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-[#0A1628]"
          >
            3
          </Badge>
          <span className="sr-only">Notifications</span>
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="relative h-9 w-9 rounded-xl hover:bg-white/[0.04] p-0 flex items-center justify-center outline-none cursor-pointer">
              <Avatar className="h-8 w-8 ring-2 ring-white/10 hover:ring-[#D4AF37]/30 transition-all">
                <AvatarImage src="/avatar.png" alt="User" />
                <AvatarFallback className="bg-[#1E3A5F] text-white text-xs font-semibold">
                  WC
                </AvatarFallback>
              </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56 glass border-white/10"
          >
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium text-white">Player</p>
                <p className="text-xs text-white/40">player@example.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-white/[0.06]" />
            <DropdownMenuItem className="text-white/70 hover:text-white focus:text-white focus:bg-white/[0.06] cursor-pointer">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white/70 hover:text-white focus:text-white focus:bg-white/[0.06] cursor-pointer">
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white/70 hover:text-white focus:text-white focus:bg-white/[0.06] cursor-pointer">
              My Predictions
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-white/[0.06]" />
            <DropdownMenuItem className="text-red-400 hover:text-red-300 focus:text-red-300 focus:bg-red-500/10 cursor-pointer">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
