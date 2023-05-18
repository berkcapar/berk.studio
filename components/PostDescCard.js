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

        .postdesccard h2{
        color: lightsalmon;
        }
        .postdesccard p{
           font-weight: light;
            }

        `}</style>
        </div>
    );

}
export default PostDescCard