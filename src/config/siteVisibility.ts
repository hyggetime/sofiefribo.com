import raw from "./siteVisibility.json";

export type VisibilityKind = "global" | "nav" | "section" | "page" | "route";

export type VisibilityEntry = {
  id: string;
  hidden: boolean;
  kind: VisibilityKind;
  label: string;
  location: string;
  file: string;
  note?: string;
};

export type SiteRoute = {
  path: string;
  label: string;
  visible: boolean;
  note?: string;
};

export type HomeSection = {
  id: string;
  label: string;
  visible: boolean;
  visibilityId?: string;
};

const data = raw as {
  entries: VisibilityEntry[];
  siteMap: { routes: SiteRoute[]; homeSections: HomeSection[] };
};

export const SITE_VISIBILITY: VisibilityEntry[] = data.entries;
export const SITE_ROUTES: SiteRoute[] = data.siteMap.routes;
export const HOME_SECTIONS: HomeSection[] = data.siteMap.homeSections;

const hiddenById = new Map(SITE_VISIBILITY.map((e) => [e.id, e.hidden]));

/** `siteVisibility.json` 기준 숨김 여부 */
export function isHidden(id: string): boolean {
  return hiddenById.get(id) ?? false;
}

/** Tailwind `hidden` 클래스 — 숨김일 때만 적용 */
export function hiddenClass(id: string): string {
  return isHidden(id) ? "hidden" : "";
}
