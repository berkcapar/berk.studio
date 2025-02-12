import Link from 'next/link'
import slug from 'slug'

const PostDescCard = ({postdesc}) => {
    return (
        <div>
        <Link href="/blog[title]" as={`blog/${(slug(postdesc.title))}`} legacyBehavior> 
        <div className="postdesccard">
            <h2>{postdesc.title}</h2>
            <p>{postdesc.description}</p>
            <p>{postdesc.date}</p>
        </div>

        </Link>
        <style jsx>{`
        .postdesccard {
            background-color: #2c2c2c;
            border: 1px solid #444;
            border-radius: 4px;
            padding: 10px;
            margin: 10px 0;
            width: 500px;
            transition: box-shadow 0.3s;
        }
        .postdesccard h2 {
            color: #ffffff;
            font-weight: bold;
            font-size: 1.5em;
            margin: 0;
        }
        .postdesccard .date {
            color: #aaaaaa;
            font-size: 1em;
            margin-left: 10px;
            display: inline-block;
        }
        .postdesccard p {
            font-weight: normal;
            color: #fa8072;
            font-size: 1em;
            margin-top: 5px;
        }
        .postdesccard:hover {
            box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
        }
        `}</style>
        </div>
    );
}
export default PostDescCard