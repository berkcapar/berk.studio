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
          Senior Product Manager building AI-native products that turn complex enterprise workflows into measurable outcomes.
        </p>
        
        <div className="description">
          <p>
            Over the past ~10 years, I've shipped products across B2B and B2B2C environments, often 
            in messy, high-stakes domains where data is imperfect, stakeholders are many, and execution 
            speed matters. I'm at my best when taking ambiguous problems, turning them into clear product 
            bets, and driving delivery with strong metrics and tight feedback loops.
          </p>
          <p>
            My sweet spot is the intersection of <strong>AI + product strategy + systems thinking</strong>: 
            designing workflows that feel simple to users, building trust and guardrails around automation, 
            and continuously improving quality through measurement.
          </p>
          <p>
            I've worked with teams at Pactum AI, Yara, Stack Overflow, and Experteer, across engineering,
            design, data, sales, and customer success, to launch new capabilities, scale existing platforms, 
            and improve time-to-value. Always with a bias for shipping.
          </p>
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
            <span className="location-tag">📍 Berlin</span>
          </div>
        </nav>

        <div className="section-divider" />

        <div className="currently-section">
          <div className="currently-header">
            <span className="currently-badge">Currently</span>
            <span className="currently-role">Senior Product Manager @ Pactum AI</span>
          </div>
          <div className="currently-focus">
            Transforming how Fortune 500s negotiate with suppliers by relaunching Pactum AI's 
            highest-revenue AI agent into a scalable, self-serve platform that cuts time-to-value in half.
          </div>
        </div>

        <div className="section-divider" />

        <div className="latest-project">
          <h2>Latest Launch 🚀</h2>
          <div className="project-card">
            <h3>YaraPlus: All-in-One Digital Farming Platform</h3>
            <p className="project-date">2024</p>
            <div className="project-details">
              <p>
                Led the launch of Yara's unified digital platform bringing together agronomic tools, 
                services, and expert knowledge for farmers across Europe. Owned the full product lifecycle 
                from discovery through execution.
              </p>
              <ul>
                <li>Managed cross-functional team of 10 developers, 2 designers, and 3 data analysts</li>
                <li>Expanded Tankmix from 2 to 12 countries, driving 700% user increase</li>
                <li>Achieved 45 NPS (up 10 points) and 65% YoY increase in user engagement</li>
              </ul>
              <a 
                href="https://de.yaraplus.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit YaraPlus →
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
          font-size: 2.4rem;
          margin-bottom: 0.75rem;
          color: #fff;
          animation: fadeIn 0.8s ease-in;
        }

        .tagline {
          font-size: 1.15rem;
          color: lightsalmon;
          margin-bottom: 2rem;
          line-height: 1.5;
          animation: slideIn 0.8s ease-out;
        }

        .description {
          animation: slideIn 1s ease-out;
        }

        .description p {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 1rem;
        }

        .description strong {
          color: rgba(255, 255, 255, 0.95);
        }

        .section-divider {
          height: 1px;
          background: linear-gradient(to right, rgba(255, 160, 122, 0.3), transparent);
          margin: 2.5rem 0;
        }

        .currently-section {
          animation: slideIn 1.1s ease-out;
        }

        .currently-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .currently-badge {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: lightsalmon;
          background: rgba(255, 160, 122, 0.12);
          padding: 0.3rem 0.75rem;
          border-radius: 20px;
        }

        .currently-role {
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
        }

        .currently-focus {
          font-size: 1.05rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
          padding: 1.25rem;
          border-left: 3px solid lightsalmon;
          background: rgba(255, 160, 122, 0.04);
          border-radius: 0 8px 8px 0;
          margin-bottom: 1rem;
        }

        .location-tag {
          display: flex;
          align-items: center;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
          margin-left: 0.25rem;
        }

        .latest-project {
          animation: slideIn 1.2s ease-out;
        }

        .latest-project h2 {
          color: lightsalmon;
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .project-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 160, 122, 0.15);
        }

        .project-card h3 {
          color: #fff;
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
        }

        .project-date {
          color: lightsalmon;
          font-size: 0.85rem;
          margin-bottom: 1rem;
        }

        .project-details {
          color: rgba(255, 255, 255, 0.85);
        }

        .project-details p {
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .project-details ul {
          list-style-type: none;
          padding-left: 1rem;
          margin-bottom: 1rem;
        }

        .project-details li {
          margin-bottom: 0.5rem;
          position: relative;
          line-height: 1.5;
        }

        .project-details li:before {
          content: "•";
          color: lightsalmon;
          position: absolute;
          left: -1rem;
        }

        .project-link {
          display: inline-block;
          color: lightsalmon;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }

        .project-link:hover {
          color: #ff7f50;
        }

        .navigation-links {
          margin-top: 1.5rem;
        }

        .nav-link {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          color: #fff;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .nav-link:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .social-links {
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
            font-size: 1.05rem;
            text-align: center;
          }
          .description p {
            font-size: 0.95rem;
          }
          .navigation-links {
            text-align: center;
          }
          .social-links {
            justify-content: center;
          }
          .currently-header {
            justify-content: center;
          }
          .project-card {
            padding: 1rem;
          }
          .latest-project h2 {
            text-align: center;
          }
          .section-divider {
            background: linear-gradient(to right, transparent, rgba(255, 160, 122, 0.3), transparent);
          }
        }
      `}</style>
    </div>
  );
}
