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
        <svg className="border-b-4 border-white w-8 mr-1 text-azimuth-blue-500" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none">
          <rect x="3" y="1" width="7" height="12"></rect>
          <rect x="3" y="17" width="7" height="6"></rect>
          <rect x="14" y="1" width="7" height="6"></rect>
          <rect x="14" y="11" width="7" height="12"></rect>
        </svg>
        <span className=" border-b-4 border-white transition-colors duration-200 hover:text-azimuth-blue-500 hover:border-azimuth-blue-500 focus:text-azimuth-blue-500 focus:border-azimuth-blue-500">{site.siteMetadata.title}</span>
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
