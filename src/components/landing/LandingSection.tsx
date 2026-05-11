import React from "react";
import {
  LandingPageCardItem,
  LandingPageCTA,
} from "../../pages/landing/content/types";

type Variant = "simple" | "grid" | "list";

type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  body?: string[];
  items?: LandingPageCardItem[];
  variant?: Variant;
  buttons?: LandingPageCTA[];
};

const LandingSection: React.FC<Props> = ({
  id,
  title,
  subtitle,
  body,
  items,
  variant = "simple",
  buttons,
}) => {
  return (
    <section id={id} className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="max-w-5xl mx-auto">
        {title && <h2 className="text-3xl font-bold text-slate-900 mb-3">{title}</h2>}
        {subtitle && <p className="text-slate-600 mb-6">{subtitle}</p>}

        {body?.map((paragraph, index) => (
          <p key={index} className="text-slate-700 leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}

        {items && items.length > 0 && variant === "grid" && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        )}

        {items && items.length > 0 && variant === "list" && (
          <div className="mt-6 space-y-4">
            {items.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        )}

        {items && items.length > 0 && variant === "simple" && (
          <ul className="mt-6 space-y-3 list-disc list-inside text-slate-700">
            {items.map((item) => (
              <li key={item.title}>
                <span className="font-semibold text-slate-900">{item.title}:</span> {item.description}
              </li>
            ))}
          </ul>
        )}

        {buttons && buttons.length > 0 && (
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {buttons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 ${
                  button.style === "primary"
                    ? "bg-slate-900 text-white hover:bg-slate-800"
                    : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
                }`}
              >
                {button.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LandingSection;
