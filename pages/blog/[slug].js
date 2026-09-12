import Console from "../../components/Console";
import Seo, { SITE } from "../../components/Seo";
import { getPost, getPosts } from "../../lib/posts";

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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `${SITE}/blog/${post.slug}`,
    author: { "@type": "Person", name: "Berk Çapar", url: SITE },
  };

  return (
    <>
      <Seo
        title={`${post.title} · Berk Çapar`}
        description={post.description}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={jsonLd}
      />
      <Console
        thread="blog"
        posts={posts}
        appended={[{ q: post.title, md: post.body, slug: post.slug }]}
      />
    </>
  );
}
