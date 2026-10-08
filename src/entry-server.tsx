import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HeadProvider } from "react-head";
import AppRoutes from "./AppRoutes";

export function render(url: string): string {
  return renderToString(
    <HeadProvider headTags={[]}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HeadProvider>,
  );
}
