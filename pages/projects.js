import Layout from "../components/Layout";
import ProjectsNav from "../components/ProjectsNav";
import Link from "next/link";

const Projects = () => {
  return (
    <div>
      <Layout />
      <ProjectsNav />
      <div className="product-manager-roles-container">
        <div className="product-manager-roles">
          <img alt="Samsung Galaxy Bizz" src="./GalaxyBizz.png" />
          <div className="product-manager-roles-text">
            <h3>Samsung Galaxy Bizz</h3>
            <p>
              I have determined a product strategy for the new version of
              Samsung Galaxy Bizz, the content application installed on more
              than 15 million Samsung devices. Then, together with the software
              and design teams, we released the new version of the application
              in the targeted time. In the new version, the number of logged in
              users increased 30 percent, first day retention 15 percent and
              advertising revenue 45 percent.
            </p>
          </div>
        </div>
        <div className="product-manager-roles">
          <img alt="Samsung OMC" src="./OMC.png" />
          <div className="product-manager-roles-text">
            <h3>Samsung OMC</h3>
            <p>
              I analyzed the monthly and annual performance data of more than 10
              brands in Samsung's in-house pre-install project OMC, and with the
              optimization plans I prepared based on the results, I increased
              the revenue of the product by 40% compared to the previous period.
            </p>
          </div>
        </div>
        <div className="product-manager-roles">
          <img alt="Digital Turbine" src="./AppWizard.png" />
          <div className="product-manager-roles-text">
            <h3>Digital Turbine App Wizard</h3>
            <p>
              I've turned App Wizard, which is pre-install technology developed
              by Digital Turbine and pre-installed in Samsung devices in Turkey
              is the most demanded and profitable product in the company by
              making sure more than 40 apps have been got seamless experience.
            </p>
          </div>
        </div>
      </div>
      <div className="developer-roles-container">
        <div className="developer-roles">
          <a href="https://www.denizerden.com">
            <img href="" alt="Deniz Erden" src="./denizerden.png" />
          </a>
          <div className="developer-roles-text">
            <h3>denizerden.com</h3>
            <p>Musician Portfolio builded with Next.js</p>
          </div>
        </div>
        <div className="developer-roles">
          <a href="https://www.ergunbaydi.com">
            <img alt="Ergün Baydı" src="./ergunbaydi.png" />
          </a>
          <div className="product-manager-roles-text">
            <h3>ergunbaydi.com</h3>
            <p>Photographer Portfolio builded with Next.js</p>
          </div>
        </div>
        <div className="developer-roles">
          <a href="https://www.ergunbaydi.com">
            <img alt="React Project" src="./movieapp.png" />
          </a>
          <div className="product-manager-roles-text">
            <h3>Movie Memory</h3>
            <p>
              Movie Search from IMDB API. builded with MERN stack including
              login, search, add to fav features.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-manager-roles-container,
        .developer-roles-container {
          width: 50%;
          margin: 0 auto;
        }
        .product-manager-roles,
        .developer-roles {
          display: flex;
          justify-content: space-around;
          padding-bottom: 1rem;
          margin-top: 1rem;
          border-bottom: 1px solid white;
        }
        .developer-roles-container {
          padding-top: 5rem;
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
        .product-manager-roles div {
          width: 50%;
        }
        .developer-roles div {
          width: 30%;
        }
      `}</style>
    </div>
  );
};
export default Projects;
