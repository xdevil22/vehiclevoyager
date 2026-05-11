import React from "react";
import {useParams} from "react-router-dom";
import {HeadProvider, Title, Meta} from "react-head";
import {landingPagesBySlug, LandingPageSection} from "./content";
import LandingHero from "../../components/landing/LandingHero";
import LandingSection from "../../components/landing/LandingSection";
import LandingFAQ from "../../components/landing/LandingFAQ";
import LandingCTABanner from "../../components/landing/LandingCTABanner";

const LandingPage: React.FC = () => {
  const {slug} = useParams();
  const staticPage = slug ? landingPagesBySlug[slug] : undefined;
  const dynamicPages = JSON.parse(localStorage.getItem('landingPages') || '{}');
  const page = staticPage || (slug ? dynamicPages[slug] : undefined);

  if (!page) {
    return (
      <div className="min-h-screen bg-neutral-100 flex items-center justify-center px-4 py-16">
        <div className="max-w-xl text-center bg-white rounded-3xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Page not found</h1>
          <p className="text-gray-600 mb-6">
            The landing page you’re looking for doesn’t exist yet. Check the URL
            or return to the homepage.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            Return home
          </a>
        </div>
      </div>
    );
  }

  const renderSection = (section: LandingPageSection, index: number) => {
    switch (section.type) {
      case "content":
        return (
          <LandingSection
            key={section.id || index}
            id={section.id}
            title={section.title}
            subtitle={section.subtitle}
            body={section.body}
            variant="simple"
          />
        );
      case "featureGrid":
      case "tips":
        return (
          <LandingSection
            key={section.id || index}
            id={section.id}
            title={section.title}
            subtitle={section.subtitle}
            items={section.items}
            variant={section.type === "featureGrid" ? "grid" : "list"}
          />
        );
      case "faq":
        return (
          <LandingFAQ
            key={section.id || index}
            id={section.id}
            title={section.title || "Frequently asked questions"}
            items={section.items || []}
          />
        );
      case "cta":
        return (
          <LandingCTABanner
            key={section.id || index}
            title={section.title || "Ready to take the next step?"}
            subtitle={section.subtitle}
            buttons={section.buttons || []}
          />
        );
      case "internalLinks":
        return (
          <section
            key={section.id || index}
            id={section.id}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {section.title}
              </h2>
              <div className="grid gap-3 sm:grid-cols-3 mt-8">
                {section.links?.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-left text-slate-700 transition hover:border-blue-500 hover:bg-blue-50">
                    <span className="font-semibold text-slate-900">
                      {link.label}
                    </span>
                    <p className="mt-2 text-sm text-slate-600">
                      Navigate directly to related resources.
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <HeadProvider>
        <Title>{page.seoTitle}</Title>
        <Meta name="description" content={page.seoDescription} />
      </HeadProvider>
      <div className="bg-neutral-100">
        <LandingHero {...page.hero} />
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-14">
          {page.sections.map(renderSection)}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
