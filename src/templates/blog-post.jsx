import { graphql } from "gatsby";
import React from "react";
import SiteMetadata from "../components/site-metadata.jsx";
import LayoutGlobal from "../layouts/layout-global.jsx";
import { renderRichText } from "gatsby-source-contentful/rich-text";

export default function Post({ pageContext, data, location }) {
  const { title, image, imageAltText, body } = data.item;
  return (
    <LayoutGlobal location={location}>
      <SiteMetadata title={title} />
      <div className="prose py-8 px-4 mx-auto sm:max-w-xl md:max-w-full lg:px-8 lg:py-12 lg:max-w-screen-xl">
      <h1 className="text-center tracking-tight">{title}</h1>
        <figure>
          <img
            src={image.file.url}
            alt={imageAltText}
            className="w-full max-w-screen-sm mx-auto md:w-auto lg:max-w-screen-xl"
          />
        </figure>
        <article className="prose-xl prose-green">{renderRichText(body)}</article>
      </div>
    </LayoutGlobal>
  );
}

export const query = graphql`
  query PostQuery($slug: String!) {
    item: contentfulBlogPost(slug: { eq: $slug }) {
      ...PostFields
      body {
        raw
      }
    }
  }
`;
