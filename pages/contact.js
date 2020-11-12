import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <div>
      <Layout />
      <div className="contact-container">
          <h2>Let's meet!</h2>
        <div className="contact-text">
          Feel free to reach out to me at any time, I am always interested in
          new stuff!
        </div>
        <div className="contact-image-info">
        <img src="/profil.jpg" alt="Berk Çapar" />
        <div className="info-p-container"> 
        <p>Berk Çapar</p>
        <p>berkcapar@gmail.com</p>
        </div>
        </div>
        <div className="contact-media">
        <a href="https://www.linkedin.com/in/berkcapar/">Linkedin</a>
        <a href="https://github.com/berkcapar">Github</a>
        </div>
      </div>
      <style jsx>{`
        .contact-text {
          color: white;
          width: 80%;
          margin: 1rem auto;
        }
        .contact-container {
          display: flex;
          flex-direction: column;
        }
        .contact-image-info{
          display:flex;
          align-items: center;
          justify-content: space-evenly;            
        }
        info-p-container{
            display:flex;
            flex-direction: column;
        }
        h2{
         margin-left: 3rem;
         margin-top: 1rem;
        }
        img {
          width: 50%;
          margin-left: 1rem;
          margin-top: 1rem;
          border-radius: 50%;
        }
        .contact-media{
            color: white;  
            display: flex;
            justify-content: center;
            margin-top: 3rem;
        }
        .contact-media a{
              border: 1px solid white;
              background-color: white;
              border-radius: 1.5rem;
              margin-right: 1rem;
              padding: 1rem;   
              color: black;  
        }
        @media(min-width:675px){
            .contact-container{
                width:60%;
                margin: 1rem auto;
            }
            .contact-text{
              width: 80%;  
            }
            h2{
                margin-left:4.7rem;
            }
            img{
                max-width:300px;
            }
        }
      `}</style>
    </div>
  );
};

export default Contact;
