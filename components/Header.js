import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="sitetitle">
      <Link href="/">
        <a>
          <h1>Berk Çapar</h1>
        </a>
      </Link>
      <style jsx>{`
        .sitetitle h1 {
          width: 100%;
        }
        .sitetitle a {
          text-decoration: none;
        }
        @media (min-width:675px){
        .sitetitle {
           margin-top: 1rem;
        }
        }
      `}</style>
    </div>
  );
};

export default Header;
