import React, { useEffect } from "react";
import { Title, Meta } from "react-head";

type Props = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  canonical?: string;
  ogType?: string;
};

export default function Seo({
  title,
  description,
  keywords,
  image,
  canonical,
  ogType = "website",
}: Props) {
  useEffect(() => {
    const href =
      canonical ||
      (typeof window !== "undefined" && window.location.href) ||
      "";
    if (!href) return;

    let link = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", href.split("#")[0]);

    return () => {
      // keep canonical in-place; do not remove on unmount to avoid flash
    };
  }, [canonical]);

  return (
    <>
      {title && <Title>{title}</Title>}
      {description && <Meta name="description" content={description} />}
      {keywords && <Meta name="keywords" content={keywords} />}
      {image && <Meta property="og:image" content={image} />}
      {title && <Meta property="og:title" content={title} />}
      {description && <Meta property="og:description" content={description} />}
      <Meta property="og:type" content={ogType} />
      <Meta
        name="twitter:card"
        content={image ? "summary_large_image" : "summary"}
      />
      <Meta name="robots" content="index,follow" />
    </>
  );
}
