"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Trophy,
  Target,
  Medal,
  TableProperties,
  BarChart3,
  GitBranch,
  Users,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Matches", href: "/matches", icon: Trophy },
  { label: "Predictions", href: "/predictions", icon: Target },
  { label: "Leaderboard", href: "/leaderboard", icon: Medal },
  { label: "Standings", href: "/standings", icon: TableProperties },
  { label: "Stats", href: "/stats", icon: BarChart3 },
  { label: "Bracket", href: "/bracket", icon: GitBranch },
  { label: "Groups", href: "/groups", icon: Users },
];

const adminItems: NavItem[] = [
  { label: "Admin", href: "/admin", icon: Shield },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <aside
      className={cn(
        "hidden md:flex flex-col h-full border-r border-white/[0.06] transition-all duration-300 ease-in-out",
        "bg-[#0A1628]/80 backdrop-blur-xl",
        collapsed ? "w-[72px]" : "w-[280px]"
      )}
    >
      {/* Logo / Title */}
      <div className="flex items-center gap-3 px-3 h-16 shrink-0">
        <div
          className="shrink-0 rounded-full overflow-hidden"
          style={{ width: 44, height: 44, boxShadow: '0 0 12px 3px rgba(139,92,246,0.45), 0 0 24px 6px rgba(6,182,212,0.2)' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="HypeCup Logo" width={44} height={44} className="w-full h-full object-cover" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden leading-none">
            <h1
              className="text-xl font-extrabold tracking-tight truncate"
              style={{
                background: 'linear-gradient(90deg, #22d3ee 0%, #a855f7 50%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 6px rgba(168,85,247,0.5))',
                fontFamily: 'var(--font-heading)',
              }}
            >
              HypeCup
            </h1>
            <p className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">World Cup 2026</p>
          </div>
        )}
      </div>

      <Separator className="bg-white/[0.06]" />

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navItems.map((item) => {
          const active = isActive(item.href);
          const linkContent = (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative",
                active
                  ? "bg-[#D4AF37]/10 text-[#D4AF37] shadow-sm"
                  : "text-white/60 hover:text-white hover:bg-white/[0.04]"
              )}
            >
              {/* Active indicator bar */}
              {active && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full bg-[#D4AF37]" />
              )}
              <item.icon
                className={cn(
                  "shrink-0 transition-colors duration-200",
                  collapsed ? "w-5 h-5" : "w-[18px] h-[18px]",
                  active
                    ? "text-[#D4AF37]"
                    : "text-white/40 group-hover:text-white/70"
                )}
              />
              {!collapsed && <span className="truncate">{item.label}</span>}
              {!collapsed && item.badge && (
                <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">
                  {item.badge}
                </span>
              )}
            </Link>
          );

          if (collapsed) {
            return (
              <Tooltip key={item.href}>
                <TooltipTrigger>{linkContent}</TooltipTrigger>
                <TooltipContent side="right" className="glass">
                  {item.label}
                </TooltipContent>
              </Tooltip>
            );
          }

          return linkContent;
        })}

        <Separator className="bg-white/[0.06] my-3" />

        {adminItems.map((item) => {
          const active = isActive(item.href);
          const linkContent = (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative",
                active
                  ? "bg-[#D4AF37]/10 text-[#D4AF37] shadow-sm"
                  : "text-white/40 hover:text-white/60 hover:bg-white/[0.04]"
              )}
            >
              {active && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full bg-[#D4AF37]" />
              )}
              <item.icon
                className={cn(
                  "shrink-0 transition-colors duration-200",
                  collapsed ? "w-5 h-5" : "w-[18px] h-[18px]",
                  active
                    ? "text-[#D4AF37]"
                    : "text-white/30 group-hover:text-white/50"
                )}
              />
              {!collapsed && (
                <span className="truncate text-white/40 group-hover:text-white/60">
                  {item.label}
                </span>
              )}
            </Link>
          );

          if (collapsed) {
            return (
              <Tooltip key={item.href}>
                <TooltipTrigger>{linkContent}</TooltipTrigger>
                <TooltipContent side="right" className="glass">
                  {item.label}
                </TooltipContent>
              </Tooltip>
            );
          }

          return linkContent;
        })}
      </nav>

      {/* Collapse toggle */}
      <div className="px-3 py-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="w-full justify-center text-white/30 hover:text-white/60 hover:bg-white/[0.04]"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
          {!collapsed && (
            <span className="ml-2 text-xs">Collapse</span>
          )}
        </Button>
      </div>

      <Separator className="bg-white/[0.06]" />

      {/* User Profile */}
      <div
        className={cn(
          "p-3 shrink-0",
          collapsed ? "flex justify-center" : ""
        )}
      >
        <div
          className={cn(
            "flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/[0.04] cursor-pointer",
            collapsed ? "justify-center px-0" : ""
          )}
        >
          <Avatar className="w-8 h-8 shrink-0 ring-2 ring-[#D4AF37]/30">
            <AvatarImage src="/avatar.png" alt="User" />
            <AvatarFallback className="bg-[#1E3A5F] text-white text-xs font-semibold">
              WC
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                Player
              </p>
              <p className="text-[11px] text-white/40 truncate">
                0 points
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
