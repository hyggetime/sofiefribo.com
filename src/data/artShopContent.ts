export const ART_SHOP_ASSETS = {
  hero: {
    src: "/images/hero/SHOP_HERO.png",
    w: 720,
    h: 720,
    alt: "Sofie Fribo Art Shop — illustrated storefront",
  },
  /** 썸네일 더미 — 정사각형 */
  thumb: { w: 480, h: 480 },
} as const;

export { ART_SHOP_PRODUCTS, type ArtShopProduct } from "./artShopProducts";

const ph = (label: string, w: number, h: number) =>
  `https://placehold.co/${w}x${h}/ffffff/171717/png?text=${encodeURIComponent(label)}`;

export function artShopThumbSrc(label: string) {
  const { w, h } = ART_SHOP_ASSETS.thumb;
  return ph(label, w, h);
}
