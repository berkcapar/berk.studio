import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Welcome() {
  return (
    <div className="content-container">
      <div className="intro-section">
        <h1>
          Hey, I'm Berk <span className="wave" role="img" aria-label="waving hand">👋</span>
        </h1>
        <p className="tagline">
          The product leader focusing on digital experiences that solve the most impactful customer problems.
        </p>
        
        <div className="description">
          <p>
            With eight years of proven success as a product leader delivering innovative digital solutions across diverse sectors, 
            I have built my career on transforming complex challenges into streamlined, user-centric products that drive measurable business outcomes.
          </p>
          <p>
            I have worked with companies like Stack Overflow, Experteer, Bond Digital, dealing with B2B2C complexity, 
            and led talented cross-functional teams of developers and designers. I closely collaborate with business stakeholders 
            to build products and services that users love.
          </p>
          <div className="current-status">
            <p>👨🏽‍🌾 Product at Yara Digital Farming</p>
            <p>📍 Based in Berlin.</p>
          </div>
        </div>
        <nav className="navigation-links">
         
          <div className="social-links">
            <Link href="https://www.linkedin.com/in/berkcapar/" legacyBehavior>
              <a className="nav-link social-link">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </Link>
            <Link href="https://x.com/bcaparing" legacyBehavior>
              <a className="nav-link social-link">
                <img 
                  src="https://i0.wp.com/friaryschool.co.uk/wp-content/uploads/2023/11/large-x-logo.png.twimg_.1920-e1699539508422.png?ssl=1" 
                  alt="X (formerly Twitter)" 
                  width="16" 
                  height="16" 
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </a>
            </Link>
            <Link href="https://github.com/berkcapar" legacyBehavior>
              <a className="nav-link social-link">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Link>
          </div>
        </nav>
        <div className="latest-project">
          <h2>Latest Launch 🚀</h2>
          <div className="project-card">
            <h3>YaraPlus GrassN Launch - Nutrition Planning Tool</h3>
            <p className="project-date">2024</p>
            <div className="project-details">
              <p>Launch of Nutrition planning tool's newer version enables farmers to optimize their grassland nutrition and achieve higher yields.</p>
              <ul>
                <li>Conduct in person user interviews and led product discovery</li>
                <li>Led a team of 7 developers and 2 designers to launch the new version of the tool</li>
                <li>Achieving a 45 NPS (up 10 points) and 65% YoY increase in user engagement.</li>         
              </ul>
              <a 
                href="https://www.yara.de/news-veranstaltungen/news/grassn-jetzt-in-yaraplus/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                Read more about GrassN launch →
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .content-container {
          max-width: 1000px;   
          margin: 4rem auto;
        }

        .intro-section {
          margin-bottom: 2rem;
        }

        h1 {
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
          color: #fff;
          animation: fadeIn 0.8s ease-in;
        }

        .tagline {
          font-size: 1.2rem;
          color: lightsalmon;
          margin-bottom: 1.5rem;
          line-height: 1.4;
          animation: slideIn 0.8s ease-out;
        }

        .description {
          animation: slideIn 1s ease-out;
        }

        .description p {
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1rem;
        }

        .current-status {
          margin-top: 1.5rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .current-status p {
          margin-bottom: 0.5rem;
        }

        .latest-project {
          margin: 3rem 0;
          animation: slideIn 1s ease-out;
        }

        .latest-project h2 {
          color: lightsalmon;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 1.5rem;
          transition: transform 0.2s;
        }

        .project-card:hover {
          transform: translateY(-4px);
        }

        .project-card h3 {
          color: #fff;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }

        .project-date {
          color: lightsalmon;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .project-details {
          color: rgba(255, 255, 255, 0.9);
        }

        .project-details p {
          margin-bottom: 1rem;
        }

        .project-details ul {
          list-style-type: none;
          padding-left: 1rem;
        }

        .project-details li {
          margin-bottom: 0.5rem;
          position: relative;
        }

        .project-details li:before {
          content: "•";
          color: lightsalmon;
          position: absolute;
          left: -1rem;
        }

        .navigation-links {
          margin-top: 2rem;
        }

        .nav-link {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: rgba(129, 22, 168, 0.1);
          border-radius: 8px;
          color: #fff;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .nav-link:hover {
          background: rgba(129, 22, 168, 0.2);
          transform: translateY(-2px);
        }

        .social-links {
          margin-top: 1rem;
          display: flex;
          gap: 0.75rem;
        }

        :global(.social-link) {
          padding: 0.75rem;
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wave {
          display: inline-block;
          font-size: 1.5em;
          animation: wave 2.5s infinite;
          transform-origin: 70% 70%;
          margin-left: 0.3em;
        }

        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .content-container {
            margin: 5.5rem auto;
            width: 90%;
          }
          .intro-section h1 {
            text-align: center;
          }
          h1 {
            font-size: 2rem;
          }
          .tagline {
            font-size: 1.1rem;
            text-align: center;
          }
          .description p {
            font-size: 0.95rem;
            text-align: center;
          }
          .navigation-links {
            text-align: center;
          }
          .social-links {
            justify-content: center;
          }
          .project-card {
            padding: 1rem;
          }
          .latest-project h2 {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
