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
        title: 'OKRs: When to embrace when to avoid',
        description: 'Guideline to handle the most famous PM task ',
        date: '19.06.23'
    },
    {
        id: 2,
        title: 'Defining success as product manager',
        description: 'Guideline to handle the most famous PM task ',
        date: '09.05.22'
    },
   
    {
        id: 3,
        title: 'What to expect',
        description: 'What to expect from this blog and one artwork for you.',
        date: '01.05.22'
    },
 

]