'use client';

import { useState, useEffect, useCallback } from 'react';

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
  isExpired: boolean;
}

const INITIAL: CountdownTime = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  total: 0,
  isExpired: false,
};

export function useCountdown(targetDate: string | Date): CountdownTime {
  const calculateTimeLeft = useCallback((): CountdownTime => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { ...INITIAL, isExpired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      total: difference,
      isExpired: false,
    };
  }, [targetDate]);

  // Start with zeros to avoid SSR/client mismatch
  const [timeLeft, setTimeLeft] = useState<CountdownTime>(INITIAL);

  useEffect(() => {
    // Immediately calculate once on mount (client only)
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return timeLeft;
}
