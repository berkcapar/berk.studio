import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="sitetitle">
      <Link href="/">
        <a>
          <h1>berk.</h1>
        </a>
      </Link>
      <style jsx>{`
        .sitetitle {
         width: 10%;
         margin: 0 auto;
        }
        .sitetitle a {
          text-decoration: none;
        }
        @media (min-width:675px){
        .sitetitle {
            margin-left: 1rem;
        }
        }
      `}</style>
    </div>
  );
};

export default Header;
