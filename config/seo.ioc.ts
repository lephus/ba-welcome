/**
 * SEO IOC (Index of Content) – single source of truth for metadata and SEO.
 * Consumed by app/layout and optionally by generateMetadata in pages.
 */


export const SEO_IOC = {
  title: "BAWS - Business Analysis Workspace",
  titleShort: "BAWS",
  description:
    "Business Analysis Workspace – AI-powered requirements, stakeholder analysis, and BABOK-aligned documentation.",
  keywords: [
    "business analysis",
    "requirements",
    "BABOK",
    "stakeholder analysis",
    "AI agents",
    "RAG",
    "BAWS",
    "BAWS Team",
    "Agents",
    "Agentic",
    "AI-powered",
    "AI-powered analysis",
    "AI-powered documentation",
    "AI-powered knowledge graph",
    "AI-powered traceability",
    "AI-powered compliance",
    "AI-powered validation",
    "AI-powered analysis",
    "AI-powered documentation",
    "documentation",
    "knowledge graph",
    "traceability",
    "compliance",
    "validation",
    "analysis",
    "documentation",
    "knowledge graph",
    "traceability",
    "compliance",
    "validation",
    "analysis",
    "documentation",
    "knowledge graph",
    "traceability",
    "compliance",
    "validation",
    "analysis",
    "documentation",
  ],
  url: 'https://businessanalysis.io',
  openGraph: {
    type: "website" as const,
    locale: "en_US",
    siteName: "BAWS - Business Analysis Workspace",
    image: "/public/og-image.png",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: "BAWS - Business Analysis Workspace",
  },
  twitter: {
    card: "summary_large_image" as const,
    site: undefined as string | undefined,
    creator: undefined as string | undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: undefined as string | undefined,
    yandex: undefined as string | undefined,
  },
  authors: [{ name: "BAWS Team", url: 'https://businessanalysis.io' }],
  creator: "BAWS Team",
  publisher: "BAWS Team",
  applicationName: "BAWS - Business Analysis Workspace",
  titleTemplate: "%s | BAWS",
} as const;

export type SeoIoc = typeof SEO_IOC;

export const metadataBase = new URL(SEO_IOC.url);

export function buildMetadata(overrides?: {
  title?: string;
  description?: string;
  openGraph?: Partial<typeof SEO_IOC.openGraph> & { image?: string };
  twitter?: Partial<typeof SEO_IOC.twitter>;
  robots?: Partial<typeof SEO_IOC.robots>;
  noIndex?: boolean;
}): import("next").Metadata {
  const title = overrides?.title ?? SEO_IOC.title;
  const description = overrides?.description ?? SEO_IOC.description;
  const ogImage = overrides?.openGraph?.image ?? SEO_IOC.openGraph.image;
  const imageUrl =
    ogImage.startsWith("http") || ogImage.startsWith("//")
      ? ogImage
      : `${SEO_IOC.url}${ogImage.startsWith("/") ? "" : "/"}${ogImage}`;

  return {
    metadataBase,
    icons: {
      icon: "/favicon.ico",
    },
    title: {
      default: title,
      template: SEO_IOC.titleTemplate,
    },
    description,
    keywords: [...SEO_IOC.keywords],
    authors: SEO_IOC.authors.map((a) => ({ name: a.name, url: a.url })),
    creator: SEO_IOC.creator,
    publisher: SEO_IOC.publisher,
    applicationName: SEO_IOC.applicationName,
    openGraph: {
      type: SEO_IOC.openGraph.type,
      locale: SEO_IOC.openGraph.locale,
      url: SEO_IOC.url,
      siteName: SEO_IOC.openGraph.siteName,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: SEO_IOC.openGraph.imageWidth,
          height: SEO_IOC.openGraph.imageHeight,
          alt: SEO_IOC.openGraph.imageAlt,
        },
      ],
    },
    twitter: {
      card: SEO_IOC.twitter.card,
      site: SEO_IOC.twitter.site,
      creator: SEO_IOC.twitter.creator,
      title,
      description,
      images: [imageUrl],
      ...overrides?.twitter,
    },
    robots:
      overrides?.noIndex === true
        ? { index: false, follow: false }
        : { ...SEO_IOC.robots, ...overrides?.robots },
    verification: {
      google: SEO_IOC.verification.google,
      yandex: SEO_IOC.verification.yandex,
    },
  };
}
