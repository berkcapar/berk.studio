import Link from 'next/link'

// The card markup sits inside the Link rather than on it: styled-jsx scopes
// its rules to elements written in this JSX, and a className handed to a
// component is not one of them, so styling the Link directly drops the styles.
const PostDescCard = ({postdesc}) => {
    return (
        <div>
        <Link href={`/blog/${postdesc.slug}`}>
            <div className="postdesccard">
                <h2>{postdesc.title}</h2>
                <p className="desc">{postdesc.description}</p>
                <p className="date">{postdesc.date}</p>
            </div>
        </Link>
        <style jsx>{`
        .postdesccard {
            background-color: #2c2c2c;
            border: 1px solid #444;
            border-radius: 4px;
            padding: 14px 16px;
            margin: 10px 0;
            max-width: 620px;
            transition: box-shadow 0.3s, border-color 0.3s;
        }
        .postdesccard h2 {
            color: #ffffff;
            font-weight: 600;
            font-size: 1.25em;
            margin: 0;
        }
        .postdesccard .desc {
            color: #c9c9c9;
            font-size: 0.95em;
            line-height: 1.55;
            margin: 6px 0 0;
        }
        .postdesccard .date {
            color: #fa8072;
            font-size: 0.85em;
            margin: 8px 0 0;
        }
        .postdesccard:hover {
            border-color: #fa8072;
            box-shadow: 0 4px 10px rgba(255, 255, 255, 0.08);
        }
        `}</style>
        <style jsx global>{`
        .blog-list a {
            text-decoration: none;
            display: block;
        }
        `}</style>
        </div>
    );
}
export default PostDescCard
