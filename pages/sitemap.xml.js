import { THREADS } from "../data/threads";
import { getPosts } from "../lib/posts";

/** Built from the routes themselves, so a new thread or post never needs a
 *  second edit here. */
const SITE = "https://berk.studio";

function xml() {
  const threads = THREADS.filter((t) => !t.hidden).map((t) => ({
    path: t.path,
    priority: t.path === "/" ? "1.0" : "0.8",
    changefreq: "monthly",
  }));

  const posts = getPosts().map((p) => ({
    path: `/blog/${p.slug}`,
    priority: "0.6",
    lastmod: p.date,
  }));

  const urls = [...threads, ...posts]
    .map((p) => {
      const parts = [`    <loc>${SITE}${p.path === "/" ? "/" : p.path}</loc>`];
      if (p.lastmod) parts.push(`    <lastmod>${p.lastmod}</lastmod>`);
      if (p.changefreq) parts.push(`    <changefreq>${p.changefreq}</changefreq>`);
      parts.push(`    <priority>${p.priority}</priority>`);
      return `  <url>\n${parts.join("\n")}\n  </url>`;
    })
    .join("\n");

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
