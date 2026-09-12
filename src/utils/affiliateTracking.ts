const AFFILIATE_HOST_HINTS = [
  "expedia",
  "hotels.com",
  "vrbo",
  "turo",
  "sailo",
  "outdoorsy",
  "amazon",
  "amzn.to",
  "getyourguide",
  "viator",
  "booking.com",
  "airbnb",
  "campspot",
  "gowithguide",
  "impactradius",
  "awin",
  "shareasale",
  "skyscanner",
  "ridershare",
  "ride-share",
  "tripadvisor",
  "klook",
];

const AFFILIATE_PARAM_HINTS = [
  "affiliate",
  "aff_id",
  "aff_sub",
  "utm_campaign",
  "utm_medium",
  "utm_source",
  "sv1",
  "sv_campaign_id",
  "awc",
  "ref",
  "tag",
  "partner",
  "subid",
  "tracking",
  "source",
];

const formatPartnerName = (hostname: string): string => {
  const host = hostname.replace(/^www\./, "").toLowerCase();
  const domain = host.split(".")[0];
  return domain || "partner";
};

export const isAffiliateDestination = (href: string): boolean => {
  if (!href) return false;

  try {
    const url = new URL(href, window.location.href);
    if (!["http:", "https:"].includes(url.protocol)) return false;
    if (url.hostname === window.location.hostname) return false;

    const host = url.hostname.replace(/^www\./, "").toLowerCase();
    const search = `${url.search} ${url.pathname}`.toLowerCase();
    const paramKeys = Array.from(url.searchParams.keys()).map((key) =>
      key.toLowerCase(),
    );

    const hasHostMatch = AFFILIATE_HOST_HINTS.some((hint) => host.includes(hint));
    const hasParamMatch = AFFILIATE_PARAM_HINTS.some((hint) =>
      paramKeys.includes(hint) || search.includes(hint),
    );
    const hasAffiliatePath = /affiliate|aff_c|affid|partner|ref=|tag=/i.test(
      `${url.pathname}${url.search}`,
    );

    return hasHostMatch || hasParamMatch || hasAffiliatePath;
  } catch {
    return false;
  }
};

export const trackAffiliateClick = (link: HTMLAnchorElement) => {
  if (!link || !link.href) return;

  const href = link.href;
  if (!isAffiliateDestination(href)) return;

  try {
    const url = new URL(href, window.location.href);
    const partner = formatPartnerName(url.hostname);
    const label =
      (link.getAttribute("aria-label") ||
        link.dataset.partner ||
        link.textContent ||
        link.getAttribute("title") ||
        partner ||
        "partner link")
        .trim()
        .replace(/\s+/g, " ")
        .slice(0, 180) || partner;

    if (typeof window.gtag === "function") {
      window.gtag("event", "affiliate_click", {
        event_category: "affiliate",
        event_label: label,
        source_page: window.location.pathname,
        partner,
        cta: label,
        destination_url: url.toString(),
        value: 1,
      });
    }
  } catch {
    // Ignore malformed links
  }
};
