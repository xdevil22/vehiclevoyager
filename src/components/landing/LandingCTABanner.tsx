import React from "react";
import {LandingPageCTA} from "../../pages/landing/content/types";

type Props = {
  title: string;
  subtitle?: string;
  buttons: LandingPageCTA[];
};

const LandingCTABanner: React.FC<Props> = ({title, subtitle, buttons}) => (
  <section className="rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 px-8 py-12 text-white shadow-2xl shadow-slate-900/10">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-3">{title}</h2>
      {subtitle && <p className="mx-auto max-w-2xl text-slate-200 mb-8">{subtitle}</p>}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:flex-wrap">
        {buttons.map((button) => (
          <a
            key={button.label}
            href={button.href}
            className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
              button.style === "primary"
                ? "bg-white text-slate-900 hover:bg-slate-100"
                : "border border-white/60 bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {button.label}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default LandingCTABanner;
