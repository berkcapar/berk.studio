import Head from "next/head";
import { SITE } from "../lib/schema";

export { SITE };

const OG_IMAGE = `${SITE}/berk-og.png`;

/**
 * One place for the per-page tags. Every route in the console is a real URL,
 * so each needs its own title, description and canonical, otherwise they all
 * compete as the same page in search results.
 */
export default function Seo({
  title,
  description,
  path = "/",
  type = "website",
  jsonLd,
  publishedTime,
  noindex = false,
}) {
  const url = `${SITE}${path === "/" ? "/" : path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
      {/* For pages meant for one reader, sent by link. Blocking them in
          robots.txt would stop crawlers from ever seeing this tag. */}
      {noindex ? <meta name="robots" content="noindex" /> : null}

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Berk \u00c7apar" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content="Berk \u00c7apar, senior product manager at Pactum AI in Berlin" />

      {type === "article" && publishedTime ? (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:author" content="Berk \u00c7apar" />
        </>
      ) : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bcaparing" />
      <meta name="twitter:creator" content="@bcaparing" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content="Berk \u00c7apar, senior product manager at Pactum AI in Berlin" />

      <meta
        name="google-site-verification"
        content="p506aFByQlIFfJp7oSiaTgiPHk9Drj9MMj2I906eg9E"
      />

      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
    </Head>
  );
}
