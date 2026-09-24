import Console from "../components/Console";
import Seo from "../components/Seo";

/**
 * A video cover letter for one application. It opens inside the console so
 * whoever watches it can go straight on to Shipped, CV and Blog from the
 * rail. Kept out of search: it is written for one reader and sent by link.
 */
export default function LinearCoverLetter() {
  return (
    <>
      <Seo
        title="For Linear · Berk Çapar"
        description="A video cover letter from Berk Çapar, senior product manager at Pactum AI in Berlin."
        path="/linear-cover-letter-video"
        noindex
      />
      <Console thread="linear" />
    </>
  );
}
