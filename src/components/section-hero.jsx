import { graphql } from "gatsby";
import React from "react";

export default function SectionHero({ section }) {
  return (
    <section className="relative">
        <div className="bg-gray-900 bg-opacity-90" style={
          {
            backgroundImage: `url("${section.image.file.url}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
          }
        }>
        <div className="max-w-2xl px-4 py-16 mx-auto sm:max-w-xl md:max-w-2xl md:px-8">
        <div className="relative bg-indigo-900 bg-opacity-90">
        <div className="py-8 px-4 mx-auto sm:max-w-xl md:max-w-full lg:py-12 lg:max-w-screen-xl">
        <div className="w-full">
        <h2 className="text-center mb-8 font-sans text-4xl font-bold tracking-tight text-white sm:text-6xl sm:leading-none">
        {section.title}
      </h2>
      <p className="text-center text-xl text-gray-200">
        {section.subtitle}
      </p>
                </div>
                </div>
          </div>
        </div>
      </div>
    </section>
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
