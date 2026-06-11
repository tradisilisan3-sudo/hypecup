import { TIMEZONES, type TimezoneOption } from '@/store/timezone-store';

/**
 * Format a date string to the selected timezone.
 * Uses Intl.DateTimeFormat for automatic DST handling.
 */
export function formatMatchTime(
  dateStr: string,
  timezone: TimezoneOption,
  options?: { showDate?: boolean; showTimezone?: boolean }
): string {
  const tz = TIMEZONES.find(t => t.id === timezone);
  if (!tz) return dateStr;

  const date = new Date(dateStr);
  const { showDate = false, showTimezone = true } = options ?? {};

  const timeStr = date.toLocaleTimeString('en-US', {
    timeZone: tz.iana,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  if (showDate) {
    const dateFormatted = date.toLocaleDateString('en-US', {
      timeZone: tz.iana,
      month: 'short',
      day: 'numeric',
    });
    return showTimezone ? `${dateFormatted}, ${timeStr} ${tz.short}` : `${dateFormatted}, ${timeStr}`;
  }

  return showTimezone ? `${timeStr} ${tz.short}` : timeStr;
}

/**
 * Format a date string to show full date + time in the selected timezone.
 */
export function formatMatchDateTime(dateStr: string, timezone: TimezoneOption): string {
  return formatMatchTime(dateStr, timezone, { showDate: true, showTimezone: true });
}

/**
 * Format just the time portion.
 */
export function formatTimeOnly(dateStr: string, timezone: TimezoneOption): string {
  return formatMatchTime(dateStr, timezone, { showDate: false, showTimezone: true });
}

/**
 * Format date + time for a compact display.
 */
export function formatCompactDateTime(dateStr: string, timezone: TimezoneOption): string {
  const tz = TIMEZONES.find(t => t.id === timezone);
  if (!tz) return dateStr;

  const date = new Date(dateStr);

  const dateFormatted = date.toLocaleDateString('en-US', {
    timeZone: tz.iana,
    month: 'short',
    day: 'numeric',
  });

  const timeStr = date.toLocaleTimeString('en-US', {
    timeZone: tz.iana,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return `${dateFormatted} · ${timeStr} ${tz.short}`;
}
