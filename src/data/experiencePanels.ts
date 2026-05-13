/** Dummy experience rows for “My Experience” — one panel per skill index (0–9). */

export type ExperienceCard = {
  title: string;
  company: string;
  period: string;
  body: string;
};

export type ExperiencePanel = ExperienceCard[];

export const SKILL_LABELS: readonly string[] = [
  "Git",
  "JavaScript",
  "Sass / Scss",
  "Nest.js",
  "Storybook",
  "Figma",
  "React",
  "TypeScript",
  "Node.js",
  "Astro",
] as const;

function panel(skill: string): ExperiencePanel {
  return [
    {
      title: `Lead creative technologist (${skill})`,
      company: "Studio North / Seoul",
      period: "Jan 2024 — Present",
      body: `Dummy copy — highlight how ${skill} shaped shipping cadence, critique rituals, and cross-discipline reviews for illustration-led products.`,
    },
    {
      title: `Senior product designer (${skill})`,
      company: "Hygge Time",
      period: "Mar 2021 — Dec 2023",
      body: `Placeholder — tie ${skill} to packaging systems, workshop collateral, and the yut / norigae program milestones (replace with real CV).`,
    },
    {
      title: `Freelance illustrator (${skill})`,
      company: "Independent",
      period: "2016 — Present",
      body: `Sample timeline — ${skill} appears in personal publishing, library workshops, and long-form drawing essays (swap for accurate dates).`,
    },
  ];
}

export const EXPERIENCE_PANELS: ExperiencePanel[] = SKILL_LABELS.map((label) => panel(label));
