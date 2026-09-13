import Link from "next/link";
import Seo from "../components/Seo";

/** The default Next error screen is a dead end with no way back in. */
export default function NotFound() {
  return (
    <div className="desk">
      <div className="shell notfound">
        <div className="nf-body">
          <p className="nf-code">404</p>
          <h1 className="nf-title">That page isn&rsquo;t here</h1>
          <p className="nf-text">
            It may have moved when the site was rebuilt. Everything lives in
            one of these:
          </p>
          <div className="nf-links">
            <Link href="/">Start here</Link>
            <Link href="/shipped">Shipped</Link>
            <Link href="/cv">CV</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
      </div>
      <Seo
        title="Page not found · Berk Çapar"
        description="That page isn't here. Berk Çapar is a senior product manager at Pactum AI in Berlin."
        path="/404"
      />
    </div>
  );
}
