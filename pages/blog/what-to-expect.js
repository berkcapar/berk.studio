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
        .blogcontent{
          color: white;
          width: 70%;
          margin: 1rem auto;
        }
        @media(min-width:675px){
          .blogcontent{
              width: 50%;
          }
         
        }
      `}</style>
    </div>
  );
  export default what_to_expect