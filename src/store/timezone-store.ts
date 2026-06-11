import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type TimezoneOption = 'US_ET' | 'US_CT' | 'US_PT' | 'WIB' | 'WITA' | 'WIT';

interface TimezoneInfo {
  id: TimezoneOption;
  label: string;
  short: string;
  iana: string;
}

export const TIMEZONES: TimezoneInfo[] = [
  { id: 'US_ET', label: 'US Eastern', short: 'ET', iana: 'America/New_York' },
  { id: 'US_CT', label: 'US Central', short: 'CT', iana: 'America/Chicago' },
  { id: 'US_PT', label: 'US Pacific', short: 'PT', iana: 'America/Los_Angeles' },
  { id: 'WIB',   label: 'WIB (Jakarta)', short: 'WIB', iana: 'Asia/Jakarta' },
  { id: 'WITA',  label: 'WITA (Makassar)', short: 'WITA', iana: 'Asia/Makassar' },
  { id: 'WIT',   label: 'WIT (Jayapura)', short: 'WIT', iana: 'Asia/Jayapura' },
];

interface TimezoneStore {
  timezone: TimezoneOption;
  setTimezone: (tz: TimezoneOption) => void;
  getTimezoneInfo: () => TimezoneInfo;
}

export const useTimezoneStore = create<TimezoneStore>()(
  persist(
    (set, get) => ({
      timezone: 'WIB',
      setTimezone: (tz) => set({ timezone: tz }),
      getTimezoneInfo: () => TIMEZONES.find(t => t.id === get().timezone) ?? TIMEZONES[3],
    }),
    { name: 'wcp-timezone' }
  )
);
