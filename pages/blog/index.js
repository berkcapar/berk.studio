import Layout from "../../components/Layout";
import PostDescArea from "../../components/PostDescArea";

// The slug is stated, not derived from the title: the card used to build the
// URL by slugifying the heading, which silently broke whenever a title was
// reworded.
const postdescs = [
    {
        id: 1,
        slug: 'okrs-when-to-embrace-when-to-avoid',
        title: 'OKRs: When to embrace, when to avoid',
        description: 'Why product managers love OKRs, and whether the framework serves what your team is trying to do.',
        date: '19.06.23'
    },
    {
        id: 2,
        slug: 'defining-success-as-product-manager',
        title: 'Defining success as a product manager',
        description: 'A guideline for the most famous PM task, and the one most often done by copying the last company.',
        date: '09.05.22'
    },
    {
        id: 3,
        slug: 'what-to-expect',
        title: 'What to expect',
        description: 'What to expect from this blog and one artwork for you.',
        date: '01.05.22'
    },
];

const Blog = () => {
    return (
        <div className="blog-container">
            <Layout
                title="Blog"
                description="Notes on product management: OKRs, defining success, and the parts of the job everyone performs and few examine."
                path="/blog"
            />
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