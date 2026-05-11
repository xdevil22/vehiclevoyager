import React from "react";
import {LandingPageFAQItem} from "../../pages/landing/content/types";

type Props = {
  id?: string;
  title: string;
  items: LandingPageFAQItem[];
};

const LandingFAQ: React.FC<Props> = ({id, title, items}) => (
  <section id={id} className="rounded-3xl bg-white p-8 shadow-sm">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-3xl border border-slate-200 bg-slate-50 p-5"
          >
            <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
              {item.question}
            </summary>
            <div className="mt-3 text-slate-600 leading-relaxed">{item.answer}</div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default LandingFAQ;
