import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import Link from "./link.jsx";

export default function NavigationTop({ location }) {
  const liClassBase = "mr-5 group tracking-wide text-gray-800";
  const { site } = useStaticQuery(query);
  const Links = site.siteMetadata.menuLinks.map((menuLink) => {
    const liClassName = `${liClassBase} font-medium`;
    return (
      <li className={liClassName}>
        <Link
          to={menuLink.link}
          activeClassName="font-semibold"
          className="break-words block pt-1 border-b-4 border-white transition-colors duration-200 group-hover:text-azimuth-blue-500 group-hover:border-azimuth-blue-500 group-focus-within:text-azimuth-blue-500 group-focus-within:border-azimuth-blue-500"
        >
          {menuLink.name}
        </Link>
      </li>
    );
  });

  return (
    <nav
      id="masthead"
      aria-label="Main navigation"
      className="box-content flex items-center px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <a href="#content" className="sr-only">
        Skip to main content
      </a>
      <Link
        to="/"
        className="inline-flex items-center group font-semibold text-xl mr-5"
        href="/"
      >
        <span className="border-b-4 border-white transition-colors duration-200 group-hover:text-azimuth-blue-500 group-hover:border-azimuth-blue-500 group-focus:text-azimuth-blue-500 group-focus:border-azimuth-blue-500">{site.siteMetadata.title}</span>
      </Link>
      <ul className="flex items-center flex-wrap ml-auto">{Links}</ul>
    </nav>
  );
}

const query = graphql`
  query NavigationTop {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
        }
      }
    }
  }
`;
