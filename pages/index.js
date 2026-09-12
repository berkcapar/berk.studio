import Console from "../components/Console";
import Seo, { SITE } from "../components/Seo";
import { THREADS } from "../data/threads";

const thread = THREADS.find((t) => t.id === "welcome");

/** Tells search engines who this site is about, and links the profiles
 *  that confirm it. */
const PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Berk Çapar",
  alternateName: "Berk Capar",
  url: SITE,
  image: `${SITE}/berk.jpg`,
  jobTitle: "Senior Product Manager",
  email: "mailto:berkcapar@gmail.com",
  description: thread.seoDescription,
  worksFor: { "@type": "Organization", name: "Pactum AI", url: "https://pactum.com/" },
  address: { "@type": "PostalAddress", addressLocality: "Berlin", addressCountry: "DE" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "TOBB University of Economics and Technology",
  },
  knowsAbout: [
    "Product management",
    "Agentic AI",
    "LLM workflows",
    "B2B SaaS",
    "Procurement",
    "AdTech",
    "MarTech",
  ],
  sameAs: [
    "https://www.linkedin.com/in/berkcapar/",
    "https://github.com/berkcapar",
    "https://x.com/bcaparing",
  ],
};

export default function Home() {
  return (
    <>
      <Seo
        title={thread.seoTitle}
        description={thread.seoDescription}
        path="/"
        jsonLd={PERSON}
      />
      <Console thread="welcome" />
    </>
  );
}
