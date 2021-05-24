const ProjectsNav = () => {
  return (
    <nav className="projects-nav-container">
      <label>
        <a>As a Product Manager</a>
      </label>
      <label>
        <a>As a Developer</a>
      </label>
      <style jsx>{`
        nav {
          padding: 1.5rem;
          display: flex;
          justify-content: center;
          margin: 0 auto;
          max-width: 1200px;
        }
        nav label {
          margin: 0 2em;
        }
        nav a {
          color: white;
          text-decoration: none;
          font-weight: 700px;
        }
        a:hover {
          color: white;
        }
        @media (max-width: 675px) {
          nav {
            flex-direction: column;
          }
          nav label {
            margin: 1em auto;
            font-weight: bold;
          }
        }
      `}</style>
    </nav>
  );
};
export default ProjectsNav;
