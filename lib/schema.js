export const SITE = "https://berk.studio";

/**
 * One Person node, given a stable @id so every page refers to the same
 * entity instead of asserting four unrelated ones. sameAs is the evidence
 * that ties this site to the profiles a search engine already trusts.
 */
export const PERSON_ID = `${SITE}/#person`;

export const PERSON = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Berk \u00c7apar",
  alternateName: ["Berk Capar", "Berk Capar Pactum"],
  givenName: "Berk",
  familyName: "\u00c7apar",
  url: SITE,
  mainEntityOfPage: `${SITE}/`,
  image: {
    "@type": "ImageObject",
    url: `${SITE}/berk-og.png`,
    width: 1200,
    height: 630,
  },
  jobTitle: "Senior Product Manager",
  email: "berkcapar@gmail.com",
  description:
    "Berk \u00c7apar is a senior product manager at Pactum AI in Berlin, where he owns the Supplier Engagement Platform, the company's highest-ARR product. He has about ten years in product across AI and ML, autonomous agents, AdTech, MarTech, procurement and B2B SaaS, and founded and exited the AI marketing startup StuntAI.",
  homeLocation: {
    "@type": "Place",
    name: "Berlin, Germany",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Berlin",
    addressRegion: "Berlin",
    addressCountry: "DE",
  },
  worksFor: {
    "@type": "Organization",
    name: "Pactum AI",
    url: "https://pactum.com/",
    sameAs: "https://www.linkedin.com/company/pactum/",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "TOBB University of Economics and Technology",
    url: "https://www.etu.edu.tr/en",
  },
  knowsAbout: [
    "Product management",
    "Agentic AI",
    "LLM workflows",
    "AI guardrails",
    "Enterprise procurement",
    "B2B SaaS",
    "AdTech",
    "MarTech",
    "Product analytics and experimentation",
  ],
  sameAs: [
    "https://www.linkedin.com/in/berkcapar/",
    "https://github.com/berkcapar",
    "https://x.com/bcaparing",
  ],
};

export const WEBSITE = {
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: SITE,
  name: "Berk \u00c7apar",
  inLanguage: "en",
  publisher: { "@id": PERSON_ID },
};

/** Wraps nodes into one @graph so a page emits a single connected block. */
export function graph(...nodes) {
  return { "@context": "https://schema.org", "@graph": nodes.filter(Boolean) };
}

export function pageNode({ path, type = "WebPage", name, description }) {
  const url = `${SITE}${path === "/" ? "/" : path}`;
  return {
    "@type": type,
    "@id": `${url}#page`,
    url,
    name,
    description,
    inLanguage: "en",
    isPartOf: { "@id": `${SITE}/#website` },
    about: { "@id": PERSON_ID },
    ...(type === "ProfilePage" ? { mainEntity: { "@id": PERSON_ID } } : {}),
  };
}

export function breadcrumb(trail) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE}${t.path === "/" ? "/" : t.path}`,
    })),
  };
}
