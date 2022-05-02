import Layout from "../../components/Layout";
import PostDescArea from "../../components/PostDescArea";

const Blog = () =>{
    return (
        <div>
           <Layout />
          <PostDescArea postdescs={postdescs}/>
      
        </div>
    );
}
export default Blog

const postdescs = [
    {
        id: 1,
        title: 'What to expect',
        description: 'What to expect from this blog and one artwork for you.',
        date: '01.05.22'
    }

]