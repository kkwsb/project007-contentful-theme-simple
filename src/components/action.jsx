import { graphql, Link } from "gatsby";
import React from "react";

export default function Action({ action }) {
  const { text, url } = action;
  return (
    <Link
      to={url}
      className="inline-flex items-center justify-center h-14 px-6 mx-6 my-6 font-bold text-xl text-white transition duration-200 rounded-lg bg-purple-900 hover:bg-purple-600 focus-within:bg-purple-600"
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
