import Layout from "../components/Layout";
import ProjectsNav from "../components/ProjectsNav";

const Projects = () => {
  return (
    <div>
      <Layout />
      <ProjectsNav />
      <div className="product-manager-roles-container">
        <div className="product-manager-roles">
          <img alt="Samsung Galaxy Bizz" src="./galaxybizz.png" />
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
      <style jsx>{`
        .product-manager-roles-container {
          width: 50%;
          margin: 0 auto;
        }
        .product-manager-roles {
          display: flex;
          justify-content: space-around;
          margin-bottom: 1rem;
          border-bottom: 1px solid white;
        }
        .product-manager-roles img {
          width: 40%;
          max-width: 200px;
        }
        .product-manager-roles div {
          width: 50%;
        }
      `}</style>
    </div>
  );
};
export default Projects;
