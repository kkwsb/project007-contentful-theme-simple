import { graphql } from "gatsby";
import React from "react";

export default function SectionHero({ section }) {
  return (
    <div class="relative">
      <img
        src={section.image.file.url}
        alt={section.imageAltText}
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative bg-gray-900 bg-opacity-90">
        <div className="py-8 px-4 mx-auto sm:max-w-xl md:max-w-full lg:py-12 lg:max-w-screen-xl">
          <div className="w-full">
            <h2 className="text-center mb-8 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              {section.title}
            </h2>
            <p className="text-center text-lg text-gray-200">
              {section.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  fragment SectionHeroFragment on ContentfulSectionHero {
    title
    subtitle
    image {
      file {
        url
      }
    }
    imageAltText
  }
`;
