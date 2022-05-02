import PostDescCard from "./PostDescCard"

const PostDescArea = ({postdescs}) => {
return (
    <div className="postdescarea-container">
   <h1>Blog</h1>
   <div> 
        {postdescs.map((postdesc => ( 
        <PostDescCard key={postdesc.id} postdesc={postdesc}/>
        )))}
        </div>
        <style jsx>{`

        .postdescarea-container{
            width: 70%;
            margin:0 auto;
        }

        .postdescarea-container h1{
           margin-top: 1rem;
           margin-bottom: 2rem;
        }
        @media(min-width: 675px){

            .postdescarea-container{
                width: 50%;
                margin:0 auto;
            }
        
        }

        `}</style>
        </div>
)
}
export default PostDescArea