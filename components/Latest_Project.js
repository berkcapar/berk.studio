import Link from "next/link"

const LatestProject = () => {
    return(
        
        <div className="latest-project-section">
            <div className="latest-project-section-title">
                <h2>LATEST LAUNCH</h2>
            </div>
            <div className="latest-project-section-content-area">
                <div className="latest-project-section-text-area"> 
            <Link href="https://stackoverflow.blog/2023/02/01/announcing-more-ways-to-learn-and-grow-your-skills/">
            <h3>Online Course Recommendations: New Learn and Grow Way in Stack Overflow</h3>
            <p>Explore how we leverage machine learning in Stack Overflow to make online course recommendations based on user activity. </p> 
            </Link> 
            </div>
            <div className="latest-project-section-image">
            <Link href="https://stackoverflow.blog/2023/02/01/announcing-more-ways-to-learn-and-grow-your-skills/">
            <img  src="/stackoverflow.png"></img> 
            </Link> 
                 </div>
            </div>
            <style jsx>
            {`
            .latest-project-section
            {
                display:flex;
                flex-direction: column;
                width: 100%;
                margin-top: 1rem;
            }
            .latest-project-section-title{
                width: 50%;
                margin-left: 1rem;

            }
            .latest-project-section-content-area
            {
                display:flex;
                flex-direction: column;
                width: 90%;
                margin-left: 1rem;
            }
            .latest-project-section-image{
                border-radius: 8px;
                transition: transform 0.3s;
                width: 100%;
            }
            .latest-project-section-image img{
                border-radius: 8px;
                transition: transform 0.3s;
                width: 100%;
            }
            .latest-project-section-image:hover {
                transform: scale(1.05);
              }
            @media (min-width: 675px) {
                .latest-project-section{
                flex-direction: column;
                margin-left: 0rem;
                margin-top: 3rem;
            }
            .latest-project-section-content-area{
                width: 100%;
                flex-direction: row;
                justify-content: space-between;
                margin-left: 0rem;
            }
            .latest-project-section-text-area{
                width: 40%;
            }
            .latest-project-section-image{
                width: 50%;
                border-radius: 8px;
                transition: transform 0.3s;
            }
            .latest-project-section-image:hover {
                transform: scale(1.05);
              }
            .latest-project-section-title{
                margin-left: 0rem;
            }
            
            }
            `}


            </style>
        </div>
    )
}
export default LatestProject
