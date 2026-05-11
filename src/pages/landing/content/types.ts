export type LandingPageSectionType =
  | "content"
  | "featureGrid"
  | "tips"
  | "faq"
  | "cta"
  | "internalLinks";

export interface LandingPageCTA {
  label: string;
  href: string;
  style?: "primary" | "secondary";
}

export interface LandingPageCardItem {
  title: string;
  description: string;
  icon?: string;
}

export interface LandingPageFAQItem {
  question: string;
  answer: string;
}

export interface LandingPageLinkItem {
  label: string;
  href: string;
}

export type LandingPageSection =
  | {
      id?: string;
      type: "content";
      title?: string;
      subtitle?: string;
      body?: string[];
      buttons?: LandingPageCTA[];
    }
  | {
      id?: string;
      type: "featureGrid" | "tips";
      title?: string;
      subtitle?: string;
      items?: LandingPageCardItem[];
      buttons?: LandingPageCTA[];
    }
  | {
      id?: string;
      type: "faq";
      title?: string;
      items?: LandingPageFAQItem[];
    }
  | {
      id?: string;
      type: "cta";
      title?: string;
      subtitle?: string;
      buttons?: LandingPageCTA[];
    }
  | {
      id?: string;
      type: "internalLinks";
      title?: string;
      links?: LandingPageLinkItem[];
    };

export interface LandingPageData {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  hero: {
    headline: string;
    subheadline: string;
    buttons: LandingPageCTA[];
    image?: string;
  };
  sections: LandingPageSection[];
}
