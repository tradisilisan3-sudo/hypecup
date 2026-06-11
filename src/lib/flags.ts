/** Maps FIFA 3-letter codes to ISO 3166-1 alpha-2 codes for flag images */
const fifaToIso: Record<string, string> = {
  // Group A
  MEX: 'mx', RSA: 'za', KOR: 'kr', CZE: 'cz',
  // Group B
  CAN: 'ca', BIH: 'ba', QAT: 'qa', SUI: 'ch',
  // Group C
  BRA: 'br', MAR: 'ma', HAI: 'ht', SCO: 'gb-sct',
  // Group D
  USA: 'us', PAR: 'py', AUS: 'au', TUR: 'tr',
  // Group E
  GER: 'de', CUW: 'cw', CIV: 'ci', ECU: 'ec',
  // Group F
  NED: 'nl', JPN: 'jp', SWE: 'se', TUN: 'tn',
  // Group G
  BEL: 'be', EGY: 'eg', IRN: 'ir', NZL: 'nz',
  // Group H
  ESP: 'es', CPV: 'cv', KSA: 'sa', URU: 'uy',
  // Group I
  FRA: 'fr', SEN: 'sn', IRQ: 'iq', NOR: 'no',
  // Group J
  ARG: 'ar', ALG: 'dz', AUT: 'at', JOR: 'jo',
  // Group K
  POR: 'pt', COD: 'cd', UZB: 'uz', COL: 'co',
  // Group L
  ENG: 'gb-eng', CRO: 'hr', GHA: 'gh', PAN: 'pa',
};

/**
 * Get the flag image URL for a given FIFA code.
 * Uses flagcdn.com CDN — only certain widths are available:
 * 20, 40, 80, 160, 320, 640, 1280, 2560
 */
export function getFlagUrl(fifaCode: string, width: 20 | 40 | 80 | 160 | 320 = 160): string {
  const iso = fifaToIso[fifaCode];
  if (!iso) return '';
  return `https://flagcdn.com/w${width}/${iso}.png`;
}

/**
 * Get the ISO 2-letter code for a given FIFA code.
 */
export function getIsoCode(fifaCode: string): string {
  return fifaToIso[fifaCode] ?? '';
}
