import Link from "./link.jsx";
import React from "react";

export default function Card({ card }) {
  const { title, image, imageAltText, url } = card;
  return (
    <div>
      {!!image && !!url && (
        <Link to={url} className="group" tabindex="-1">
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80 transition duration-200 hover:opacity-50 group-focus:opacity-50"
            src={image.file.url}
            alt={imageAltText}
          />
        </Link>
      )}
      {!!image && !url && (
        <img
          className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
          src={image.file.url}
          alt={imageAltText}
        />
      )}
      {!!title && (
        <h2 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          {!!url && (
            <Link
              to={url}
              className="transition-colors duration-200 hover:text-azimuth-blue-500 focus:text-azimuth-blue-500"
            >
              {title}
            </Link>
          )}
          {!url && title}
        </h2>
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
