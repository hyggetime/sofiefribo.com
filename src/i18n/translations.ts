/**
 * 콘텐츠 작업 시: 한국어(ko) 문구를 먼저 수정한 뒤,
 * en · da 를 같은 의미로 맞춰 주세요.
 */
export type Locale = "en" | "da" | "ko";

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  da: "Dansk",
  ko: "한국어",
};

export type TranslationTree = {
  meta: { title: string; description: string };
  hero: {
    tagline: string;
    name: string;
    role: string;
    cta: string;
    ctaHint: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  career: {
    title: string;
    hint: string;
    blocks: { year: string; items: string[] }[];
  };
  collaboration: {
    title: string;
    role: string;
    p1: string;
    p2: string;
    shopifyCta: string;
    shopifyHint: string;
  };
  footer: {
    contactLabel: string;
    instagramAria: string;
    mailAria: string;
    designed: string;
    rights: string;
  };
};

const careerBlocksEn = [
  {
    year: "2025",
    items: [
      "Workshops at Bangadari Library, Sinwol-dong — community programmes around making and storytelling.",
      "Hygge Time — art direction and design for new products including the ssangnyuk set and Daily Point norigae keyrings.",
    ],
  },
  {
    year: "2024",
    items: [
      "Bangadari Library workshops — LEGO printing, calendars, and popup cards with readers of all ages.",
    ],
  },
  {
    year: "2023",
    items: [
      "Hygge Time — yut nori set; art direction and design from concept to finished goods.",
      "Bangadari Library — time-capsule and popup-book sessions.",
      "Pro-bono caricatures for families at Eunhasu Daycare, Sinwol.",
    ],
  },
  {
    year: "2022",
    items: [
      "Published illustration essay I Was Pregnant in Korea (Seoul, Hygge Time).",
      "Bangadari Library — calendar-making workshop.",
    ],
  },
  {
    year: "2016–2020",
    items: [
      "Bachelor of Fine Art, Faculty of Fine Art, Music and Design (KMD), Bergen, Norway — studio practice across drawing, print, and spatial work.",
      "From 2020: drawing-diary project and daily rhythm on Instagram @sofiefribo_illustration.",
    ],
  },
  {
    year: "2016–2019",
    items: [
      "Selected exhibitions and performances — Norway, Lithuania, Denmark, and Korea.",
      "2019: Group show what if…?, Iflatable Mushmellow — Vilnius, Lithuania.",
      "2018: Solo Same Same but Different — National Museum of Modern and Contemporary Art, Seoul.",
      "2017: Collaborations and solo shows in Bergen (Gallery Fish, Gallery Flagpole, BA1 spring show); performance Would You Cut Off Her Hair?",
      "2016: Deep Color — Carte Blanche, Bergen; school shows Multiples and Masses / Memory Loss, Strømgaten 1; 24 New Secrets — ZeBU, Copenhagen.",
    ],
  },
];

const careerBlocksDa = [
  {
    year: "2025",
    items: [
      "Workshops på Bangadari-biblioteket, Sinwol-dong — fællesskabsprogrammer om at skabe og fortælle.",
      "Hygge Time — art direction og design til nye produkter, bl.a. ssangnyuk-sæt og Daily Point-norigae-nøgleringe.",
    ],
  },
  {
    year: "2024",
    items: [
      "Bangadari-biblioteket — LEGO-print, kalendere og popup-kort med læsere i alle aldre.",
    ],
  },
  {
    year: "2023",
    items: [
      "Hygge Time — yut nori-sæt; art direction og design fra idé til færdig vare.",
      "Bangadari-biblioteket — tidskapsel- og popup-bogsforløb.",
      "Pro bono-karikaturer til familier på Eunhasu-børnehaven, Sinwol.",
    ],
  },
  {
    year: "2022",
    items: [
      "Udgivet illustrationsessay Jeg var gravid i Korea (Seoul, Hygge Time).",
      "Bangadari-biblioteket — kalender-workshop.",
    ],
  },
  {
    year: "2016–2020",
    items: [
      "Bachelor i billedkunst, Det kunstfaglige fakultet, musik og design (KMD), Bergen, Norge — studiepraksis med tegning, tryk og rumligt arbejde.",
      "Fra 2020: tegnedagbog og daglig rytme på Instagram @sofiefribo_illustration.",
    ],
  },
  {
    year: "2016–2019",
    items: [
      "Udvalgte udstillinger og performance — Norge, Litauen, Danmark og Korea.",
      "2019: Gruppeudstilling what if…?, Iflatable Mushmellow — Vilnius, Litauen.",
      "2018: Soloudstilling Same Same but Different — Nationalmuseet for moderne og samtidskunst, Seoul.",
      "2017: Samarbejder og soloudstillinger i Bergen (Gallery Fish, Gallery Flagpole, BA1-forårsshow); performance Would You Cut Off Her Hair?",
      "2016: Deep Color — Carte Blanche, Bergen; skoleudstillinger Multiples and Masses / Memory Loss, Strømgaten 1; 24 New Secrets — ZeBU, København.",
    ],
  },
];

const careerBlocksKo = [
  {
    year: "2025",
    items: [
      "신월동 방아다리 도서관 출강 — 만들기와 이야기 나누기를 중심으로 한 프로그램.",
      "휘게타임 — 쌍륙놀이 세트·데일리 포인트 노리개 키링 등 신제품 아트디렉팅·디자인.",
    ],
  },
  {
    year: "2024",
    items: [
      "방아다리 도서관 — 레고프린팅, 달력·팝업카드 워크숍.",
    ],
  },
  {
    year: "2023",
    items: [
      "휘게타임 — 윷놀이 세트 기획부터 완성까지 아트디렉터·디자인.",
      "방아다리 도서관 — 타임캡슐·팝업북 프로그램.",
      "신월 은하수 어린이집 행사 재능기부 캐리커처.",
    ],
  },
  {
    year: "2022",
    items: [
      "일러스트 에세이 《나는 한국에서 임신했다》 출간(서울, 휘게타임).",
      "방아다리 도서관 — 달력 만들기 출강.",
    ],
  },
  {
    year: "2016–2020",
    items: [
      "노르웨이 베르겐 예술대학(KMD) 순수미술 학사 — 드로잉·판화·공간 작업 등 스튜디오 실기.",
      "2020년부터 그림일기 프로젝트와 인스타그램 @sofiefribo_illustration 일상 기록.",
    ],
  },
  {
    year: "2016–2019",
    items: [
      "노르웨이·리투아니아·덴마크·한국을 아우르는 전시·퍼포먼스 요약.",
      "2019: 그룹전 what if…?, Iflatable Mushmellow — 빌뉴스.",
      "2018: 개인전 Same Same but Different — 국립현대미술관, 서울.",
      "2017: 베르겐 Gallery Fish·Gallery Flagpole·BA1 봄 기획전, 퍼포먼스 Would You Cut Off Her Hair? 등.",
      "2016: Deep Color — Carte Blanche; 학교전 Multiples and Masses·Memory Loss(Strømgaten 1); 24 New Secrets — 코펜하겐 ZeBU.",
    ],
  },
];

export const translations: Record<Locale, TranslationTree> = {
  en: {
    meta: {
      title: "Sofie Fribo — Illustrator & Artist",
      description:
        "Drawing hygge in the heart of Korea — illustration, Hygge Time art direction, and quiet stories on paper.",
    },
    hero: {
      tagline: "Drawing Hygge in the Heart of Korea",
      name: "Sofie Fribo",
      role: "Illustrator & Artist",
      cta: "About me",
      ctaHint: "Scroll to the introduction",
    },
    about: {
      title: "About me",
      p1: "I trained at KMD in Bergen, Norway — the Faculty of Fine Art, Music and Design — where I learned to trust slow looking, messy drafts, and the moment a line finally tells the truth.",
      p2: "In 2022 I published the illustration essay I Was Pregnant in Korea, a very personal book born in Seoul and shaped with Hygge Time. It sits close to everything I still draw: tenderness, displacement, humour, and the textures of everyday life here.",
      p3: "Day to day you will find me on Instagram @sofiefribo_illustration — sketches, works-in-progress, and the small sparks that later become products, workshops, or prints.",
    },
    career: {
      title: "Career",
      hint: "Tap a year to expand details.",
      blocks: careerBlocksEn,
    },
    collaboration: {
      title: "Collaboration",
      role: "Art Director at Hygge Time",
      p1: "At Hygge Time I lead visual direction for objects that invite people to play and pause — from the yut nori and ssangnyuk sets to the Daily Point norigae keyrings. Each project moves from research and rough thumbnails into colour, packaging, and the tiny graphic rituals that make a shelf feel like home.",
      p2: "The outcome is a family of tactile, giftable pieces rooted in Korean play culture, filtered through Nordic calm and a love of clear, friendly drawing.",
      shopifyCta: "Shop on Shopify",
      shopifyHint: "Opens the Hygge Time store in a new tab",
    },
    footer: {
      contactLabel: "Contact",
      instagramAria: "Sofie Fribo on Instagram",
      mailAria: "Email Sofie Fribo",
      designed: "Designed with love in Seoul",
      rights: "All rights reserved.",
    },
  },
  da: {
    meta: {
      title: "Sofie Fribo — Illustratør og kunstner",
      description:
        "Hygge tegnet i hjertet af Korea — illustration, art direction for Hygge Time og stille historier på papir.",
    },
    hero: {
      tagline: "Hygge tegnet i hjertet af Korea",
      name: "Sofie Fribo",
      role: "Illustratør og kunstner",
      cta: "Om mig",
      ctaHint: "Rul til introduktionen",
    },
    about: {
      title: "Om mig",
      p1: "Jeg er uddannet ved KMD i Bergen, Norge — Det kunstfaglige fakultet, musik og design — hvor jeg lærte at stole på langsomt at se, rodede kladder og øjeblikket, hvor en streg endelig sandt.",
      p2: "I 2022 udgav jeg illustrationsessayet Jeg var gravid i Korea, en meget personlig bog født i Seoul og formet med Hygge Time. Den ligger tæt på alt, jeg stadig tegner: ømhed, forskydning, humor og hverdagens teksturer her.",
      p3: "Til daglig finder du mig på Instagram @sofiefribo_illustration — skitser, arbejder undervejs og de små gnister, der senere bliver til produkter, workshops eller tryk.",
    },
    career: {
      title: "Karriere",
      hint: "Klik på et år for at udvide.",
      blocks: careerBlocksDa,
    },
    collaboration: {
      title: "Samarbejde",
      role: "Art Director hos Hygge Time",
      p1: "Hos Hygge Time står jeg for den visuelle retning for genstande, der inviterer til leg og pause — fra yut nori- og ssangnyuk-sæt til Daily Point-norigae-nøgleringe. Hvert projekt bevæger sig fra research og hurtige skitser til farve, emballage og de små grafiske ritualer, der får en hylde til at føles hjemlig.",
      p2: "Resultatet er en familie af taktille, gavevenlige stykker forankret i koreansk legekultur, filtreret gennem nordisk ro og kærlighed til klar, venlig tegning.",
      shopifyCta: "Shop på Shopify",
      shopifyHint: "Åbner Hygge Time-butikken i nyt faneblad",
    },
    footer: {
      contactLabel: "Kontakt",
      instagramAria: "Sofie Fribo på Instagram",
      mailAria: "Send e-mail til Sofie Fribo",
      designed: "Designet med kærlighed i Seoul",
      rights: "Alle rettigheder forbeholdes.",
    },
  },
  ko: {
    meta: {
      title: "Sofie Fribo (소피 피보) — 일러스트레이터 & 아티스트",
      description:
        "한국 속에서 그리는 휘게 — 일러스트, 휘게타임 아트디렉션, 종이 위의 이야기.",
    },
    hero: {
      tagline: "Drawing Hygge in the Heart of Korea",
      name: "Sofie Fribo · 소피 피보",
      role: "일러스트레이터 & 아티스트",
      cta: "소개 읽기",
      ctaHint: "소개 섹션으로 이동",
    },
    about: {
      title: "작가 소개",
      p1: "노르웨이 베르겐 예술대학(KMD, 예술·음악 및 디자인 학부)에서 미술 학사 과정을 마치며, 천천히 바라보기, 낙서 같은 초안, 그리고 ‘이제 이 선이 말을 한다’는 순간을 믿는 법을 배웠습니다.",
      p2: "2022년에는 서울과 휘게타임과 함께 일러스트 에세이 《나는 한국에서 임신했다》를 출간했습니다. 지금 그리는 많은 그림과 닿아 있는 책으로, 이곳의 일상, 온기, 유머와 낯섦을 담으려 합니다.",
      p3: "매일의 스케치와 진행 중인 작업은 인스타그램 @sofiefribo_illustration 에서 가장 먼저 만나보실 수 있습니다 — 나중에 제품·워크숍·프린트로 이어지는 작은 불씨들이 모이는 곳이기도 합니다.",
    },
    career: {
      title: "이력",
      hint: "연도를 눌러 상세 이력을 펼칩니다.",
      blocks: careerBlocksKo,
    },
    collaboration: {
      title: "협업 · 휘게타임",
      role: "Art Director at Hygge Time",
      p1: "휘게타임에서는 사람들이 잠시 멈추고 함께 놀 수 있는 오브제의 비주얼 방향을 잡습니다. 윷놀이·쌍륙놀이 세트부터 데일리 포인트 노리개 키링까지, 리서치와 거친 썸네일에서 출발해 색, 패키징, 선반 위에서 ‘집처럼’ 느껴지는 작은 그래픽 습관까지 이어집니다.",
      p2: "결과물은 한국의 놀이 문화를 바탕으로, 북유럽의 차분함과 또렷하고 친근한 드로잉을 섞어 낸, 만지기 좋고 선물하기 좋은 제품군입니다.",
      shopifyCta: "Shopify 스토어 보기",
      shopifyHint: "새 탭에서 휘게타임 스토어가 열립니다",
    },
    footer: {
      contactLabel: "연락",
      instagramAria: "소피 피보 인스타그램",
      mailAria: "소피 피보에게 메일 보내기",
      designed: "Designed with love in Seoul",
      rights: "모든 권리 보유.",
    },
  },
};
