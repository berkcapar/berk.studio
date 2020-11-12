import React from "react";
import Link from "next/link"

const Welcome = () => {
  return (
    <div className="welcomecontainer">
      <div className="firstpar">
        <h2>Hello</h2>
        <img src="/wavinghand.png" alt="wavinghand"></img>
      </div>
      <div className="subcontainer">
        <h2>I'm Berk Çapar</h2>
        <h3>
          I am creative marketing person who design and build things for web.
        </h3>
        <p>Technical Project Manager and Freelance Web Developer.</p>
        <p>Based in Istanbul.</p>
      </div>
      <nav> 
          <Link href="/who"> 
          <a>More about me <i className="fas fa-long-arrow-alt-right"></i></a> 
          </Link>
          <Link href="/now">
          <a>What am I doing now <i className="fas fa-long-arrow-alt-right"></i></a>
          </Link>
          </nav>
      <div className="externalcontainer">
         <a href="https://www.linkedin.com/in/berkcapar/">Linkedin</a>
          <a href="https://github.com/berkcapar">Github</a>
      </div>
      <style jsx>
        {`
        nav{
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
          img {
            max-width: 50px;
            max-height: 50px;
            margin-left: 1rem;
            margin-top: 0.5rem;
          }
          .welcomecontainer {
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
            margin-left: 0.7rem;
            width: 90%
          }
          .subcontainer {
            margin-left: 1rem;
          }
          .externalcontainer{
            color: white;  
            display: flex;
            justify-content: center;
          }
          .externalcontainer a {
              border: 1px solid white;
              border-radius: 1.5rem;
              margin-right: 1rem;
              padding: 1rem;       
          }
          i {
            color: lightsalmon;
            margin-left: 0.125rem;
            padding-top: 0.125rem;
          }
          @media (min-width:675px){
            .welcomecontainer{
              width: 50%;
              margin: 1rem auto;
            }
            
          }
        `}
      </style>
    </div>
  );
};

export default Welcome;
