import Console from "../../components/Console";
import Seo from "../../components/Seo";
import { THREADS } from "../../data/threads";
import { getPosts } from "../../lib/posts";
import { SITE, PERSON, WEBSITE, graph, pageNode, breadcrumb } from "../../lib/schema";

const thread = THREADS.find((t) => t.id === "blog");

export function getStaticProps() {
  return { props: { posts: getPosts() } };
}

export default function BlogIndex({ posts }) {
  const blog = {
    "@type": "Blog",
    "@id": `${SITE}/blog#blog`,
    url: `${SITE}/blog`,
    name: "Berk Çapar on product management",
    description: thread.seoDescription,
    inLanguage: "en",
    author: { "@id": `${SITE}/#person` },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      "@id": `${SITE}/blog/${p.slug}#post`,
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      url: `${SITE}/blog/${p.slug}`,
      author: { "@id": `${SITE}/#person` },
    })),
  };

  return (
    <>
      <Seo
        title={thread.seoTitle}
        description={thread.seoDescription}
        path="/blog"
        jsonLd={graph(
          PERSON,
          WEBSITE,
          pageNode({
            path: "/blog",
            name: "Blog",
            description: thread.seoDescription,
          }),
          blog,
          breadcrumb([
            { name: "Berk Çapar", path: "/" },
            { name: "Blog", path: "/blog" },
          ])
        )}
      />
      <Console thread="blog" posts={posts} />
    </>
  );
}
