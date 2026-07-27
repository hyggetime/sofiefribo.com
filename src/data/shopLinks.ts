/**
 * Hyggesupermarket 스토어 URL (Timeline 등).
 * `.env` `PUBLIC_SHOPIFY_URL`로 덮어쓸 수 있음 — UTM은 resolveShopifyStoreUrl에서 자동 부착.
 */
export const SHOPIFY_STORE_URL_DEFAULT = "https://hyggesupermarket.com";

const SHOPIFY_STORE_UTM = {
  utm_source: "sofiefribo",
  utm_medium: "website",
  utm_campaign: "timeline_shop",
} as const;

export function resolveShopifyStoreUrl(envUrl?: string | null): string {
  const raw = envUrl?.toString().trim() || SHOPIFY_STORE_URL_DEFAULT;
  const url = new URL(raw);
  for (const [key, value] of Object.entries(SHOPIFY_STORE_UTM)) {
    url.searchParams.set(key, value);
  }
  return url.toString();
}
