import React from "react";
import Link from "next/link";

const Welcome = () => {
  return (
    <div className="welcomecontainer">
      <div className="firstpar">
      <h2>Hey, it's Berk. </h2>
        <span className="wave">👋</span>
      </div>
      <div className="subcontainer">
        <h3>I am the product manager building digital experiences that solve
real customer problems. </h3>
<p>Product Manager at <a href="https://stackoverflow.co/advertising/">Stack Overflow</a></p>
           
        <p>Based in Berlin and Istanbul</p>
      </div>
      <nav>
        <Link href="/who" legacyBehavior>
          <a>
            More about me<i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </Link>
        <Link href="/now" legacyBehavior>
          <a>
            What am I doing now <i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </Link>
        
      </nav>
      <div className="externalcontainer">
      <a href="mailto:berkcapar@gmail.com">Email <i className="fas fa-envelope fa-x"></i></a>
        <a href="https://www.linkedin.com/in/berkcapar/">Linkedin <i className="fab fa-linkedin fa-x"></i></a>
        <a href="https://twitter.com/bcaparing">Twitter<i className="fab fa-twitter fa-x"></i></a>
        
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
          .wave {
            animation-name: wave-animation;
            animation-duration: 2.5s;
            animation-iteration-count: infinite;
            transform-origin: 70% 70%;
            display: inline-block;
            margin-left: 0.5rem;
            padding-top: 0.4rem;
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
          }
          .externalcontainer a {
            border: 1px solid white;
            border-radius: 0.5rem;
            margin-right: 1rem;
            padding:0.6rem;
            color: white;
          }
          i {
            color: lightsalmon;
            margin-left: 0.5rem;
           
          }
          .current-job{
            display:flex;
            justify-content:flex-start;     
          }
         .current-job img{
           width: 10%;
         }
         .current-job p{
           width:50%;
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
           
          }
        `}
      </style>
    </div>
  );
};

export default Welcome;
