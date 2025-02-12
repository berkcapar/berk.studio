import Navigation from './Navigation';
import Head from "next/head";


const Layout = ({ children }) => {
  return (
    <div className="layout">
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
