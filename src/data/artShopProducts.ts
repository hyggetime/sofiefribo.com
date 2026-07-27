/**
 * Art shop 썸네일 → 상품 URL.
 * 실제 Hyggesupermarket 상품 URL이 준비되면 `href`만 교체하면 됩니다.
 */
export type ArtShopProduct = {
  id: string;
  title: string;
  /** placeholder 썸네일 라벨 (교체 전) */
  placeholder: string;
  /** 상품 페이지 URL — `#` = 아직 미연결 */
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
