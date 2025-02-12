import Link from "next/link";

const Navigation = () => {
  return (
    <div className="nav-container">
      <nav>
        <div className="nav-left">
          <Link href="/" legacyBehavior>
            <a className="name">Berk Capar</a>
          </Link>
        </div>
        <div className="nav-right">
          <Link href="/resume" legacyBehavior>
            <a>Resume</a>
          </Link>
          <Link href="/projects" legacyBehavior>
            <a>Projects</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a>Blog</a>
          </Link>
        </div>
      </nav>

      <style jsx>{`
        .nav-container {
          width: 100%;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
        }

        nav {
          max-width: 1000px;
          margin: 0 auto;
          padding: 1rem 0rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-left .name {
          font-weight: 600;
          font-size: 1.1rem;
        }

        .nav-right {
          display: flex;
          gap: 2rem;
        }

        nav a {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        nav a:hover {
          color: lightsalmon;
        }

        @media (max-width: 768px) {
          nav {
            padding: 1rem;
            flex-direction: column;
            gap: 0.5rem;
          }

          .nav-right {
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Navigation;
