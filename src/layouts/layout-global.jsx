import React from "react"
import NavigationTop from "../components/navigation-top.jsx";

export default function LayoutGlobal({ children, location }) {
  return (
    <div id="site-wrap">
      <header><NavigationTop location={location} /></header>
      <main id="content">
      { children }
      </main>
      <footer>Footer placeholder</footer>
	</div>
  )
}