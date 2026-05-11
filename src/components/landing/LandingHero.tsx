import React from "react";
import {LandingPageCTA} from "../../pages/landing/content/types";

type Props = {
  headline: string;
  subheadline: string;
  buttons: LandingPageCTA[];
  image?: string;
};

const LandingHero: React.FC<Props> = ({
  headline,
  subheadline,
  buttons,
  image,
}) => (
  <section className="relative overflow-hidden bg-gradient-to-br from-sky-700 via-cyan-600 to-blue-700 text-white">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_42%)]" />
    <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-24 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-100">
            Phoenix Car Rental
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            {headline}
          </h1>
          <p className="max-w-3xl text-lg sm:text-xl text-cyan-100/90">
            {subheadline}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {buttons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  button.style === "primary"
                    ? "bg-white text-slate-900 hover:bg-slate-100"
                    : "border border-white/80 bg-white/10 text-white hover:bg-white/20"
                }`}>
                {button.label}
              </a>
            ))}
          </div>
        </div>
        {image ? (
          <div className="overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl shadow-slate-950/10">
            <img
              src={image}
              alt="Phoenix car rental"
              className="h-full w-full rounded-[1.5rem] object-cover"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 text-center text-sm text-cyan-100 shadow-lg shadow-slate-950/10">
            <p className="font-semibold">
              Find the best Phoenix rental quote without searching every site.
            </p>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default LandingHero;
