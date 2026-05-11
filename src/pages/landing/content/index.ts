import {LandingPageData} from "./types";

const modules = import.meta.glob("./*.ts", {eager: true}) as Record<
  string,
  {
    landingPage?: LandingPageData;
  }
>;

export const landingPages: LandingPageData[] = Object.values(modules)
  .map((module) => module.landingPage)
  .filter((page): page is LandingPageData => Boolean(page));

export const landingPagesBySlug = Object.fromEntries(
  landingPages.map((page) => [page.slug, page]),
);

export type {
  LandingPageData,
  LandingPageSection,
  LandingPageCTA,
  LandingPageFAQItem,
  LandingPageLinkItem,
} from "./types";
