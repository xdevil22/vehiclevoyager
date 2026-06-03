import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {HeadProvider, Title, Meta} from "react-head";
import {
  landingPagesBySlug,
  LandingPageCustomContentBlock,
  LandingPageData,
  LandingPageSection,
} from "./content";
import LandingHero from "../../components/landing/LandingHero";
import LandingSection from "../../components/landing/LandingSection";
import LandingFAQ from "../../components/landing/LandingFAQ";
import LandingCTABanner from "../../components/landing/LandingCTABanner";

const LANDING_PAGES_API_URL = `${
  import.meta.env.VITE_API_BASE_URL
}/api/create-landing-page`;

const readDynamicLandingPages = () => {
  try {
    const stored = JSON.parse(localStorage.getItem("landingPages") || "{}");
    return stored && typeof stored === "object" && !Array.isArray(stored)
      ? stored
      : {};
  } catch (error) {
    console.warn("Unable to read dynamic landing pages:", error);
    return {};
  }
};

const renderLinkedText = (
  text: string,
  linkLabel?: string,
  linkHref?: string,
) => {
  if (!linkLabel || !linkHref) {
    return text;
  }

  const linkIndex = text.indexOf(linkLabel);
  if (linkIndex === -1) {
    return text;
  }

  const beforeLink = text.slice(0, linkIndex);
  const afterLink = text.slice(linkIndex + linkLabel.length);

  return (
    <>
      {beforeLink}
      <a
        href={linkHref}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-blue-600 underline-offset-4 hover:underline">
        {linkLabel}
      </a>
      {afterLink}
    </>
  );
};

const LandingPage: React.FC = () => {
  const {slug} = useParams();
  const [dynamicPages, setDynamicPages] = useState<
    Record<string, LandingPageData>
  >(readDynamicLandingPages);
  const [isLoadingDynamicPages, setIsLoadingDynamicPages] = useState(true);
  const staticPage = slug ? landingPagesBySlug[slug] : undefined;
  const page = (slug ? dynamicPages[slug] : undefined) || staticPage;

  useEffect(() => {
    let isMounted = true;

    fetch(`${LANDING_PAGES_API_URL}?ts=${Date.now()}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Landing pages API returned ${response.status}`);
        }

        return response.json();
      })
      .then((pages) => {
        if (!isMounted) return;
        if (pages && typeof pages === "object" && !Array.isArray(pages)) {
          setDynamicPages(pages);
          localStorage.setItem("landingPages", JSON.stringify(pages));
        }
      })
      .catch((error) => {
        console.warn("Unable to fetch landing pages from API:", error);
      })
      .finally(() => {
        if (isMounted) {
          setIsLoadingDynamicPages(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!page) {
    if (isLoadingDynamicPages) {
      return (
        <div className="min-h-screen bg-neutral-100 flex items-center justify-center px-4 py-16">
          <p className="text-gray-600">Loading landing page...</p>
        </div>
      );
    }

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
      case "customContent":
        const blocks: LandingPageCustomContentBlock[] =
          section.blocks && section.blocks.length > 0
            ? section.blocks
            : [
                ...(section.title
                  ? [{type: "title" as const, text: section.title}]
                  : []),
                ...(section.image
                  ? [{type: "image" as const, image: section.image}]
                  : []),
                ...(section.paragraphs?.map((paragraph) => ({
                  type: "paragraph" as const,
                  text: paragraph.text,
                  linkLabel: paragraph.linkLabel,
                  linkHref: paragraph.linkHref,
                })) || []),
                ...(section.bullets?.length
                  ? [{type: "list" as const, items: section.bullets}]
                  : []),
              ];

        return (
          <section key={section.id || index} id={section.id} className="py-2">
            <div className="mx-auto max-w-4xl space-y-6 text-left">
              {blocks.map((block, blockIndex) => (
                <React.Fragment key={block.id || blockIndex}>
                  {block.type === "title" && block.text && (
                    <h2 className="text-left text-3xl font-bold text-[#3073cc]">
                      {block.text}
                    </h2>
                  )}

                  {block.type === "subtitle" && block.text && (
                    <h3 className="text-left text-2xl font-semibold text-[#3073cc]">
                      {block.text}
                    </h3>
                  )}

                  {block.type === "paragraph" && block.text && (
                    <p className="text-left text-slate-700 leading-relaxed">
                      {renderLinkedText(
                        block.text,
                        block.linkLabel,
                        block.linkHref,
                      )}
                    </p>
                  )}

                  {block.type === "image" && block.image && (
                    <div className="flex justify-center">
                      <img
                        src={block.image}
                        alt="Custom content image"
                        className="max-h-[420px] w-full max-w-3xl rounded-2xl object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {block.type === "list" &&
                    block.items &&
                    block.items.length > 0 && (
                      <ul className="space-y-3 pl-5 text-slate-700 list-disc">
                        {block.items.map((item, itemIndex) => (
                          <li key={`${item.text}-${itemIndex}`}>
                            {renderLinkedText(
                              item.text,
                              item.linkLabel,
                              item.linkHref,
                            )}
                          </li>
                        ))}
                      </ul>
                    )}

                  {block.type === "ctaButton" &&
                    block.text &&
                    block.linkHref && (
                      <div className="flex justify-center">
                        <a
                          href={block.linkHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                          {block.text}
                        </a>
                      </div>
                    )}
                </React.Fragment>
              ))}
            </div>
          </section>
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
      <div className="bg-white">
        {/* <LandingHero {...page.hero} /> */}
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-14">
          {page.sections.map(renderSection)}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
