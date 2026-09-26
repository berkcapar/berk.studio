import Console from "../components/Console";
import Seo from "../components/Seo";

/**
 * The general video cover letter, sent by link with referral requests. It
 * opens inside the console so whoever watches it can go straight on to
 * Shipped, CV and Blog from the rail. Kept out of search.
 */
export default function CoverLetter() {
  return (
    <>
      <Seo
        title="Cover letter · Berk Çapar"
        description="A video cover letter from Berk Çapar, senior product manager at Pactum AI in Berlin."
        path="/cover-letter"
        noindex
      />
      <Console thread="cover-letter" />
    </>
  );
}
