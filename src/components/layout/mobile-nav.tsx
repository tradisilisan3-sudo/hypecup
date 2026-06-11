"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Trophy,
  Target,
  Medal,
  MoreHorizontal,
} from "lucide-react";

interface MobileNavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const mobileNavItems: MobileNavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Matches", href: "/matches", icon: Trophy },
  { label: "Predictions", href: "/predictions", icon: Target },
  { label: "Leaderboard", href: "/leaderboard", icon: Medal },
  { label: "More", href: "/more", icon: MoreHorizontal },
];

export function MobileNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    if (href === "/more") {
      return !["/dashboard", "/matches", "/predictions", "/leaderboard"].some(
        (h) => pathname.startsWith(h)
      );
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={cn(
        "md:hidden fixed bottom-0 left-0 right-0 z-50",
        "bg-[#0A1628]/90 backdrop-blur-xl",
        "border-t border-white/[0.06]",
        "pb-[env(safe-area-inset-bottom)]"
      )}
    >
      <div className="flex items-center justify-around h-16 px-2">
        {mobileNavItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 w-full h-full relative transition-all duration-200",
                active ? "text-[#D4AF37]" : "text-white/40"
              )}
            >
              {/* Active top indicator */}
              {active && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-b-full bg-[#D4AF37]" />
              )}

              <div
                className={cn(
                  "flex items-center justify-center rounded-xl transition-all duration-200",
                  active
                    ? "bg-[#D4AF37]/10 w-10 h-7"
                    : "w-10 h-7"
                )}
              >
                <item.icon
                  className={cn(
                    "w-5 h-5 transition-all duration-200",
                    active ? "text-[#D4AF37]" : "text-white/40"
                  )}
                />
              </div>

              <span
                className={cn(
                  "text-[10px] font-medium transition-colors duration-200",
                  active ? "text-[#D4AF37]" : "text-white/40"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
