import { graphql } from "gatsby";
import React from "react";
import Link from "./link.jsx";

export default function Action({ action }) {
  const { text, url } = action;
  return (
    <Link
      to={url}
      className="inline-flex items-center justify-center px-5 py-2 mt-6 ml-6 rounded-lg border-4 border-indigo-800 shadow-md bg-indigo-800 font-semibold tracking-wide text-white transition duration-200 hover:bg-indigo-500 focus:bg-indigo-500 hover:border-indigo-200 focus:border-indigo-200"
    >
      {text}
    </Link>
  );
}

export const query = graphql`
  fragment ActionFields on ContentfulAction {
    text
    url
  }
`;
