import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";

export default function NavigationTop({ location }) {
  const liClassBase =
    "inline-flex items-center justify-center group px-6 py-3 ml-6 tracking-wide text-gray-800";
  const { allSitePage } = useStaticQuery(query);
  const Links = allSitePage.nodes
    .filter((page) => {
      return page.path !== "/dev-404-page/";
    })
    .sort((a, b) => (a.path > b.path ? 1 : -1))
    .map((page) => {
      const { path, internalComponentName } = page;
      const newComponentName = internalComponentName
        .replace(/^Component/, "")
        .replace(/^Index$/, "Home")
        .replace(/^Blog(?!$)/, "");
      const liClassName =
        location.pathname === path || location.pathname === `${path}/`
          ? `${liClassBase} font-semibold`
          : `${liClassBase} font-medium`;
      return (
        <li className={liClassName}>
          <Link to={path} className="break-words border-b-4 border-white transition-colors duration-200 group-hover:text-indigo-500 group-hover:border-indigo-500 group-focus-within:text-indigo-500 group-focus-within:border-indigo-500">
            {newComponentName}
          </Link>
        </li>
      );
    });
  return (
      <nav className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <ul className="relative flex flex-wrap -mx-5">
          {Links}
        </ul>
      </nav>
  );
}

const query = graphql`
  query NavigationTop {
    allSitePage(
      filter: {
        path: { ne: null }
        internalComponentName: { ne: null }
      }
    ) {
      nodes {
        path
        internalComponentName
      }
    }
  }
`;
