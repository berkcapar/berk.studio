import Console from "../components/Console";
import Seo from "../components/Seo";
import { THREADS } from "../data/threads";
import { PERSON, WEBSITE, graph, pageNode } from "../lib/schema";

const thread = THREADS.find((t) => t.id === "welcome");

const DESCRIPTION =
  "Berk Çapar (Berk Capar) is a senior product manager at Pactum AI in Berlin, building autonomous AI negotiation agents. Ten years in product across AI/ML, agents, AdTech, MarTech, procurement and B2B SaaS.";

export default function Home() {
  return (
    <>
      <Seo
        title="Berk Çapar · Senior AI Product Manager in Berlin"
        description={DESCRIPTION}
        path="/"
        jsonLd={graph(
          PERSON,
          WEBSITE,
          pageNode({
            path: "/",
            type: "ProfilePage",
            name: "Berk Çapar",
            description: DESCRIPTION,
          })
        )}
      />
      <Console thread="welcome" />
    </>
  );
}
