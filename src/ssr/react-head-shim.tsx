// Used only by the SSR/prerender build (see vite.config.ts). react-head throws
// on the server unless every <HeadProvider> receives a headTags array, and the
// pages nest their own providers. Head tags are injected by scripts/prerender.mjs.
import React from "react";
import { HeadProvider as BaseHeadProvider } from "react-head-real";

export { Title, Meta, Link, Style, Base } from "react-head-real";

export const HeadProvider = ({ children }: { children?: React.ReactNode }) => (
  <BaseHeadProvider headTags={[]}>{children}</BaseHeadProvider>
);
