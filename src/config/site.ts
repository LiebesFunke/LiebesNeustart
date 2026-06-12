/**
 * Zentrale Einstellungen — hier Partner-Link und GitHub Pages anpassen.
 *
 * partnerUrl: Dein Affiliate-/Partner-Link. Nach dem Quiz und bei Direkt-CTA.
 * githubPagesRepo: Name des GitHub-Repos (für Vite base). Bei User-Site
 *   "ZeitFuerLiebe.github.io" → "/" setzen; bei Projekt-Repo z. B. "zeit-fuer-liebe".
 */
export const siteConfig = {
  partnerUrl: 'https://go.cm-trk6.com/aff_f?h=Bjgjxo',

  /** User-Site: Repo „ZeitFuerLiebe.github.io“ → URL https://zeitfuerliebe.github.io/ */
  githubPagesRepo: 'ZeitFuerLiebe.github.io',
} as const;

export function getPartnerUrl(): string {
  const fromEnv = import.meta.env.VITE_PARTNER_URL?.trim();
  if (fromEnv) return fromEnv;
  return siteConfig.partnerUrl.trim();
}

export function isPartnerUrlConfigured(): boolean {
  const url = getPartnerUrl();
  return Boolean(url && !url.includes('DEIN-PARTNER-LINK'));
}

export function goToPartner(): void {
  const url = getPartnerUrl();
  if (!isPartnerUrlConfigured()) {
    console.warn(
      '[Zeit für Liebe] Partner-Link fehlt: src/config/site.ts → partnerUrl setzen',
    );
    return;
  }
  window.location.assign(url);
}

export function profileImagePath(filename: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base}profiles/${filename}`;
}
