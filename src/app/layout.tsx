import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HypeCup",
    template: "%s | HypeCup",
  },
  description:
    "Predict matches, compete with friends, and follow the FIFA World Cup 2026 live. Score points with accurate predictions and climb the leaderboard!",
  keywords: ["FIFA", "World Cup", "2026", "predictions", "football", "soccer"],
  openGraph: {
    title: "HypeCup",
    description: "Predict the FIFA World Cup 2026 matches and compete with friends.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased font-sans" suppressHydrationWarning>
        <TooltipProvider>
          {children}
          <Toaster richColors position="top-right" />
        </TooltipProvider>
      </body>
    </html>
  );
}
