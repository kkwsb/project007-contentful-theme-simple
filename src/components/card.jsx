import { graphql, Link } from "gatsby";
import React from "react";

export default function Card({ card }) {
  const { title, subtitle, image, imageAltText, url } = card;
  return (
    <div className="p-4 border rounded-lg shadow-lg">
      {!!title && (
        <h3 className="text-2xl font-bold leading-none mb-8 text-center">
          {!!url && <Link to={url}>{title}</Link>}
          {!url && title}
        </h3>
      )}
      {!!subtitle && <p>{subtitle}</p>}
      {!!image && (
        <img src={image.file.url} alt={imageAltText} className="mx-auto mb-6" />
      )}
    </div>
  );
}

/*export const query = graphql`
  fragment CardFields on ContentfulCard {
    title
    subtitle
  }
`;*/
