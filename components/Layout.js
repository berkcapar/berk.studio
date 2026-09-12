import Navigation from './Navigation';
import Head from "next/head";


const SITE = "https://berk.studio";

const Layout = ({ children, title, description, path }) => {
  // Every page used to ship the same bare "Berk Çapar" title and no
  // description, so search results had nothing to tell them apart.
  const pageTitle = title ? `${title} · Berk Çapar` : "Berk Çapar · Senior AI Product Manager";
  const desc =
    description ||
    "Product @ Pactum AI, based in Berlin. Ten years building B2B SaaS, AI agents, AdTech, MarTech and procurement products.";
  const url = path ? `${SITE}${path}` : SITE;

  return (
    <div className="layout">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={desc} />
        <meta
          name="viewport"
          content="initial-scale=1.0, width= device-width"
        />
        <link rel="canonical" href={url} />

        <meta property="og:type" content={path && path.startsWith("/blog/") ? "article" : "website"} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={`${SITE}/berk.jpg`} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@bcaparing" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={`${SITE}/berk.jpg`} />

        <meta
          name="google-site-verification"
          content="p506aFByQlIFfJp7oSiaTgiPHk9Drj9MMj2I906eg9E"
        />
      </Head>

      <div className="container container-nav">
        
        <div className="nav">
          <Navigation />
        </div>
      </div>
      <main>{children}</main>
      <style jsx>
        {`
          .container {
            margin: 0 auto;
            width: 90%;
            max-width: 1200px;
            color: white;
            display: flex;
            flex-direction: column;
          }
          .container-nav {
            display: flex;
            justify-content: space-between;
          }
          .header{
            text-align: center;
          }
          @media (min-width: 675px) {
            .container-nav {
              flex-direction: row;
              width: 50%;
              margin: 0 auto;
            }
            
          }
        `}
      </style>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
                       Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 
                       sans-serif;
         
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Layout;
