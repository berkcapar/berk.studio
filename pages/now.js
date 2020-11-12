import React from "react";
import ReactMarkdown from 'react-markdown';
import { format, formatDistanceToNow } from 'date-fns';
import Layout from "../components/Layout";

// bunu yukariya aldim cunku gercekte componentin kendisnden once bu kod calisiyor (sunucu tarafinda)
// mental modeli daha net kurarsin ;) 💋
export async function getStaticProps() {
  const siteData = await import(`../config.json`);
  const fs = require("fs");
  const matter = require('gray-matter');
  const markdownContent = fs.readFileSync(`${process.cwd()}/content/now.md`, "utf-8");
  const { data, content } = matter(markdownContent);

  /*
    data --> { slug, title, description, date }
    content --> ---'dan asagisi, yani asil markdown
  */

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

const Now = ({ content, data }) => (
  <div>
    <Layout />    
    <div className="nowcontent"> 
      {/* burada reactmarkdown'a pass eyledik */}
      <ReactMarkdown children={content} />
    </div>
    
    <div className="now-relative-date">
      {/* bu relative date yazdiriyor */}
      Last updated: {formatDistanceToNow(new Date(data.date), { addSuffix: true })}
    </div>
    <style jsx>{`
    .nowcontent{
      color: white;
      width: 80%;
      margin: 1rem auto;
    }
    .now-relative-date{
      color: white;
      width: 80%;
    }
    @media(min-width:675px){
      .nowcontent{
        width:50%;
      }
      .now-relative-date{
        width:50%;
        margin: 3rem auto;
      }
    }
`}</style>
  </div> 
);

export default Now; 