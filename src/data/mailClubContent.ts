/**
 * Shopify 구독 상품 URL (Hyggesupermarket).
 * `variant` · `selling_plan` 쿼리는 Shopify 내부 ID — 상품 **이름** 변경과 무관.
 * `/products/…` 경로의 handle은 Shopify에서 슬러그를 바꾸면 깨질 수 있음 → `.env`로 덮어쓰기 권장.
 */
export const MAIL_CLUB_SUBSCRIBE_URL_DEFAULT =
  "https://hyggesupermarket.com/products/sofies-mail-club-subscription?variant=54074453655862&selling_plan=8707866934";

export function resolveMailClubSubscribeUrl(envUrl?: string | null): string {
  const fromEnv = envUrl?.toString().trim();
  return fromEnv || MAIL_CLUB_SUBSCRIBE_URL_DEFAULT;
}

export const MAIL_CLUB_ASSETS = {
  hero: {
    src: "/images/hero/MAIL_CLUP_HERO.png",
    w: 3508,
    h: 2480,
    alt: "Snail Mail Club — illustrated letter, art print, and monthly surprise",
  },
  subscribe: {
    src: "/images/misc/SUBSCRIBE.png",
    w: 1600,
    h: 400,
    alt: "Subscribe to Snail Mail Club",
  },
} as const;

export const MAIL_CLUB_CONTENT = {
  intro:
    "Slow mail for busy days — a small parcel from my studio in Seoul, without the digital noise.",
  heading: "Join the Snail Mail Club",
  perks: [
    {
      title: "A hand-illustrated letter:",
      body: "A personal note from me each month — sketches, small stories, and what I am drawing right now.",
    },
    {
      title: "An exclusive art print:",
      body: "A postcard-sized print you will not find in the shop — made for members only.",
    },
    {
      title: "A monthly surprise:",
      body: "A tiny extra in the envelope — stickers, mini zines, or something I am testing in the studio.",
    },
  ],
  price: "100 DKK / $14",
  shipping: "Worldwide shipping from Seoul is included",
  faq: [
    {
      question: "Can I still get this month's edition?",
      answer:
        "If you subscribe before the end of the month, your first parcel should be the current edition. Missed editions may appear in the shop later at a separate price.",
    },
    {
      question: "When will I receive my mail?",
      answer:
        "Mail goes out from Seoul on the last business day of each month. Delivery can take a few days locally or several weeks internationally. Letters are sent with stamps, so tracking is not available — please allow time for snail mail.",
    },
    {
      question: "What if my mail gets lost?",
      answer:
        "Please allow up to 6 weeks for international delivery. If it still has not arrived, email sofiefribo.korea@gmail.com and we will work something out.",
    },
    {
      question: "How can I cancel my subscription?",
      answer:
        "You can cancel anytime through the link in your subscription confirmation email or your Shopify account. For help, email sofiefribo.korea@gmail.com.",
    },
    {
      question: "Will I have to pay taxes or duties upon delivery?",
      answer:
        "Club mail is sent as untracked letter post at a low declared value. In most cases there should be no extra charges on delivery — local rules may vary.",
    },
    {
      question: "Can I gift a Mail Club subscription?",
      answer:
        "Yes. Enter the recipient's name and shipping address at checkout, and their mail will go to them each month.",
    },
  ],
} as const;
