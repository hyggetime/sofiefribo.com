/**
 * siteVisibility.json → docs/SITE_VISIBILITY.md
 * 숨김/보이기 변경 후: npm run sync:visibility
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const configPath = join(root, "src/config/siteVisibility.json");
const outPath = join(root, "docs/SITE_VISIBILITY.md");

const data = JSON.parse(readFileSync(configPath, "utf8"));
const entries = data.entries;
const { routes, homeSections } = data.siteMap;

const hidden = entries.filter((e) => e.hidden);
const visible = entries.filter((e) => !e.hidden);

function mermaidHomeSections() {
  return homeSections
    .map((s) => {
      const shape = s.visible ? `[${s.label}]` : `[/${s.label}/]`;
      const style = s.visible ? "" : ":::hidden";
      return `    ${s.id}${shape}${style}`;
    })
    .join("\n");
}

function mermaidRoutes() {
  return routes
    .map((r) => {
      const node = r.path.replace(/[[\]:/]/g, "_");
      const label = `${r.label}<br/>${r.path}`;
      return r.visible
        ? `    ${node}["${label}"]`
        : `    ${node}["${label}"]:::hiddenRoute`;
    })
    .join("\n");
}

const md = `# Site visibility & structure

> **자동 생성 파일** — 직접 수정하지 마세요.  
> 숨김/보이기 변경: \`src/config/siteVisibility.json\` 수정 → \`npm run sync:visibility\`

마지막 동기화: ${new Date().toISOString()}

## 숨김 처리 목록 (${hidden.length})

| ID | 종류 | 라벨 | 위치 | 파일 |
| --- | --- | --- | --- | --- |
${hidden.map((e) => `| \`${e.id}\` | ${e.kind} | ${e.label}${e.note ? `<br/>_${e.note}_` : ""} | ${e.location} | \`${e.file}\` |`).join("\n")}

## 표시 중 (${visible.length})

| ID | 종류 | 라벨 | 위치 |
| --- | --- | --- | --- |
${visible.length ? visible.map((e) => `| \`${e.id}\` | ${e.kind} | ${e.label} | ${e.location} |`).join("\n") : "| _(없음)_ | | | |"}

## 페이지 구조 (시각화)

\`\`\`mermaid
flowchart TB
  subgraph global["Global"]
    lang["Language switcher"]:::hidden
    backToTop["Back to top FAB"]
  end

  subgraph home["Home /"]
    header["Header nav"]
    hero["#home Hero + thumbs"]
    mailclub["#mailclub Mail Club"]
    shop["#shop Art shop"]
    projects["#projects My Projects"]
    archive["#archive Timeline"]:::hidden
    testimonials["#testimonials"]:::hidden
    contact["#contact Form"]:::hidden
    footer["Footer"]
  end

  hero --> mailclub
  mailclub --> shop
  shop --> projects
  projects --> archive
  archive --> testimonials
  testimonials --> contact
  contact --> footer

  subgraph routes["Standalone routes"]
    r_mailclub["/mailclub"] 
    r_shop["/shop"]
    r_portfoilo["/portfoilo"]
    r_proj["/projects/:id"]
  end

  hero -.-> r_mailclub
  hero -.-> r_shop
  hero -.-> projects

  classDef hidden fill:#f5f5f5,stroke:#999,stroke-dasharray: 5 5,color:#666
  classDef hiddenRoute fill:#fff,stroke:#999,stroke-dasharray: 5 5
\`\`\`

## Home 섹션 순서

\`\`\`mermaid
flowchart LR
${homeSections.map((s, i) => {
  const arrow = i < homeSections.length - 1 ? " --> " : "";
  const next = i < homeSections.length - 1 ? homeSections[i + 1].id : "";
  if (i === 0) {
    const first = s.visible ? s.id : `${s.id}:::hidden`;
    return `  ${first}${arrow}${next}`;
  }
  return "";
}).filter(Boolean).join("\n")}
${homeSections.slice(1).map((s, i) => {
  const idx = i + 1;
  if (idx >= homeSections.length - 1) return "";
  const node = s.visible ? s.id : `${s.id}:::hidden`;
  const next = homeSections[idx + 1];
  const nextNode = next.visible ? next.id : `${next.id}:::hidden`;
  return `  ${node} --> ${nextNode}`;
}).filter(Boolean).join("\n")}

  classDef hidden fill:#eee,stroke:#999,stroke-dasharray: 5 5
\`\`\`

## 라우트

| Path | 설명 | 공개 |
| --- | --- | --- |
${routes.map((r) => `| \`${r.path}\` | ${r.label}${r.note ? ` — ${r.note}` : ""} | ${r.visible ? "✓" : "—"} |`).join("\n")}

## 작업 방법

1. \`src/config/siteVisibility.json\`에서 해당 \`id\`의 \`hidden\`을 \`true\` / \`false\`로 변경
2. \`npm run sync:visibility\` 실행 (또는 \`npm run build\` — prebuild에서 자동 실행)
3. UI는 \`isHidden(id)\` / \`hiddenClass(id)\` (\`src/config/siteVisibility.ts\`)를 사용하는 컴포넌트에 반영
`;

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, md, "utf8");
console.log(`Wrote ${outPath} (${hidden.length} hidden, ${visible.length} visible)`);
