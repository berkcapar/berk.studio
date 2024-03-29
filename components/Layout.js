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
        
        <title>Berk Çapar</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width= device-width"
        />
        <meta
          name="google-site-verification"
          content="p506aFByQlIFfJp7oSiaTgiPHk9Drj9MMj2I906eg9E"
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
    </div>
  );
};
export default Layout;
