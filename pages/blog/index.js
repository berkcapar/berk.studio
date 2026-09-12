import Console from "../../components/Console";
import Seo from "../../components/Seo";
import { THREADS } from "../../data/threads";
import { getPosts } from "../../lib/posts";

const thread = THREADS.find((t) => t.id === "blog");

export function getStaticProps() {
  return { props: { posts: getPosts() } };
}

export default function BlogIndex({ posts }) {
  return (
    <>
      <Seo
        title={thread.seoTitle}
        description={thread.seoDescription}
        path="/blog"
      />
      <Console thread="blog" posts={posts} />
    </>
  );
}
