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
          justify-content: space-around;            
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
      `}</style>
    </div>
  );
};

export default Contact;
