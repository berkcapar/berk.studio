import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";

export async function getStaticProps() {
    const siteData = await import(`../../config.json`);
    const fs = require("fs");
    const matter = require('gray-matter');
    const markdownContent = fs.readFileSync(
      `${process.cwd()}/content/blog/what-to-expect.md`,
      "utf-8"
    );
    const { data, content } = matter(markdownContent);
    return {
      // buradan dondurdugumuz props asagidaki component'e akiyor direk
      props: {
        data,
        content,
        title: siteData.default.title,
        description: siteData.default.description,
      },
    };
  }

  const what_to_expect = ({ content, data }) => ( 
    <div>
      <Layout />
      <div className="blogcontent">
        {/* burada reactmarkdown'a pass eyledik */}
        <ReactMarkdown children={content} />
   
      </div>
      <style jsx>{`
        .blogcontent {
          color: white;
          width: 70%;
          margin: 5rem auto;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
                       Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 
                       sans-serif; /* Consistent font family */
          font-size: 16px; /* Base font size */
          line-height: 1.6; /* Line height for readability */
        }

        .blogcontent :global(h1),
        .blogcontent :global(h2),
        .blogcontent :global(h3) {
          margin-bottom: 1rem;
          color: lightsalmon; /* Heading color */
        }

        .blogcontent :global(p) {
          margin-bottom: 1rem;
        }

        .blogcontent :global(ul) {
          padding-left: 20px;
          list-style-position: inside;
        }

        .blogcontent :global(li) {
          margin-bottom: 0.5rem;
        }

        @media(min-width:675px){
          .blogcontent{
             max-width: 1000px;
          }
         
        }
      `}</style>
    </div>
  );
  export default what_to_expect