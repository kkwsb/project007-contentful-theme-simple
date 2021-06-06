import Link from "../components/link.jsx";
import React from "react";
import NavigationTop from "../components/navigation-top.jsx";

export default function LayoutGlobal({ children, location }) {
  return (
    <div id="site-wrap">
      <header><NavigationTop location={location} /></header>
      <main id="content">
      { children }
      </main>
      <footer>
        <div className="bg-gray-900">
          <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="flex flex-col justify-between sm:flex-row">
              <p className="text-sm text-gray-100">
                &copy; Stackbit. All rights reserved. This Jamstack site was created with <Link to="https://www.stackbit.com/?utm_source=deployed-footer\" className="text-azimuth-blue-200 border-b-2 border-gray-900 transition duration-200 hover:text-azimuth-blue-400 focus:text-azimuth-blue-400 hover:border-azimuth-blue-400 focus:border-azimuth-blue-400">Stackbit</Link>.  Create yours <Link to="https://app.stackbit.com/create?theme=components&utm_source=deployed-footer\" className="text-azimuth-blue-200 border-b-2 border-gray-900 transition duration-200 hover:text-azimuth-blue-400 focus:text-azimuth-blue-400 hover:border-azimuth-blue-400 focus:border-azimuth-blue-400">now</Link>.
              </p>
            </div>
          </div>
        </div>
      </footer>
	</div>
  )
}