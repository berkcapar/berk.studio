import Layout from "../components/Layout";
const Projects = () => {
  return (
    <div>
      <Layout />
      <div className="product-manager-roles-container">
        <h2 className="product-manager-roles-container-title">Projects</h2>
        <div className="product-manager-roles">
            <a href="https://play.google.com/store/apps/details?id=com.setk.widget&hl=tr&gl=US">Samsung Galaxy Bizz</a>
            <p>
              Worked as Product Manager in all product discovery, strategy and delivery phases to build new generation content application for 15 Million users.
            </p>
        </div>
        <div className="product-manager-roles">
            <a href="https://streamable.com/mgo1lq">Experteer Cv-to-Profile</a>           
            <p>
            As a premium career SaaS, Experteer relies upon lots of user data to offer better position suggestions to its users. Worked as a product manager; my take was defining the strategy, setting success metrics and creating an agile environment for the team to build the MVP of product that analyzes the CV and creates user profiles instantly.
            </p>
        </div>
        <div className="product-manager-roles">
            <a href="https://kobiozel.onedio.com">Onedio Ad Dashboard</a>
            <p>
            Onedio wants to build an ad dashboard for small and medium scaled companies so they can create their campaigns easily. Creating product requirements document, aligning stakeholders and executing the plan with the cross-functional team was my to-do's while we were hitting the goals.            </p>
        </div>
     
        <div className="product-manager-roles">
          <a href="https://www.denizerden.com"> denizerden.com
          </a>
      
            <p>Musician Portfolio that I built with Next.js</p>
        </div>
        <div className="product-manager-roles">
          <a href="https://www.ergunbaydi.com"> ergunbaydi.com
          </a>
          
            <p>Photographer Portfolio that I built with Next.js</p>
            </div>
        <div className="product-manager-roles">
          <a href="https://github.com/berkcapar/Movie-Memory-App">moviememory[dot]com
          </a>
            <p>
              Personal learning project that makes movie search possible from IMDB API. I builded with MERN stack including
              login, search and save features.
            </p>
          </div>
        
      </div>

      <style jsx>{`
        .product-manager-roles-container,
        .developer-roles-container {
          width: 50%;
          margin: 0 auto;
        }
        .product-manager-roles-container-title{
          margin-bottom:1.5rem;
          color: white;

        } 
        .product-manager-roles,
        .developer-roles {
          display: flex;
          flex-direction:column;
          padding-bottom: 0.1rem;
          margin-top: 1rem;
        }
       
        .product-manager-roles img {
          max-width: 200px;
          width: 40%;
        }
        .developer-roles img {
          width: 100%;
        }
        .developer-roles a {
          width: 60%;
        }

        .product-manager-roles a {
          width: 60%;
        }
        .product-manager-roles div {
          width: 50%;
        }
        .developer-roles div {
          width: 30%;
        }
        @media(max-width:675px){
          .product-manager-roles-container{
              width: 80%;
          }
          .product-manager-roles-container-title{
          } 
      `}</style>
    </div>
  );
};
export default Projects;
