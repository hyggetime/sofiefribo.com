/**
 * 콘텐츠 작업 시: 한국어(ko) 문구를 먼저 수정한 뒤,
 * en · da 를 같은 의미로 맞춰 주세요. (또는 채팅에 한국어만 주시면 번역 반영 가능)
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
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    lead: string;
    cta: string;
    ctaHint: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    tag: string;
    captions: [string, string, string, string, string, string];
  };
  about: {
    title: string;
    pullQuote: string;
    p1: string;
    p2: string;
  };
  cv: {
    title: string;
    introName: string;
    introRoles: string;
    introEducation: string;
    blocks: { year: string; items: string[] }[];
  };
  footer: {
    brand: string;
    rights: string;
    instagramCta: string;
    instagramHint: string;
    storeCta: string;
    storeHint: string;
  };
};

export const translations: Record<Locale, TranslationTree> = {
  en: {
    meta: {
      title: "Sofie Fribo — Illustration",
      description:
        "Illustration by Sofie Fribo — pencil on paper, soft contrast, and room to breathe.",
    },
    hero: {
      eyebrow: "Sofie Fribo · Illustration",
      titleLine1: "One line of quiet,",
      titleLine2: "holding weight.",
      lead: "Rhythm from a traditional hip sensibility meets the still air of Danish minimalism. Few pieces, few words—only light and texture stay behind.",
      cta: "View work",
      ctaHint: "Scroll to gallery",
    },
    gallery: {
      title: "Gallery",
      subtitle: "Line, plane, and a calm contrast.",
      tag: "Selected works",
      captions: [
        "Piece 01",
        "Piece 02",
        "Piece 03",
        "Piece 04",
        "Piece 05",
        "Piece 06",
      ],
    },
    about: {
      title: "About",
      pullQuote: "I trust rhythm over noise, and breath over ornament.",
      p1: "I am Sofie Fribo, an illustrator drawn to Korean pattern and the rough charm of type, while pulling in Scandinavian whitespace and material calm. Brand identity, editorial, and spatial cues should read as one continuous story.",
      p2: "For collaboration or commissions, write by email. I look forward to finding a new tone together.",
    },
    cv: {
      title: "CV",
      introName: "Sofie Fribo",
      introRoles: "Illustrator, artist, creator.",
      introEducation:
        "Bergen School of Art — Faculty of Fine Art, Music and Design (KMD), Bergen, Norway.",
      blocks: [
        {
          year: "2025",
          items: [
            "Bangadari Library, Sinwol-dong — workshop program (May: Time Capsule Three; October: popup card).",
            "Hygge Time — ssangnyuk (board game) set, Daily Point norigae; production (art director, design).",
          ],
        },
        {
          year: "2024",
          items: [
            "Bangadari Library, Sinwol-dong — workshop program (June: LEGO printing; September: calendar + popup card).",
          ],
        },
        {
          year: "2023",
          items: [
            "Hygge Time — yut nori set; production (art director, design).",
            "Bangadari Library, Sinwol-dong — workshop program (June: time capsule; September: popup book).",
            "Eunhasu Daycare, Sinwol — event; pro-bono caricatures.",
          ],
        },
        {
          year: "2022",
          items: [
            "Bangadari Library, Sinwol-dong — workshop program (August: calendar making).",
            "Illustration essay I Was Pregnant in Korea — published in Seoul, Republic of Korea (Hygge Time).",
          ],
        },
        {
          year: "2020",
          items: [
            "Drawing diary project began — Instagram @sofiefribo_illustration.",
          ],
        },
        {
          year: "2016–2019",
          items: [
            "Education — Bachelor of Fine Art, Faculty of Fine Art, Music and Design (KMD), Bergen, Norway.",
          ],
        },
        {
          year: "2019",
          items: [
            "Group exhibition, what if…?, Iflatable Mushmellow — Vilnius, Lithuania (winter).",
          ],
        },
        {
          year: "2018",
          items: [
            "Solo exhibition, Same Same but Different — National Museum of Modern and Contemporary Art, Seoul, Republic of Korea (spring).",
          ],
        },
        {
          year: "2017",
          items: [
            "Margrethe Kühle, The Plastic Sea — collaboration with Gallery Fish, Bergen, Norway (autumn).",
            "Solo exhibition, The Hopeless Wall — Gallery Flagpole, Bergen, Norway (spring).",
            "Group exhibition, Virgin Marry — BA1 spring curated show, Bergen, Norway (spring).",
            "Solo art performance, Would You Cut Off Her Hair? — Bergen, Norway (spring).",
          ],
        },
        {
          year: "2016",
          items: [
            "Group exhibition, Deep Color — Carte Blanche, Bergen, Norway (autumn).",
            "School group exhibition — Multiples and Masses, Memory Loss, Strømgaten 1, Bergen, Norway (autumn).",
            "Group exhibition, 24 New Secrets — for ZeBU ZeNEKUNST FOR BØRN OG UNGE, Copenhagen, Denmark.",
          ],
        },
      ],
    },
    footer: {
      brand: "Sofie Fribo",
      rights: "All rights reserved.",
      instagramCta: "Instagram — @sofiefribo_illustration",
      instagramHint: "Opens Instagram in a new tab",
      storeCta: "Visit Hygge Time store",
      storeHint: "Opens in a new tab",
    },
  },
  da: {
    meta: {
      title: "Sofie Fribo — Illustration",
      description:
        "Illustration af Sofie Fribo — blyant på papir, blød kontrast og luft omkring stregerne.",
    },
    hero: {
      eyebrow: "Sofie Fribo · Illustration",
      titleLine1: "Én linje ro,",
      titleLine2: "der bærer vægt.",
      lead: "Rytme med rødder i en traditionel hip-fornemmelse møder den stille luft fra dansk minimalisme. Få værker, få ord—kun lys og tekstur bliver tilbage.",
      cta: "Se værker",
      ctaHint: "Rul til galleriet",
    },
    gallery: {
      title: "Galleri",
      subtitle: "Linje, flade og en rolig kontrast.",
      tag: "Udvalgte værker",
      captions: [
        "Værk 01",
        "Værk 02",
        "Værk 03",
        "Værk 04",
        "Værk 05",
        "Værk 06",
      ],
    },
    about: {
      title: "Om",
      pullQuote: "Jeg stoler på rytme frem for støj, og åndedræt frem for pynt.",
      p1: "Jeg hedder Sofie Fribo og arbejder som illustrator. Jeg er draget af koreanske mønstre og typografiens ru charme, mens jeg henter skandinavisk whitespace og rolig materialefornemmelse ind. Brandidentitet, redaktionelt arbejde og rumlige signaler skal læses som én sammenhængende fortælling.",
      p2: "Til samarbejde eller opgaver: skriv på e-mail. Jeg ser frem til at finde en ny tone sammen.",
    },
    cv: {
      title: "CV",
      introName: "Sofie Fribo",
      introRoles: "Illustratør, kunstner, skaber.",
      introEducation:
        "Kunstskolen i Bergen — Det kunstfaglige fakultet, musik og design (KMD), Bergen, Norge.",
      blocks: [
        {
          year: "2025",
          items: [
            "Bangadari-biblioteket, Sinwol-dong — workshopforløb (maj: Time Capsule Three; oktober: popup-kort).",
            "Hygge Time — ssangnyuk (brætspil), Daily Point-norigae; produktion (art director, design).",
          ],
        },
        {
          year: "2024",
          items: [
            "Bangadari-biblioteket, Sinwol-dong — workshopforløb (juni: LEGO-print; september: kalender + popup-kort).",
          ],
        },
        {
          year: "2023",
          items: [
            "Hygge Time — yut nori-sæt; produktion (art director, design).",
            "Bangadari-biblioteket, Sinwol-dong — workshopforløb (juni: tidskapsel; september: popup-bog).",
            "Eunhasu-børnehave, Sinwol — arrangement; frivillige karikaturer.",
          ],
        },
        {
          year: "2022",
          items: [
            "Bangadari-biblioteket, Sinwol-dong — workshopforløb (august: kalender).",
            "Illustrationsessay Jeg var gravid i Korea — udgivet i Seoul, Sydkorea (Hygge Time).",
          ],
        },
        {
          year: "2020",
          items: [
            "Tegnedagbogsprojekt startet — Instagram @sofiefribo_illustration.",
          ],
        },
        {
          year: "2016–2019",
          items: [
            "Uddannelse — bachelor i billedkunst, Det kunstfaglige fakultet, musik og design (KMD), Bergen, Norge.",
          ],
        },
        {
          year: "2019",
          items: [
            "Gruppeudstilling, what if…?, Iflatable Mushmellow — Vilnius, Litauen (vinter).",
          ],
        },
        {
          year: "2018",
          items: [
            "Soloudstilling, Same Same but Different — Nationalmuseet for moderne og samtidskunst, Seoul, Sydkorea (forår).",
          ],
        },
        {
          year: "2017",
          items: [
            "Margrethe Kühle, The Plastic Sea — samarbejde med Gallery Fish, Bergen, Norge (efterår).",
            "Soloudstilling, The Hopeless Wall — Gallery Flagpole, Bergen, Norge (forår).",
            "Gruppeudstilling, Virgin Marry — BA1 forårsudstilling, Bergen, Norge (forår).",
            "Solokunstperformance, Would You Cut Off Her Hair? — Bergen, Norge (forår).",
          ],
        },
        {
          year: "2016",
          items: [
            "Gruppeudstilling, Deep Color — Carte Blanche, Bergen, Norge (efterår).",
            "Skolegruppeudstilling — Multiples and Masses, Memory Loss, Strømgaten 1, Bergen, Norge (efterår).",
            "Gruppeudstilling, 24 New Secrets — for ZeBU ZeNEKUNST FOR BØRN OG UNGE, København, Danmark.",
          ],
        },
      ],
    },
    footer: {
      brand: "Sofie Fribo",
      rights: "Alle rettigheder forbeholdes.",
      instagramCta: "Instagram — @sofiefribo_illustration",
      instagramHint: "Åbner Instagram i nyt faneblad",
      storeCta: "Besøg Hygge Time-butikken",
      storeHint: "Åbner i nyt faneblad",
    },
  },
  ko: {
    meta: {
      title: "Sofie Fribo (소피 피보) — 일러스트",
      description:
        "소피 피보의 일러스트 — 종이 위 연필, 부드러운 대비, 숨 쉬는 여백.",
    },
    hero: {
      eyebrow: "Sofie Fribo (소피 피보) · 일러스트",
      titleLine1: "한 줄의 여백으로",
      titleLine2: "무게를 싣다.",
      lead: "전통 힙의 리듬감과 덴마크 미니멀리즘의 정돈된 공기를 한 화면에 담았습니다. 작업은 적고, 말은 짧게—빛과 질감만 오래 남기려 합니다.",
      cta: "작품 보기",
      ctaHint: "갤러리로 이동",
    },
    gallery: {
      title: "갤러리",
      subtitle: "선과 면, 그리고 잔잔한 대비.",
      tag: "선별 작업",
      captions: [
        "작품 01",
        "작품 02",
        "작품 03",
        "작품 04",
        "작품 05",
        "작품 06",
      ],
    },
    about: {
      title: "소개",
      pullQuote: "저는 소음보다 리듬, 장식보다 숨을 믿습니다.",
      p1: "일러스트레이터 Sofie Fribo(소피 피보)입니다. 한국적 문양과 타이포의 거친 매력을 좋아하면서도, 일상의 편안함을 주는 스칸디나비아식 여백과 재질감을 끌어와 화면을 구성합니다. 브랜드 아이덴티티, 에디토리얼, 공간 연출까지 맥락이 이어지도록 작업합니다.",
      p2: "협업과 의뢰는 이메일로 연락 주세요. 새로운 톤을 함께 찾아가길 기다립니다.",
    },
    cv: {
      title: "약력",
      introName: "소피 피보 (Sofie Fribo)",
      introRoles: "일러스트레이터, 아티스트, 크리에이터.",
      introEducation:
        "베르겐 예술대학 졸업 — 예술·음악 및 디자인 학부(KMD), 베르겐, 노르웨이.",
      blocks: [
        {
          year: "2025",
          items: [
            "신월동 방아다리 도서관 프로그램 출강 — 5월 타임캡슐쓰리, 10월 팝업카드.",
            "휘게타임 쌍륙놀이·데일리 포인트 노리개 제작 — 아트디렉터·디자인 담당.",
          ],
        },
        {
          year: "2024",
          items: [
            "신월동 방아다리 도서관 프로그램 출강 — 6월 레고프린팅, 9월 달력+팝업카드.",
          ],
        },
        {
          year: "2023",
          items: [
            "휘게타임 윷놀이 제작 — 아트디렉터·디자인 담당.",
            "신월동 방아다리 도서관 프로그램 출강 — 6월 타임캡슐, 9월 팝업북.",
            "신월 은하수 어린이집 행사 재능기부 참여 — 캐리커처.",
          ],
        },
        {
          year: "2022",
          items: [
            "신월동 방아다리 도서관 프로그램 출강 — 8월 달력 만들기.",
            "일러스트레이션 에세이 《나는 한국에서 임신했다》 출간 — 서울, 대한민국, 휘게타임 출판사.",
          ],
        },
        {
          year: "2020",
          items: [
            "그림일기 프로젝트 시작 — 인스타그램 @sofiefribo_illustration.",
          ],
        },
        {
          year: "2016–2019",
          items: [
            "교육 — 미술 아카데미 순수미술 학사: 예술·음악 및 디자인 학부, 베르겐, 노르웨이.",
          ],
        },
        {
          year: "2019",
          items: [
            "그룹전 what if…?, Iflatable Mushmellow — 빌뉴스, 리투아니아, 겨울.",
          ],
        },
        {
          year: "2018",
          items: [
            "개인전 Same Same but Different — 국립현대미술관, 서울, 대한민국, 봄.",
          ],
        },
        {
          year: "2017",
          items: [
            "Margrethe Kühle, The Plastic Sea — Gallery Fish 콜라보레이션 전시, 베르겐, 노르웨이, 가을.",
            "개인전 The Hopeless Wall — Gallery Flagpole, 베르겐, 노르웨이, 봄.",
            "단체전 Virgin Marry — BA1 봄 기획전, 베르겐, 노르웨이, 봄.",
            "단독 아트 공연 Would You Cut Off Her Hair? — 베르겐, 노르웨이, 봄.",
          ],
        },
        {
          year: "2016",
          items: [
            "단체전 Deep Color — Carte Blanche, 베르겐, 노르웨이, 가을.",
            "학교 단체전 Multiples and Masses, Memory Loss — Strømgaten 1, 베르겐, 노르웨이, 가을.",
            "그룹 전시 24 New Secrets — ZeBU ZeNEKUNST FOR BØRN OG UNGE, 코펜하겐, 덴마크.",
          ],
        },
      ],
    },
    footer: {
      brand: "Sofie Fribo (소피 피보)",
      rights: "모든 권리 보유.",
      instagramCta: "인스타그램 — @sofiefribo_illustration",
      instagramHint: "새 탭에서 인스타그램이 열립니다",
      storeCta: "Hygge Time 스토어 방문하기",
      storeHint: "새 탭에서 열립니다",
    },
  },
};
