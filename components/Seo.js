import Head from "next/head";

export const SITE = "https://berk.studio";

/**
 * One place for the per-page tags. Every route in the console is a real URL,
 * so each one needs its own title, description and canonical, otherwise they
 * all compete as the same page in search results.
 */
export default function Seo({ title, description, path = "/", type = "website", jsonLd }) {
  const url = `${SITE}${path === "/" ? "" : path}`;
  const image = `${SITE}/berk.jpg`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@bcaparing" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

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
