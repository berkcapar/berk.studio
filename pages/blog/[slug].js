import Console from "../../components/Console";
import Seo from "../../components/Seo";
import { getPost, getPosts } from "../../lib/posts";
import { SITE, PERSON, WEBSITE, graph, breadcrumb } from "../../lib/schema";

/**
 * A post opens inside the console, as the next turn of the Blog thread:
 * the title is the question, the essay is the answer. It keeps its own URL,
 * so the writing stays linkable and indexable on its own.
 */
export function getStaticPaths() {
  return {
    paths: getPosts().map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return { props: { post: getPost(params.slug), posts: getPosts() } };
}

export default function BlogPost({ post, posts }) {
  const url = `${SITE}/blog/${post.slug}`;
  const posting = {
    "@type": "BlogPosting",
    "@id": `${url}#post`,
    mainEntityOfPage: url,
    url,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en",
    image: `${SITE}/berk-og.png`,
    author: { "@id": `${SITE}/#person` },
    publisher: { "@id": `${SITE}/#person` },
    isPartOf: { "@id": `${SITE}/blog#blog` },
  };

  return (
    <>
      <Seo
        title={`${post.title} · Berk Çapar`}
        description={post.description}
        path={`/blog/${post.slug}`}
        type="article"
        publishedTime={post.date}
        jsonLd={graph(
          PERSON,
          WEBSITE,
          posting,
          breadcrumb([
            { name: "Berk Çapar", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ])
        )}
      />
      <Console
        thread="blog"
        posts={posts}
        appended={[{ q: post.title, md: post.body, slug: post.slug }]}
      />
    </>
  );
}
