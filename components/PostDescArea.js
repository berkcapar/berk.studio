import PostDescCard from "./PostDescCard"

const PostDescArea = ({postdescs}) => {
return (
    <div className="postdescarea-container">
   
   <div> 
        {postdescs.map((postdesc => ( 
        <PostDescCard key={postdesc.id} postdesc={postdesc}/>
        )))}
        </div>
        <style jsx>{`

        .postdescarea-container{
            width: 100%;
            margin: 0 auto;
        }

        .postdescarea-container h1{
           margin-top: 0rem;
           margin-bottom: 2rem;
        }
        @media(min-width: 675px){
            .postdescarea-container{
            max-width: 1000px;
            width: 100%;
            margin: 0 auto;
            }
        
        }

        `}</style>
        </div>
)
}
export default PostDescArea