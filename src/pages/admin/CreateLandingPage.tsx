import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {
  LandingPageCustomContentBlock,
  LandingPageCustomContentBlockType,
  LandingPageData,
  LandingPageCustomContentItem,
  LandingPageSection,
} from "../../pages/landing/content/types";

const LANDING_PAGES_API_URL = `${
  import.meta.env.VITE_API_BASE_URL
}/api/create-landing-page`;

type EditableSectionType =
  | "content"
  | "customContent"
  | "featureGrid"
  | "tips"
  | "internalLinks";

interface EditableSectionItem {
  title: string;
  description: string;
}

interface EditableLinkItem {
  label: string;
  href: string;
}

interface EditableCustomContentItem {
  text: string;
  linkLabel: string;
  linkHref: string;
}

interface EditableCustomContentBlock {
  id: string;
  type: LandingPageCustomContentBlockType;
  text: string;
  image: string;
  linkLabel: string;
  linkHref: string;
  items: EditableCustomContentItem[];
}

interface EditableSection {
  id: string;
  type: EditableSectionType;
  title: string;
  subtitle?: string;
  body?: string;
  image?: string;
  paragraphs?: EditableCustomContentItem[];
  bullets?: EditableCustomContentItem[];
  blocks?: EditableCustomContentBlock[];
  items?: EditableSectionItem[];
  links?: EditableLinkItem[];
}

interface FAQItem {
  question: string;
  answer: string;
}

const readStoredLandingPages = (): Record<string, LandingPageData> => {
  try {
    const stored = JSON.parse(localStorage.getItem("landingPages") || "{}");
    return stored && typeof stored === "object" && !Array.isArray(stored)
      ? stored
      : {};
  } catch (error) {
    console.warn("Unable to read stored landing pages:", error);
    return {};
  }
};

const fetchStoredLandingPages = async (): Promise<
  Record<string, LandingPageData>
> => {
  try {
    const response = await fetch(LANDING_PAGES_API_URL);
    if (!response.ok) {
      return readStoredLandingPages();
    }

    const pages = await response.json();
    return pages && typeof pages === "object" && !Array.isArray(pages)
      ? pages
      : {};
  } catch (error) {
    console.warn("Unable to fetch landing pages JSON:", error);
    return readStoredLandingPages();
  }
};

const titleCaseFromSlugPart = (value: string) =>
  value
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const slugify = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const toEditableCustomContentItems = (
  items?: LandingPageCustomContentItem[],
): EditableCustomContentItem[] =>
  items?.map((item) => ({
    text: item.text,
    linkLabel: item.linkLabel || "",
    linkHref: item.linkHref || "",
  })) || [{text: "", linkLabel: "", linkHref: ""}];

const createCustomContentBlock = (
  type: LandingPageCustomContentBlockType = "paragraph",
): EditableCustomContentBlock => ({
  id: `custom-block-${Date.now()}-${Math.random().toString(36).slice(2)}`,
  type,
  text: "",
  image: "",
  linkLabel: "",
  linkHref: "",
  items: [{text: "", linkLabel: "", linkHref: ""}],
});

const toEditableCustomContentBlocks = (
  section: Extract<LandingPageSection, {type: "customContent"}>,
): EditableCustomContentBlock[] => {
  if (section.blocks?.length) {
    return section.blocks.map((block) => ({
      id: block.id || `custom-block-${Date.now()}`,
      type: block.type,
      text: block.text || "",
      image: block.image || "",
      linkLabel: block.linkLabel || "",
      linkHref: block.linkHref || "",
      items: toEditableCustomContentItems(block.items),
    }));
  }

  const blocks: EditableCustomContentBlock[] = [];
  if (section.title) {
    blocks.push({...createCustomContentBlock("title"), text: section.title});
  }
  if (section.image) {
    blocks.push({...createCustomContentBlock("image"), image: section.image});
  }
  section.paragraphs?.forEach((paragraph) => {
    blocks.push({
      ...createCustomContentBlock("paragraph"),
      text: paragraph.text,
      linkLabel: paragraph.linkLabel || "",
      linkHref: paragraph.linkHref || "",
    });
  });
  if (section.bullets?.length) {
    blocks.push({
      ...createCustomContentBlock("list"),
      items: toEditableCustomContentItems(section.bullets),
    });
  }

  return blocks.length ? blocks : [createCustomContentBlock("paragraph")];
};

const CreateLandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [headline, setHeadline] = useState("");
  const [intro, setIntro] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [cta1Text, setCta1Text] = useState("Compare Rentals");
  const [cta1Link, setCta1Link] = useState("#");
  const [cta2Text, setCta2Text] = useState("Check Prices");
  const [cta2Link, setCta2Link] = useState("#");
  const [sections, setSections] = useState<EditableSection[]>([]);
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [finalCtaTitle, setFinalCtaTitle] = useState("");
  const [finalCtaSubtitle, setFinalCtaSubtitle] = useState("");
  const [finalCtaBtn1Text, setFinalCtaBtn1Text] = useState("Compare Rentals");
  const [finalCtaBtn1Link, setFinalCtaBtn1Link] = useState("/cars");
  const [finalCtaBtn2Text, setFinalCtaBtn2Text] = useState("Check Prices");
  const [finalCtaBtn2Link, setFinalCtaBtn2Link] = useState("#pricing");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [existingPages, setExistingPages] = useState<LandingPageData[]>([]);
  const [isLoadingExistingPages, setIsLoadingExistingPages] = useState(true);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetchStoredLandingPages()
      .then((pages) => {
        if (isMounted) {
          setExistingPages(Object.values(pages));
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoadingExistingPages(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const loadPageForEdit = (page: LandingPageData) => {
    setEditingSlug(page.slug);
    const [titleCategory, titleCity] = page.title.split(/\s+in\s+/i);
    const parts = page.slug.split("-");
    const fallbackCity = parts.pop() || "";
    const fallbackCategory = parts.join("-");
    setCity(titleCity || titleCaseFromSlugPart(fallbackCity));
    setCategory(
      titleCity ? titleCategory : titleCaseFromSlugPart(fallbackCategory),
    );
    setHeadline(page.hero.headline);
    setIntro(page.hero.subheadline);
    setSeoTitle(page.seoTitle);
    setSeoDescription(page.seoDescription);
    setCta1Text(page.hero.buttons[0]?.label || "");
    setCta1Link(page.hero.buttons[0]?.href || "");
    setCta2Text(page.hero.buttons[1]?.label || "");
    setCta2Link(page.hero.buttons[1]?.href || "");

    setSections(
      page.sections
        .filter(
          (
            s,
          ): s is Extract<
            LandingPageSection,
            {
              type:
                | "content"
                | "customContent"
                | "featureGrid"
                | "tips"
                | "internalLinks";
            }
          > => s.type !== "faq" && s.type !== "cta",
        )
        .map((s) => {
          switch (s.type) {
            case "content":
              return {
                id: s.id || `section-${Date.now()}`,
                type: "content",
                title: s.title || "",
                subtitle: s.subtitle || "",
                body: s.body?.join("\n") || "",
              };
            case "customContent":
              return {
                id: s.id || `section-${Date.now()}`,
                type: "customContent",
                title: s.title || "",
                subtitle: s.subtitle || "",
                image: s.image || "",
                paragraphs: toEditableCustomContentItems(s.paragraphs),
                bullets: toEditableCustomContentItems(s.bullets),
                blocks: toEditableCustomContentBlocks(s),
              };
            case "featureGrid":
            case "tips":
              return {
                id: s.id || `section-${Date.now()}`,
                type: s.type,
                title: s.title || "",
                subtitle: s.subtitle || "",
                items: s.items?.map((item) => ({
                  title: item.title,
                  description: item.description,
                })) || [
                  {title: "", description: ""},
                  {title: "", description: ""},
                ],
              };
            case "internalLinks":
              return {
                id: s.id || `section-${Date.now()}`,
                type: "internalLinks",
                title: s.title || "",
                links: s.links?.map((link) => ({
                  label: link.label,
                  href: link.href,
                })) || [{label: "", href: ""}],
              };
          }
        }),
    );
    const faqSection = page.sections.find(
      (s): s is Extract<LandingPageSection, {type: "faq"}> => s.type === "faq",
    );
    setFaqs(faqSection?.items || []);
    const ctaSection = page.sections.find((s) => s.type === "cta") as any;
    if (ctaSection) {
      setFinalCtaTitle(ctaSection.title || "");
      setFinalCtaSubtitle(ctaSection.subtitle || "");
      setFinalCtaBtn1Text(ctaSection.buttons?.[0]?.label || "");
      setFinalCtaBtn1Link(ctaSection.buttons?.[0]?.href || "");
      setFinalCtaBtn2Text(ctaSection.buttons?.[1]?.label || "");
      setFinalCtaBtn2Link(ctaSection.buttons?.[1]?.href || "");
    }
  };

  const resetForm = () => {
    setEditingSlug(null);
    setCity("");
    setCategory("");
    setHeadline("");
    setIntro("");
    setSeoTitle("");
    setSeoDescription("");
    setCta1Text("Compare Rentals");
    setCta1Link("#");
    setCta2Text("Check Prices");
    setCta2Link("#");
    setSections([]);
    setFaqs([]);
    setFinalCtaTitle("");
    setFinalCtaSubtitle("");
    setFinalCtaBtn1Text("Compare Rentals");
    setFinalCtaBtn1Link("/cars");
    setFinalCtaBtn2Text("Check Prices");
    setFinalCtaBtn2Link("#pricing");
  };

  const addSection = () => {
    setSections([
      ...sections,
      {
        id: `section-${Date.now()}`,
        type: "content",
        title: "",
        subtitle: "",
        body: "",
      },
    ]);
  };

  const updateSection = (
    index: number,
    field: keyof EditableSection,
    value: string,
  ) => {
    const newSections = [...sections];
    newSections[index] = {
      ...newSections[index],
      [field]: value,
    };
    setSections(newSections);
  };

  const handleCustomContentImageUpload = (
    sectionIndex: number,
    blockIndex: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setSuccessMessage("Please upload a valid image file.");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        updateCustomContentBlock(
          sectionIndex,
          blockIndex,
          "image",
          reader.result,
        );
      }
    };
    reader.onerror = () => {
      setSuccessMessage("Unable to upload image. Please try again.");
    };
    reader.readAsDataURL(file);
  };

  const updateSectionType = (index: number, type: EditableSectionType) => {
    const newSections = [...sections];
    newSections[index] = {
      ...newSections[index],
      type,
      body: type === "content" ? newSections[index].body || "" : undefined,
      image:
        type === "customContent" ? newSections[index].image || "" : undefined,
      paragraphs:
        type === "customContent"
          ? newSections[index].paragraphs || [
              {text: "", linkLabel: "", linkHref: ""},
            ]
          : undefined,
      bullets:
        type === "customContent"
          ? newSections[index].bullets || [
              {text: "", linkLabel: "", linkHref: ""},
            ]
          : undefined,
      blocks:
        type === "customContent"
          ? newSections[index].blocks || [createCustomContentBlock()]
          : undefined,
      items:
        type === "featureGrid" || type === "tips"
          ? newSections[index].items || [
              {title: "", description: ""},
              {title: "", description: ""},
              {title: "", description: ""},
            ]
          : undefined,
      links:
        type === "internalLinks"
          ? newSections[index].links || [{label: "", href: ""}]
          : undefined,
    };
    setSections(newSections);
  };

  const addCustomContentBlock = (sectionIndex: number) => {
    const newSections = [...sections];
    const section = newSections[sectionIndex];
    if (!section.blocks) section.blocks = [];
    section.blocks.push(createCustomContentBlock());
    setSections(newSections);
  };

  const updateCustomContentBlock = (
    sectionIndex: number,
    blockIndex: number,
    field: keyof EditableCustomContentBlock,
    value: string | LandingPageCustomContentBlockType,
  ) => {
    const newSections = [...sections];
    const block = newSections[sectionIndex].blocks?.[blockIndex];
    if (!block) return;
    newSections[sectionIndex].blocks![blockIndex] = {
      ...block,
      [field]: value,
    };
    setSections(newSections);
  };

  const moveCustomContentBlock = (
    sectionIndex: number,
    blockIndex: number,
    direction: -1 | 1,
  ) => {
    const newSections = [...sections];
    const blocks = newSections[sectionIndex].blocks;
    if (!blocks) return;

    const targetIndex = blockIndex + direction;
    if (targetIndex < 0 || targetIndex >= blocks.length) return;

    [blocks[blockIndex], blocks[targetIndex]] = [
      blocks[targetIndex],
      blocks[blockIndex],
    ];
    setSections(newSections);
  };

  const addCustomContentBlockItem = (
    sectionIndex: number,
    blockIndex: number,
  ) => {
    const newSections = [...sections];
    const block = newSections[sectionIndex].blocks?.[blockIndex];
    if (!block) return;
    block.items.push({text: "", linkLabel: "", linkHref: ""});
    setSections(newSections);
  };

  const updateCustomContentBlockItem = (
    sectionIndex: number,
    blockIndex: number,
    itemIndex: number,
    itemField: keyof EditableCustomContentItem,
    value: string,
  ) => {
    const newSections = [...sections];
    const item =
      newSections[sectionIndex].blocks?.[blockIndex]?.items[itemIndex];
    if (!item) return;
    newSections[sectionIndex].blocks![blockIndex].items[itemIndex] = {
      ...item,
      [itemField]: value,
    };
    setSections(newSections);
  };

  const removeCustomContentBlockItem = (
    sectionIndex: number,
    blockIndex: number,
    itemIndex: number,
  ) => {
    const newSections = [...sections];
    const block = newSections[sectionIndex].blocks?.[blockIndex];
    if (!block) return;
    block.items = block.items.filter((_, idx) => idx !== itemIndex);
    setSections(newSections);
  };

  const addCustomContentItem = (
    sectionIndex: number,
    field: "paragraphs" | "bullets",
  ) => {
    const newSections = [...sections];
    const section = newSections[sectionIndex];
    if (!section[field]) section[field] = [];
    section[field]!.push({text: "", linkLabel: "", linkHref: ""});
    setSections(newSections);
  };

  const updateCustomContentItem = (
    sectionIndex: number,
    field: "paragraphs" | "bullets",
    itemIndex: number,
    itemField: keyof EditableCustomContentItem,
    value: string,
  ) => {
    const newSections = [...sections];
    if (!newSections[sectionIndex][field]) return;
    newSections[sectionIndex][field]![itemIndex] = {
      ...newSections[sectionIndex][field]![itemIndex],
      [itemField]: value,
    };
    setSections(newSections);
  };

  const removeCustomContentItem = (
    sectionIndex: number,
    field: "paragraphs" | "bullets",
    itemIndex: number,
  ) => {
    const newSections = [...sections];
    if (!newSections[sectionIndex][field]) return;
    newSections[sectionIndex][field] = newSections[sectionIndex][field]!.filter(
      (_, idx) => idx !== itemIndex,
    );
    setSections(newSections);
  };

  const addSectionItem = (sectionIndex: number) => {
    const newSections = [...sections];
    const section = newSections[sectionIndex];
    if (!section.items) section.items = [];
    section.items.push({title: "", description: ""});
    setSections(newSections);
  };

  const updateSectionItem = (
    sectionIndex: number,
    itemIndex: number,
    field: keyof EditableSectionItem,
    value: string,
  ) => {
    const newSections = [...sections];
    if (!newSections[sectionIndex].items) return;
    newSections[sectionIndex].items![itemIndex] = {
      ...newSections[sectionIndex].items![itemIndex],
      [field]: value,
    };
    setSections(newSections);
  };

  const removeSectionItem = (sectionIndex: number, itemIndex: number) => {
    const newSections = [...sections];
    if (!newSections[sectionIndex].items) return;
    newSections[sectionIndex].items = newSections[sectionIndex].items!.filter(
      (_, idx) => idx !== itemIndex,
    );
    setSections(newSections);
  };

  const addSectionLink = (sectionIndex: number) => {
    const newSections = [...sections];
    const section = newSections[sectionIndex];
    if (!section.links) section.links = [];
    section.links.push({label: "", href: ""});
    setSections(newSections);
  };

  const updateSectionLink = (
    sectionIndex: number,
    linkIndex: number,
    field: keyof EditableLinkItem,
    value: string,
  ) => {
    const newSections = [...sections];
    if (!newSections[sectionIndex].links) return;
    newSections[sectionIndex].links![linkIndex] = {
      ...newSections[sectionIndex].links![linkIndex],
      [field]: value,
    };
    setSections(newSections);
  };

  const removeSectionLink = (sectionIndex: number, linkIndex: number) => {
    const newSections = [...sections];
    if (!newSections[sectionIndex].links) return;
    newSections[sectionIndex].links = newSections[sectionIndex].links!.filter(
      (_, idx) => idx !== linkIndex,
    );
    setSections(newSections);
  };

  const removeSection = (index: number) => {
    setSections(sections.filter((_, i) => i !== index));
  };

  const addFAQ = () => {
    setFaqs([...faqs, {question: "", answer: ""}]);
  };

  const updateFAQ = (index: number, field: keyof FAQItem, value: string) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  const removeFAQ = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const generateSlug = (cat: string) => slugify(cat);

  const deletePage = async (slug: string) => {
    if (
      confirm(`Are you sure you want to delete the landing page: /${slug}?`)
    ) {
      try {
        const response = await fetch(
          `${LANDING_PAGES_API_URL}?slug=${encodeURIComponent(slug)}`,
          {
            method: "DELETE",
          },
        );

        if (!response.ok) {
          throw new Error(await response.text());
        }
      } catch (error) {
        console.error("Unable to delete landing page:", error);
        setSuccessMessage("Unable to delete landing page. Please try again.");
        return;
      }

      const existing = readStoredLandingPages();
      delete existing[slug];
      localStorage.setItem("landingPages", JSON.stringify(existing));
      const pages = await fetchStoredLandingPages();
      setExistingPages(Object.values(pages));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const slug = generateSlug(category);
    const pageData: LandingPageData = {
      slug,
      title: `${category} in ${city}`,
      seoTitle: seoTitle || `${category} in ${city}`,
      seoDescription:
        seoDescription ||
        `Find the best ${category.toLowerCase()} in ${city}. Compare rentals and check prices.`,
      hero: {
        headline,
        subheadline: intro,
        buttons: [
          {label: cta1Text, href: cta1Link, style: "primary"},
          {label: cta2Text, href: cta2Link, style: "secondary"},
        ],
      },
      sections: [
        ...sections.map((sec) => {
          if (sec.type === "content") {
            return {
              id: sec.id,
              type: "content" as const,
              title: sec.title,
              subtitle: sec.subtitle,
              body: sec.body?.split("\n") || [],
            };
          }
          if (sec.type === "customContent") {
            const mapCustomItems = (items?: EditableCustomContentItem[]) =>
              items
                ?.filter(
                  (item) =>
                    item.text.trim() ||
                    item.linkLabel.trim() ||
                    item.linkHref.trim(),
                )
                .map((item) => ({
                  text: item.text,
                  linkLabel: item.linkLabel || undefined,
                  linkHref: item.linkHref || undefined,
                }));

            return {
              id: sec.id,
              type: "customContent" as const,
              blocks: sec.blocks
                ?.map((block) => ({
                  id: block.id,
                  type: block.type,
                  text: block.text || undefined,
                  image: block.image || undefined,
                  linkLabel: block.linkLabel || undefined,
                  linkHref: block.linkHref || undefined,
                  items:
                    block.type === "list"
                      ? mapCustomItems(block.items)
                      : undefined,
                }))
                .filter((block) => {
                  if (
                    block.type === "title" ||
                    block.type === "subtitle" ||
                    block.type === "paragraph"
                  ) {
                    return Boolean(
                      block.text || block.linkLabel || block.linkHref,
                    );
                  }
                  if (block.type === "image") {
                    return Boolean(block.image);
                  }
                  if (block.type === "ctaButton") {
                    return Boolean(block.text || block.linkHref);
                  }
                  return Boolean(block.items?.length);
                }),
            };
          }
          if (sec.type === "featureGrid" || sec.type === "tips") {
            return {
              id: sec.id,
              type: sec.type,
              title: sec.title,
              subtitle: sec.subtitle,
              items: sec.items?.map((item) => ({
                title: item.title,
                description: item.description,
              })),
            };
          }
          if (sec.type === "internalLinks") {
            return {
              id: sec.id,
              type: "internalLinks",
              title: sec.title,
              links: sec.links?.map((link) => ({
                label: link.label,
                href: link.href,
              })),
            };
          }
          return {
            id: sec.id,
            type: sec.type,
            title: sec.title,
            subtitle: sec.subtitle,
          };
        }),
        ...(faqs.length > 0
          ? [
              {
                id: "faq",
                type: "faq" as const,
                title: "Frequently Asked Questions",
                items: faqs,
              },
            ]
          : []),
        ...(finalCtaTitle
          ? [
              {
                id: "final-cta",
                type: "cta" as const,
                title: finalCtaTitle,
                subtitle: finalCtaSubtitle,
                buttons: [
                  {
                    label: finalCtaBtn1Text,
                    href: finalCtaBtn1Link,
                    style: "primary" as const,
                  },
                  {
                    label: finalCtaBtn2Text,
                    href: finalCtaBtn2Link,
                    style: "secondary" as const,
                  },
                ],
              },
            ]
          : []),
      ] as LandingPageSection[],
    };

    try {
      const response = await fetch(LANDING_PAGES_API_URL, {
        method: editingSlug ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({slug, previousSlug: editingSlug, data: pageData}),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }
    } catch (error) {
      console.error("Unable to save landing page:", error);
      setSuccessMessage("Unable to save landing page. Please try again.");
      return;
    }

    // Save to localStorage for immediate display and development preview
    const existing = readStoredLandingPages();
    if (editingSlug && editingSlug !== slug) {
      delete existing[editingSlug];
    }
    existing[slug] = pageData;
    localStorage.setItem("landingPages", JSON.stringify(existing));

    setExistingPages(Object.values(existing));
    setSuccessMessage(
      `${editingSlug ? "Updated" : "Created"} landing page successfully!`,
    );
    if (!editingSlug) {
      window.open(`/${slug}`, "_blank");
    }
    resetForm();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create/Edit Landing Page</h1>

      {successMessage && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          {successMessage}
          <button
            onClick={() => setSuccessMessage(null)}
            className="ml-4 text-green-700 hover:text-green-900">
            ×
          </button>
        </div>
      )}

      {/* Recent Pages */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Recent Landing Pages</h2>
        {isLoadingExistingPages ? (
          <div className="flex items-center gap-3 rounded border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-blue-600" />
            Loading recent landing pages...
          </div>
        ) : existingPages.length === 0 ? (
          <p>No pages created yet.</p>
        ) : (
          <ul className="space-y-2">
            {existingPages.map((page) => (
              <li
                key={page.slug}
                className="flex items-center justify-between border p-2 rounded">
                <a
                  href={`/${page.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500">
                  /{page.slug}
                </a>
                <div className="flex gap-2">
                  <button
                    onClick={() => loadPageForEdit(page)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded">
                    Edit
                  </button>
                  <button
                    onClick={() => deletePage(page.slug)}
                    className="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form fields remain the same */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Headline</label>
          <input
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Subheadline (Intro)
          </label>
          <textarea
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            rows={3}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">SEO Title</label>
          <input
            type="text"
            value={seoTitle}
            onChange={(e) => setSeoTitle(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            SEO Description
          </label>
          <textarea
            value={seoDescription}
            onChange={(e) => setSeoDescription(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            rows={2}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">CTA 1 Text</label>
            <input
              type="text"
              value={cta1Text}
              onChange={(e) => setCta1Text(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">CTA 1 Link</label>
            <input
              type="text"
              value={cta1Link}
              onChange={(e) => setCta1Link(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">CTA 2 Text</label>
            <input
              type="text"
              value={cta2Text}
              onChange={(e) => setCta2Text(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">CTA 2 Link</label>
            <input
              type="text"
              value={cta2Link}
              onChange={(e) => setCta2Link(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Sections</label>
          {sections.map((sec, idx) => (
            <div key={sec.id} className="border p-4 mb-4 rounded">
              <div className="grid grid-cols-3 gap-4 mb-2">
                <label className="block">
                  <span className="text-sm text-slate-600">Type</span>
                  <select
                    value={sec.type}
                    onChange={(e) =>
                      updateSectionType(
                        idx,
                        e.target.value as EditableSectionType,
                      )
                    }
                    className="w-full border px-3 py-2 rounded mt-1">
                    <option value="content">Content</option>
                    <option value="customContent">Custom Content</option>
                    <option value="featureGrid">Pricing / Info Blocks</option>
                    <option value="tips">Tips</option>
                    <option value="internalLinks">Quick Links</option>
                  </select>
                </label>
                {sec.type !== "customContent" && (
                  <>
                    <label className="block">
                      <span className="text-sm text-slate-600">Title</span>
                      <input
                        type="text"
                        placeholder="Section title"
                        value={sec.title}
                        onChange={(e) =>
                          updateSection(idx, "title", e.target.value)
                        }
                        className="w-full border px-3 py-2 rounded mt-1"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm text-slate-600">Subtitle</span>
                      <input
                        type="text"
                        placeholder="Section subtitle"
                        value={sec.subtitle || ""}
                        onChange={(e) =>
                          updateSection(idx, "subtitle", e.target.value)
                        }
                        className="w-full border px-3 py-2 rounded mt-1"
                      />
                    </label>
                  </>
                )}
              </div>

              {sec.type === "content" && (
                <textarea
                  placeholder="Section body"
                  value={sec.body || ""}
                  onChange={(e) => updateSection(idx, "body", e.target.value)}
                  className="w-full border px-3 py-2 rounded mb-2"
                  rows={4}
                />
              )}

              {sec.type === "customContent" && (
                <div className="space-y-5 mb-2">
                  <div className="text-sm font-medium text-slate-700">
                    Custom Content Blocks
                  </div>
                  {(sec.blocks || []).map((block, blockIdx) => (
                    <div
                      key={block.id}
                      className="space-y-3 rounded border border-slate-200 p-3">
                      <label className="block">
                        <span className="text-sm text-slate-600">
                          Block Type
                        </span>
                        <select
                          value={block.type}
                          onChange={(e) =>
                            updateCustomContentBlock(
                              idx,
                              blockIdx,
                              "type",
                              e.target
                                .value as LandingPageCustomContentBlockType,
                            )
                          }
                          className="w-full border px-3 py-2 rounded mt-1">
                          <option value="title">Title</option>
                          <option value="subtitle">Sub Title</option>
                          <option value="paragraph">Paragraph</option>
                          <option value="image">Image</option>
                          <option value="list">List</option>
                          <option value="ctaButton">CTA Button</option>
                        </select>
                      </label>

                      {block.type === "title" && (
                        <input
                          type="text"
                          placeholder="Title text"
                          value={block.text}
                          onChange={(e) =>
                            updateCustomContentBlock(
                              idx,
                              blockIdx,
                              "text",
                              e.target.value,
                            )
                          }
                          className="w-full border px-3 py-2 rounded"
                        />
                      )}

                      {block.type === "subtitle" && (
                        <input
                          type="text"
                          placeholder="Sub title text"
                          value={block.text}
                          onChange={(e) =>
                            updateCustomContentBlock(
                              idx,
                              blockIdx,
                              "text",
                              e.target.value,
                            )
                          }
                          className="w-full border px-3 py-2 rounded"
                        />
                      )}

                      {block.type === "paragraph" && (
                        <div className="space-y-3">
                          <textarea
                            placeholder="Paragraph text"
                            value={block.text}
                            onChange={(e) =>
                              updateCustomContentBlock(
                                idx,
                                blockIdx,
                                "text",
                                e.target.value,
                              )
                            }
                            className="w-full border px-3 py-2 rounded"
                            rows={3}
                          />
                          <div className="grid grid-cols-2 gap-3">
                            <input
                              type="text"
                              placeholder="Optional link label"
                              value={block.linkLabel}
                              onChange={(e) =>
                                updateCustomContentBlock(
                                  idx,
                                  blockIdx,
                                  "linkLabel",
                                  e.target.value,
                                )
                              }
                              className="border px-3 py-2 rounded"
                            />
                            <input
                              type="text"
                              placeholder="Optional link URL"
                              value={block.linkHref}
                              onChange={(e) =>
                                updateCustomContentBlock(
                                  idx,
                                  blockIdx,
                                  "linkHref",
                                  e.target.value,
                                )
                              }
                              className="border px-3 py-2 rounded"
                            />
                          </div>
                        </div>
                      )}

                      {block.type === "image" && (
                        <div className="space-y-3">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              handleCustomContentImageUpload(idx, blockIdx, e)
                            }
                            className="w-full border px-3 py-2 rounded"
                          />
                          {block.image && (
                            <div className="rounded border border-slate-200 p-3 text-center">
                              <img
                                src={block.image}
                                alt="Uploaded custom content preview"
                                className="mx-auto h-40 w-full max-w-md rounded object-cover"
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  updateCustomContentBlock(
                                    idx,
                                    blockIdx,
                                    "image",
                                    "",
                                  )
                                }
                                className="mt-3 text-red-500">
                                Remove Image
                              </button>
                            </div>
                          )}
                        </div>
                      )}

                      {block.type === "list" && (
                        <div className="space-y-3">
                          {block.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="grid gap-3">
                              <input
                                type="text"
                                placeholder="Bullet text"
                                value={item.text}
                                onChange={(e) =>
                                  updateCustomContentBlockItem(
                                    idx,
                                    blockIdx,
                                    itemIdx,
                                    "text",
                                    e.target.value,
                                  )
                                }
                                className="border px-3 py-2 rounded"
                              />
                              <div className="grid grid-cols-2 gap-3">
                                <input
                                  type="text"
                                  placeholder="Optional link label"
                                  value={item.linkLabel}
                                  onChange={(e) =>
                                    updateCustomContentBlockItem(
                                      idx,
                                      blockIdx,
                                      itemIdx,
                                      "linkLabel",
                                      e.target.value,
                                    )
                                  }
                                  className="border px-3 py-2 rounded"
                                />
                                <input
                                  type="text"
                                  placeholder="Optional link URL"
                                  value={item.linkHref}
                                  onChange={(e) =>
                                    updateCustomContentBlockItem(
                                      idx,
                                      blockIdx,
                                      itemIdx,
                                      "linkHref",
                                      e.target.value,
                                    )
                                  }
                                  className="border px-3 py-2 rounded"
                                />
                              </div>
                              <button
                                type="button"
                                onClick={() =>
                                  removeCustomContentBlockItem(
                                    idx,
                                    blockIdx,
                                    itemIdx,
                                  )
                                }
                                className="justify-self-start text-red-500">
                                Remove Bullet
                              </button>
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() =>
                              addCustomContentBlockItem(idx, blockIdx)
                            }
                            className="bg-blue-500 text-white px-3 py-2 rounded">
                            Add Bullet
                          </button>
                        </div>
                      )}

                      {block.type === "ctaButton" && (
                        <div className="grid grid-cols-2 gap-3">
                          <input
                            type="text"
                            placeholder="Button text"
                            value={block.text}
                            onChange={(e) =>
                              updateCustomContentBlock(
                                idx,
                                blockIdx,
                                "text",
                                e.target.value,
                              )
                            }
                            className="border px-3 py-2 rounded"
                          />
                          <input
                            type="text"
                            placeholder="Button URL"
                            value={block.linkHref}
                            onChange={(e) =>
                              updateCustomContentBlock(
                                idx,
                                blockIdx,
                                "linkHref",
                                e.target.value,
                              )
                            }
                            className="border px-3 py-2 rounded"
                          />
                        </div>
                      )}

                      <div className="flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            moveCustomContentBlock(idx, blockIdx, -1)
                          }
                          disabled={blockIdx === 0}
                          className="text-slate-600 disabled:text-slate-300">
                          Move Up
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addCustomContentBlock(idx)}
                    className="bg-blue-500 text-white px-3 py-2 rounded">
                    Add Content Block
                  </button>
                </div>
              )}

              {(sec.type === "featureGrid" || sec.type === "tips") && (
                <div className="space-y-3 mb-2">
                  <div className="text-sm font-medium text-slate-700">
                    {sec.type === "featureGrid"
                      ? "Pricing / Info items"
                      : "Tip items"}
                  </div>
                  {(sec.items || []).map((item, itemIdx) => (
                    <div key={itemIdx} className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Item title"
                        value={item.title}
                        onChange={(e) =>
                          updateSectionItem(
                            idx,
                            itemIdx,
                            "title",
                            e.target.value,
                          )
                        }
                        className="border px-3 py-2 rounded"
                      />
                      <input
                        type="text"
                        placeholder="Item description"
                        value={item.description}
                        onChange={(e) =>
                          updateSectionItem(
                            idx,
                            itemIdx,
                            "description",
                            e.target.value,
                          )
                        }
                        className="border px-3 py-2 rounded"
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addSectionItem(idx)}
                    className="bg-blue-500 text-white px-3 py-2 rounded">
                    Add Item
                  </button>
                </div>
              )}

              {sec.type === "internalLinks" && (
                <div className="space-y-3 mb-2">
                  <div className="text-sm font-medium text-slate-700">
                    Quick Links
                  </div>
                  {(sec.links || []).map((link, linkIdx) => (
                    <div key={linkIdx} className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Link label"
                        value={link.label}
                        onChange={(e) =>
                          updateSectionLink(
                            idx,
                            linkIdx,
                            "label",
                            e.target.value,
                          )
                        }
                        className="border px-3 py-2 rounded"
                      />
                      <input
                        type="text"
                        placeholder="Link href"
                        value={link.href}
                        onChange={(e) =>
                          updateSectionLink(
                            idx,
                            linkIdx,
                            "href",
                            e.target.value,
                          )
                        }
                        className="border px-3 py-2 rounded"
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addSectionLink(idx)}
                    className="bg-blue-500 text-white px-3 py-2 rounded">
                    Add Link
                  </button>
                </div>
              )}

              <button
                type="button"
                onClick={() => removeSection(idx)}
                className="text-red-500">
                Remove Section
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addSection}
            className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Section
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">FAQ</label>
          {faqs.map((faq, idx) => (
            <div key={idx} className="border p-4 mb-4 rounded">
              <input
                type="text"
                placeholder="Question"
                value={faq.question}
                onChange={(e) => updateFAQ(idx, "question", e.target.value)}
                className="w-full border px-3 py-2 rounded mb-2"
              />
              <textarea
                placeholder="Answer"
                value={faq.answer}
                onChange={(e) => updateFAQ(idx, "answer", e.target.value)}
                className="w-full border px-3 py-2 rounded mb-2"
                rows={2}
              />
              <button
                type="button"
                onClick={() => removeFAQ(idx)}
                className="text-red-500">
                Remove FAQ
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addFAQ}
            className="bg-blue-500 text-white px-4 py-2 rounded">
            Add FAQ
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Final CTA Section
          </label>
          <div className="border p-4 rounded">
            <input
              type="text"
              placeholder="CTA Title"
              value={finalCtaTitle}
              onChange={(e) => setFinalCtaTitle(e.target.value)}
              className="w-full border px-3 py-2 rounded mb-2"
            />
            <textarea
              placeholder="CTA Subtitle"
              value={finalCtaSubtitle}
              onChange={(e) => setFinalCtaSubtitle(e.target.value)}
              className="w-full border px-3 py-2 rounded mb-2"
              rows={2}
            />
            <div className="grid grid-cols-2 gap-4 mb-2">
              <input
                type="text"
                placeholder="Button 1 Text"
                value={finalCtaBtn1Text}
                onChange={(e) => setFinalCtaBtn1Text(e.target.value)}
                className="border px-3 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Button 1 Link"
                value={finalCtaBtn1Link}
                onChange={(e) => setFinalCtaBtn1Link(e.target.value)}
                className="border px-3 py-2 rounded"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Button 2 Text"
                value={finalCtaBtn2Text}
                onChange={(e) => setFinalCtaBtn2Text(e.target.value)}
                className="border px-3 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Button 2 Link"
                value={finalCtaBtn2Link}
                onChange={(e) => setFinalCtaBtn2Link(e.target.value)}
                className="border px-3 py-2 rounded"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded">
            {editingSlug ? "Update" : "Generate"} Landing Page
          </button>
          {editingSlug && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-500 text-white px-6 py-3 rounded">
              Cancel Edit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateLandingPage;
