import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";

export default function NavigationTop({ location }) {
  const liClassBase =
    "text-xl font-bold tracking-wide inline-flex mx-5 px-5 py-5 hover:bg-purple-600 focus-within:bg-purple-600";
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
          ? `${liClassBase} bg-blue-500`
          : liClassBase;
      return (
        <li className={liClassName}>
          <Link to={path} className="text-white">
            {newComponentName}
          </Link>
        </li>
      );
    });
  return (
    <div className="bg-blue-900">
      <nav className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <ul className="relative flex flex-wrap items-left justify-center -mx-5">
          {Links}
        </ul>
      </nav>
    </div>
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
