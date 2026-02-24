import Layout from "../components/Layout";
import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "StuntAI",
      year: "2025",
      category: "founder",
      isFounder: true,
      description: "AI-powered marketing automation platform transforming how businesses attract customers and accelerate growth. Founded and led the company through a strategic pivot from B2C (300 users) to B2B SaaS (10+ enterprise clients), building an agile team and achieving product-market fit before a successful exit.",
      link: "https://www.stuntai.co",
      tags: ["Founder & Exit", "AI/ML", "B2B SaaS", "Marketing Automation"]
    },
    {
      title: "YaraPlus",
      year: "2024",
      category: "product",
      description: "Yara's all-in-one digital platform unifying agronomic tools, services, and expert knowledge — helping farmers optimize fertilization decisions throughout the season. Led the product launch as PM, owning the full lifecycle from discovery through execution.",
      link: "https://de.yaraplus.com/",
      tags: ["Product Launch", "Platform Strategy", "Agriculture Tech"]
    },
    {
      title: "YaraPlus Tankmix Expansion",
      year: "2024",
      category: "product",
      description: "Tankmix helps farmers verify the mixability of leaf fertilizers with hundreds of plant protection products. Led the international expansion from 2 to 12 countries as Product Manager, driving go-to-market strategy and regional rollouts.",
      link: "https://de.yaraplus.com/tankmix/",
      tags: ["Go-to-Market", "International Expansion", "Product Management"]
    },
    {
      title: "Yara GrassN",
      year: "2024",
      category: "product",
      description: "Led the development and launch of a nutrition planning tool that helps farmers optimize their grassland nutrition and achieve higher yields.",
      link: "https://www.yara.de/news-veranstaltungen/news/grassn-jetzt-in-yaraplus/",
      tags: ["Product Management", "Agriculture Tech", "User Research"]
    },
    {
      title: "Online Course Recommendations",
      year: "2023",
      category: "product",
      description: "Backed with ML model, I worked as a product manager to make online course recommendations from Udemy and Pluralsight based on users interest on Stack Overflow platform.",
      link: "https://stackoverflow.blog/2023/02/01/announcing-more-ways-to-learn-and-grow-your-skills/",
      tags: ["Machine Learning", "Product Management", "Stack Overflow"]
    },
    {
      title: "Experteer Cv-to-Profile",
      year: "2022",
      category: "product",
      description: "As a premium career SaaS, Experteer relies upon lots of user data to offer better position suggestions to its users. Worked as a product manager; my take was defining the strategy, setting success metrics and creating an agile environment for the team to build the MVP of product that analyzes the CV and creates user profiles instantly.",
      link: "https://streamable.com/mgo1lq",
      tags: ["SaaS", "MVP", "Product Strategy"]
    },
    {
      title: "Samsung Galaxy Bizz",
      year: "2021",
      category: "product",
      description: "Worked as Product Manager in all product discovery, strategy and delivery phases to build new generation content application for 15 Million users.",
      link: "https://play.google.com/store/apps/details?id=com.setk.widget&hl=tr&gl=US",
      tags: ["Mobile App", "Content Platform", "Product Discovery"]
    },
    {
      title: "Personal Website",
      year: "2021",
      category: "development",
      description: "My personal website built with Next.js, featuring my portfolio, blog, and resume.",
      link: "https://github.com/yourusername/personal-website",
      tags: ["Next.js", "React", "Portfolio"]
    },
    {
      title: "denizerden.com",
      year: "2020",
      category: "development",
      description: "Musician Portfolio that I built with Next.js",
      link: "https://www.denizerden.com",
      tags: ["Next.js", "Portfolio", "Web Development"]
    }
  ];

  return (
    <Layout>
      <div className="projects-container">
        <h1 className="title">Projects</h1>
        
        <div className="filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'product' ? 'active' : ''}`}
            onClick={() => setActiveFilter('product')}
          >
            Product Management
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'founder' ? 'active' : ''}`}
            onClick={() => setActiveFilter('founder')}
          >
            Founder
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'development' ? 'active' : ''}`}
            onClick={() => setActiveFilter('development')}
          >
            Development
          </button>
        </div>

        <div className="projects-grid">
          {projects
            .filter(project => activeFilter === 'all' || project.category === activeFilter)
            .map((project, index) => (
              <div key={index} className={`project-card ${project.isFounder ? 'founder-card' : ''}`}>
                {project.isFounder && (
                  <div className="founder-badge">
                    <span className="founder-icon">✦</span> Founded & Exited
                  </div>
                )}
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="year">{project.year}</span>
                </div>
                <p className="description">{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`tag ${project.isFounder && i === 0 ? 'tag-founder' : ''}`}>{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project →
                </a>
              </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-container {
          max-width: 1000px;
          margin: 0 auto;
          padding-top: 4rem;
        }

        .title {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: white;
        }

        .filters {
          margin-bottom: 2rem;
          display: flex;
          gap: 1rem;
        }

        .filter-btn {
          padding: 0.5rem 1rem;
          border: 1px solid #333;
          background: transparent;
          color: #fff;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          border-color: lightsalmon;
        }

        .filter-btn.active {
          background: lightsalmon;
          border-color: lightsalmon;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: lightsalmon;
        }

        .founder-card {
          border: 1px solid rgba(255, 160, 122, 0.25);
          background: linear-gradient(135deg, rgba(255, 160, 122, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%);
          position: relative;
        }

        .founder-card:hover {
          border-color: lightsalmon;
          box-shadow: 0 8px 32px rgba(255, 160, 122, 0.12);
        }

        .founder-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: lightsalmon;
          margin-bottom: 0.75rem;
        }

        .founder-icon {
          font-size: 0.65rem;
        }

        .tag-founder {
          background: rgba(255, 160, 122, 0.2);
          font-weight: 500;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .project-header h3 {
          margin: 0;
          color: #fff;
        }

        .year {
          color: lightsalmon;
        }

        .description {
          color: #ccc;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tag {
          background: rgba(255, 160, 122, 0.1);
          color: lightsalmon;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.875rem;
        }

        .project-link {
          display: inline-block;
          color: lightsalmon;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .project-link:hover {
          color: #ff7f50;
        }

        @media (max-width: 768px) {
          .projects-container {
            padding: 1rem;
            margin-top: 5rem;
          }

          .filters {
            flex-wrap: wrap;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Projects;
