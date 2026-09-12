import Console from "../components/Console";
import Seo from "../components/Seo";
import { THREADS } from "../data/threads";

/**
 * One route per thread, so the CV and the shipped work are separately
 * linkable and separately rankable instead of all living at "/".
 */
const ROUTED = THREADS.filter((t) => !t.hidden && t.path !== "/" && t.path !== "/blog");

export function getStaticPaths() {
  return {
    paths: ROUTED.map((t) => ({ params: { thread: t.path.slice(1) } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const thread = ROUTED.find((t) => t.path === `/${params.thread}`);
  return {
    props: {
      id: thread.id,
      title: thread.seoTitle,
      description: thread.seoDescription,
      path: thread.path,
    },
  };
}

export default function ThreadPage({ id, title, description, path }) {
  return (
    <>
      <Seo title={title} description={description} path={path} />
      <Console thread={id} />
    </>
  );
}
