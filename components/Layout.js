const { default: Navigation } = require("./Navigation");
import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <script
          src="https://kit.fontawesome.com/c0e82ecf0e.js"
          crossOrigin="anonymous"
        ></script>
        <script async defer data-domain="berk.studio" src="https://plausible.io/js/plausible.js"></script>
        <title>Berk Çapar</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width= device-width"
        />
      </Head>

      <div className="container container-nav">
        <div className="header">
          <Header />
        </div>
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
            border-bottom: 0.01rem solid gray;
            display: flex;
            flex-direction: column;
          }
          .container-nav {
            display: flex;
            justify-content: space-between;
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
    </div>
  );
};
export default Layout;

