import React from "react";
import Link from "next/link";
import LatestProject from "./Latest_Project";
import { getLatestBlogPost } from "../utils/blogutils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLinkedin, faTwitter, faPen, faFeather, faSpotify, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const Welcome = () => {
  const latestPost = getLatestBlogPost();

  return (
    <div className="welcomecontainer">
      <div className="firstpar">
        <h2>Hey, it's Berk.
          </h2>    {/* <span className="wave">👋</span> */}
      </div>
      <div className="subcontainer">
        <h3>The product manager focusing on digital experiences that solve the most impactful customer problems.</h3>
        <p>With over 8 years of experience working with tech companies, startups, and agencies, I am a product manager who embraces data-informed product strategy and execution.</p>
        <p>I have worked with companies like Stack Overflow, Experteer, Bond Digital, dealing with B2B2C complexity, and led talented cross-functional teams of developers and designers. I closely collaborate with business stakeholders to build products and services that users love.</p>
        <p>📍 Based in Berlin.</p>
      </div>
      <nav>
      <Link href="/who" legacyBehavior>
  <a>
    More about me <FontAwesomeIcon icon={faLongArrowAltRight} />
  </a>
</Link>
<Link href="/now" legacyBehavior>
  <a>
    What am I doing now <FontAwesomeIcon icon={faLongArrowAltRight} />
  </a>
</Link>
      </nav>
      <div className="externalcontainer">
      <a href="mailto:berkcapar@gmail.com">
  Email <FontAwesomeIcon icon={faEnvelope} className="fa-x" />
</a>
<a href="https://www.linkedin.com/in/berkcapar/">Linkedin <i className="fab fa-linkedin fa-x"></i></a>
        <a href="https://twitter.com/bcaparing">Twitter<i className="fab fa-twitter fa-x"></i></a>
<a href="https://substack.com/@berkcapar">
  Substack <FontAwesomeIcon icon={faFeather} className="fa-x" />
</a>
        <a href="https://open.spotify.com/user/1165537105?r=">Spotify <i className="fab fa-spotify fa-x"></i></a>
      </div>
      <LatestProject />
      <div className="horizontal_dotted_line"></div>
      <div>
        {latestPost && (
          <div className="latestblog-container">
              <div className="latestblog-title">
            <h2>LATEST FROM BLOG</h2>
            </div>
            <div className="latestblog-content-section">   
            <div className="latestblog-text-secton"> 
            <Link href={latestPost.url}>
            <h3>{latestPost.title}</h3>
            <p>{latestPost.description}</p> 
            </Link>
            </div>
            <div className="latestblog-image-section">    
            <Link  href={`/${latestPost.url}`}>
                <img src="/okr.jpeg" alt="Latest Blog Post" />
            </Link></div>
            
          </div> 
          </div>
        )}
         <div className="horizontal_dotted_line"></div>
      </div>

      <style jsx>
  {`
    nav {
      color: lightsalmon;
      margin-top: 0.5rem;
      padding-bottom: 2rem;
      margin-left: 1rem;
      width: 60%;
      display: flex;
      flex-wrap: wrap;
    }
    nav a {
      margin-right: 1rem;
      margin-bottom: 0.5rem;
    }
    .firstpar {
      display: flex;
      margin-left: 1rem;
    }
    .fa-x {
      color: white;
    }
    .wave {
      animation-name: wave-animation;
      animation-duration: 2.5s;
      animation-iteration-count: infinite;
      transform-origin: 70% 70%;
      display: inline-block;
      margin-left: 0.5rem;
      padding-top: 0.4rem;
    }
    .horizontal_dotted_line {
      border-bottom: 2px dotted white;
      margin-top: 1rem;
    }

    @keyframes wave-animation {
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(14deg);
      }
      20% {
        transform: rotate(-8deg);
      }
      30% {
        transform: rotate(14deg);
      }
      40% {
        transform: rotate(-4deg);
      }
      50% {
        transform: rotate(10deg);
      }
      60% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    .welcomecontainer {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      width: 100%;
    }
    .subcontainer {
      margin-left: 1rem;
    }
    .subcontaniner {
      color: #F47F24;
    }
    .externalcontainer {
      color: white;
      display: flex;
      margin-left: 1rem;
      justify-content: space-between;
    }
    .externalcontainer a {
      border: 1px solid white;
      border-radius: 0.5rem;
      margin-right: 1rem;
      padding: 0.6rem;
      color: white;
    }
    i {
      color: lightsalmon;
      margin-left: 0.5rem;
    }
    .current-job {
      display: flex;
      justify-content: flex-start;
    }
    .current-job img {
      width: 10%;
    }
    .current-job p {
      width: 50%;
    }
    .latestblog-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 1rem;
    }
    .latestblog-title {
      width: 50%;
      margin-left: 1rem;
    }
    .latestblog-content-section {
      display: flex;
      flex-direction: column;
      width: 90%;
      margin-left: 1rem;
    }
    .latestblog-text-secton {
      width: 100%;
    }
    .latestblog-image-section {
      width: 100%;
    }
    .latestblog-image-section img {
      width: 100%;
      object-fit: cover;
      border-radius: 8px;
      transition: transform 0.3s;
    }
    .latestblog-image-section:hover img {
      transform: scale(1.05);
    }

    @media (min-width: 675px) {
      .welcomecontainer {
        width: 50%;
        margin: 0.5rem auto;
      }
      .subcontainer {
        margin-left: 0;
      }
      .firstpar {
        margin-left: 0rem;
      }
      nav {
        margin-left: 0;
      }
      .externalcontainer {
        margin-left: 0;
      }
      .latestblog-container {
        flex-direction: column;
        margin-left: 0rem;
        margin-top: 1rem;
      }
      .latestblog-title {
        margin-left: 0rem;
      }
      .latestblog-content-section {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 0rem;
      }
      .latestblog-text-secton {
        width: 40%;
        margin-left: 0rem;
      }
      .latestblog-image-section {
        width: 50%;
        display: flex;
        justify-contenet: flex-end;
      }
      .latestblog-image-section img {
        width: 100%;
        border-radius: 8px;
        transition: transform 0.3s;
      }
    }
  `}
</style>

    </div>
  );
};


export default Welcome;
