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

export type ArtShopProduct = {
  id: string;
  title: string;
  /** placeholder label for dummy image */
  placeholder: string;
  href: string;
};

export const ART_SHOP_PRODUCTS: ArtShopProduct[] = [
  { id: "01", title: "Hygge object", placeholder: "Product 1", href: "#" },
  { id: "02", title: "Print edition", placeholder: "Product 2", href: "#" },
  { id: "03", title: "My book", placeholder: "Product 3", href: "#" },
  { id: "04", title: "Studio print", placeholder: "Product 4", href: "#" },
  { id: "05", title: "Workshop zine", placeholder: "Product 5", href: "#" },
  { id: "06", title: "Coming soon", placeholder: "Product 6", href: "#" },
];

const ph = (label: string, w: number, h: number) =>
  `https://placehold.co/${w}x${h}/ffffff/171717/png?text=${encodeURIComponent(label)}`;

export function artShopThumbSrc(label: string) {
  const { w, h } = ART_SHOP_ASSETS.thumb;
  return ph(label, w, h);
}
