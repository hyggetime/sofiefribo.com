export type SofieSubpageKey = "mailclub" | "shop" | "portfoilo";

export type SofieSubpage = {
  key: SofieSubpageKey;
  title: string;
  path: string;
  image: string;
  /** 원본 픽셀 — 버튼 표시 크기 계산용 */
  imageW: number;
  imageH: number;
  description: string;
};

/** Mailclub 버튼 표시 너비(px). 높이는 비율로 계산 */
export const HERO_THUMB_MAILCLUB_WIDTH = 180;

/** Mailclub 이미지 높이를 기준으로, 같은 높이·비율 유지 표시 크기 */
export function heroThumbDisplaySize(imageW: number, imageH: number) {
  const displayH = Math.round((imageH / imageW) * HERO_THUMB_MAILCLUB_WIDTH);
  const displayW = Math.round((imageW / imageH) * displayH);
  return { displayW, displayH };
}

export const SOFIEFRIBO_SUBPAGES: SofieSubpage[] = [
  {
    key: "mailclub",
    title: "Mail Club",
    path: "/mailclub",
    image: "/images/projects/SOFIE_FRIBO_MAIL_CLUB.png",
    imageW: 600,
    imageH: 400,
    description: "Mailclub — letters, prints, and quiet rituals in the post.",
  },
  {
    key: "shop",
    title: "Art shop",
    path: "/shop",
    image: "/images/projects/SOFIE_FRIBO_SHOP.png",
    imageW: 400,
    imageH: 400,
    description: "Shop — objects, editions, and Hygge Time shelf stories.",
  },
  {
    key: "portfoilo",
    title: "PortFoilo",
    path: "/portfoilo",
    image: "/images/projects/SOFIE_FRIBO_PORTFOLIO.png",
    imageW: 400,
    imageH: 400,
    description: "PortFoilo — selected illustration and editorial work.",
  },
];

export const SOFIEFRIBO_SUBPAGE_BY_KEY = Object.fromEntries(
  SOFIEFRIBO_SUBPAGES.map((p) => [p.key, p]),
) as Record<SofieSubpageKey, SofieSubpage>;
