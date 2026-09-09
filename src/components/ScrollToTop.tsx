import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop(): null {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    try {
      if ("scrollRestoration" in window.history) {
        // Let our code control scroll position
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.history.scrollRestoration = "manual";
      }
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // Try ID first, then selector
      const el = document.getElementById(id) || document.querySelector(hash);
      if (el) {
        // Scroll to the anchor target
        // Use behaviour 'auto' to avoid janky animations during navigation
        // and ensure consistent top position.
        // @ts-ignore
        el.scrollIntoView({ behavior: "auto" });
        return;
      }
    }

    // Default: scroll to top for new pages
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}
