import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useLocation } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { trackAffiliateClick } from "./utils/affiliateTracking";



import "./index.css";
import "./indexpegy.css";

import { HeadProvider } from "react-head";
import ScrollToTop from "./components/ScrollToTop";

function AffiliateTrackingBootstrap() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (anchor.target !== "_blank") return;
      trackAffiliateClick(anchor);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}

function CanonicalUrl() {
  const location = useLocation();

  useEffect(() => {
    const canonicalUrl = new URL(location.pathname, "https://vechura.com");
    canonicalUrl.pathname = canonicalUrl.pathname.replace(/\/+$/, "") || "/";
    let link = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonicalUrl.toString();
  }, [location.pathname]);

  return null;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeadProvider>
      <BrowserRouter>
        <AffiliateTrackingBootstrap />
        <CanonicalUrl />
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </HeadProvider>
  </React.StrictMode>,
);
