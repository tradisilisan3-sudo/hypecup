'use client';

import { cn } from '@/lib/utils';
import { getFlagUrl } from '@/lib/flags';

interface TeamFlagProps {
  code: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const pixelSizes: Record<string, number> = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 48,
  xl: 64,
};

export function TeamFlag({ code, name, size = 'md', className }: TeamFlagProps) {
  const px = pixelSizes[size] ?? 36;
  // flagcdn.com valid widths: 20, 40, 80, 160, 320
  const cdnWidth = px <= 28 ? 80 : 160;
  const src = getFlagUrl(code, cdnWidth as 80 | 160);

  if (!src) {
    return (
      <span
        aria-label={name ?? code}
        className={cn(
          'inline-flex items-center justify-center rounded-full bg-white/10 text-xs text-muted-foreground shrink-0 ring-2 ring-white/10',
          className,
        )}
        style={{ width: px, height: px, minWidth: px }}
      >
        ?
      </span>
    );
  }

  return (
    <span
      role="img"
      aria-label={name ?? code}
      className={cn(
        'inline-block rounded-full shrink-0 ring-2 ring-white/10',
        className,
      )}
      style={{
        width: px,
        height: px,
        minWidth: px,
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
}
