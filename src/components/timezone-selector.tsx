'use client';

import { Globe } from 'lucide-react';
import { useTimezoneStore, TIMEZONES, type TimezoneOption } from '@/store/timezone-store';

export function TimezoneSelector() {
  const { timezone, setTimezone } = useTimezoneStore();

  return (
    <div className="flex items-center gap-1.5">
      <Globe className="w-4 h-4 text-[#D4AF37] shrink-0" />
      <select
        value={timezone}
        onChange={(e) => setTimezone(e.target.value as TimezoneOption)}
        className="bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-xs font-medium text-white/80 cursor-pointer outline-none focus:border-[#D4AF37]/50 transition-colors appearance-none hover:bg-white/10"
        style={{ backgroundImage: 'none' }}
      >
        <optgroup label="🇺🇸 United States">
          {TIMEZONES.filter(t => t.id.startsWith('US')).map(t => (
            <option key={t.id} value={t.id} className="bg-[#0A1628] text-white">
              {t.short} — {t.label}
            </option>
          ))}
        </optgroup>
        <optgroup label="🇮🇩 Indonesia">
          {TIMEZONES.filter(t => !t.id.startsWith('US')).map(t => (
            <option key={t.id} value={t.id} className="bg-[#0A1628] text-white">
              {t.short} — {t.label}
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  );
}
