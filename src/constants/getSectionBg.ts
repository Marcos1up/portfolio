export const SECTIONS = ["hero", "skills", "projects"] as const;

export type Section = (typeof SECTIONS)[number];

const SECTION_BG_EVEN = "brand.sectionEven" as const;
const SECTION_BG_ODD = "brand.sectionOdd" as const;

export const getSectionBg = (index: number) =>
  index % 2 === 0 ? SECTION_BG_EVEN : SECTION_BG_ODD;

export type SectionBg = ReturnType<typeof getSectionBg>;
