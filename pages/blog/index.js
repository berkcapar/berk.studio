import Layout from "../../components/Layout";
import PostDescArea from "../../components/PostDescArea";

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
];

const Blog = () => {
    return (
        <div className="blog-container">
            <Layout />
            <h1 className="blog-title">Blog Posts</h1>
            <div className="blog-list">
                <PostDescArea postdescs={postdescs} />
            </div>
            <style jsx>{`
                .blog-container {
                    padding-top: 4rem;
                    max-width: 1000px;            
                    margin: 0 auto;

                }

                .blog-title {
                    font-size: 2.5rem; /* Larger font size for the title */
                    color: white;; /* Darker text color */
                    width:100%;
                    margin: 0rem auto;
                    padding-bottom: 1rem;
                    max-width: 1000px;
                    
                    text-align: left; /* Center the title */
                }

                .blog-list {
                    display: flex; /* Use flexbox for layout */
                    flex-direction: column; /* Stack items vertically */
                    gap: 15px; /* Space between blog items */
                }

                .blog-item {
                    padding: 15px; /* Padding for each blog item */
                    background-color: #fff; /* White background for blog items */
                    border: 1px solid #e0e0e0; /* Light border for separation */
                    border-radius: 5px; /* Rounded corners for blog items */
                    transition: transform 0.2s; /* Smooth transition for hover effect */
                }

                .blog-item:hover {
                    transform: scale(1.02); /* Slightly enlarge on hover */
                }
                     @media (max-width: 768px) {
            .blog-container {
              padding: 1rem;
              margin-top: 5rem;
            }
            `}</style>
        </div>
    );
}

export default Blog;