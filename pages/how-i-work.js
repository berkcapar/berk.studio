import Console from "../components/Console";
import Seo from "../components/Seo";
import Fireworks from "../components/Fireworks";

/**
 * A short video on how I work, sent by link with referral requests. It
 * opens inside the console so whoever watches it can go straight on to
 * Shipped, CV and Blog from the rail. Kept out of search.
 */
export default function HowIWork() {
  return (
    <>
      <Seo
        title="How I work · Berk Çapar"
        description="A couple of minutes on how Berk Çapar approaches product work. Senior product manager in Berlin."
        path="/how-i-work"
        noindex
      />
      <Console thread="how-i-work" />
      <Fireworks id="how-i-work" />
    </>
  );
}
