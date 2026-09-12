import Head from "next/head";
import Console from "../components/Console";

const TITLE = "Berk Çapar — Senior AI Product Manager";
const DESCRIPTION =
  "Product @ Pactum AI, based in Berlin. Ten years building B2B SaaS, AI agents, AdTech, MarTech and procurement products.";
const URL = "https://berk.studio";

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={`${URL}/berk.jpg`} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@bcaparing" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`${URL}/berk.jpg`} />

        <meta
          name="google-site-verification"
          content="p506aFByQlIFfJp7oSiaTgiPHk9Drj9MMj2I906eg9E"
        />
      </Head>
      <Console />
    </>
  );
}
