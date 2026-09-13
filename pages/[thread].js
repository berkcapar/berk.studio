import Console from "../components/Console";
import Seo from "../components/Seo";
import { THREADS } from "../data/threads";
import { PERSON, WEBSITE, graph, pageNode, breadcrumb } from "../lib/schema";

/**
 * One route per thread, so the CV and the shipped work are separately
 * linkable and separately rankable instead of all living at "/".
 */
const ROUTED = THREADS.filter(
  (t) => !t.hidden && t.path !== "/" && t.path !== "/blog"
);

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
      name: thread.title,
    },
  };
}

export default function ThreadPage({ id, title, description, path, name }) {
  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        jsonLd={graph(
          PERSON,
          WEBSITE,
          pageNode({
            path,
            // /cv is a page about the person; /shipped is a page of work.
            type: id === "cv" ? "ProfilePage" : "WebPage",
            name,
            description,
          }),
          breadcrumb([
            { name: "Berk Çapar", path: "/" },
            { name, path },
          ])
        )}
      />
      <Console thread={id} />
    </>
  );
}
