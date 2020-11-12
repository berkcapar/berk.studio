import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="sitetitle">
      <Link href="/">
        <a>
          <h1>berk.studio</h1>
        </a>
      </Link>
      <style jsx>{`
        .sitetitle {
         width: 16%;
         margin: 1rem auto;
        }
        .sitetitle a {
          text-decoration: none;
        }
        @media (min-width:675px){
        .sitetitle {
        width: 100%;
        margin-left: 1rem;
        }
        }
      `}</style>
    </div>
  );
};

export default Header;
