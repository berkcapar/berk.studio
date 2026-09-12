/**
 * Generated at request time so a new page never needs a second edit here.
 * Orphan pages (/who, /now, /contact) are left out: nothing links to them
 * and they duplicate what the homepage already says.
 */
const SITE = "https://berk.studio";

const PAGES = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/blog", priority: "0.7", changefreq: "monthly" },
  { path: "/blog/okrs-when-to-embrace-when-to-avoid", priority: "0.6", lastmod: "2023-06-19" },
  { path: "/blog/defining-success-as-product-manager", priority: "0.6", lastmod: "2022-05-09" },
  { path: "/blog/what-to-expect", priority: "0.5", lastmod: "2022-05-01" },
];

function xml() {
  const urls = PAGES.map((p) => {
    const parts = [`    <loc>${SITE}${p.path}</loc>`];
    if (p.lastmod) parts.push(`    <lastmod>${p.lastmod}</lastmod>`);
    if (p.changefreq) parts.push(`    <changefreq>${p.changefreq}</changefreq>`);
    parts.push(`    <priority>${p.priority}</priority>`);
    return `  <url>\n${parts.join("\n")}\n  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=86400");
  res.write(xml());
  res.end();
  return { props: {} };
}

export default function Sitemap() {
  return null;
}
