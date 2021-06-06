import { graphql, Link } from "gatsby";
import React from "react";

export default function Action({ action }) {
  const { text, url } = action;
  return (
    <Link
      to={url}
      className="inline-flex items-center justify-center px-6 py-3 ml-6 rounded shadow-md bg-indigo-800 font-semibold tracking-wide text-white transition duration-200 hover:bg-indigo-500 focus:bg-indigo-500"
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
