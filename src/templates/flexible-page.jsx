import { graphql } from "gatsby";
import React from "react";
import SiteMetadata from "../components/site-metadata.jsx";
import LayoutGlobal from "../layouts/layout-global.jsx";
import sectionComponentTypeList from "../components/index-section-components.jsx";

export default function FlexiblePage({ pageContext, data, location }) {
  const { title, sections, image, imageAltText } = data.item;
  return (
    <LayoutGlobal location={location}>
      <SiteMetadata title={title} />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative mb-6 mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
          <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
            <h1 className="mb-5 font-sans text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl sm:leading-none">
              {title}
            </h1>
          </div>
          {!!image && (
            <figure>
              <img
                src={image.file.url}
                alt={imageAltText}
                className="mx-auto object-cover w-12 h-12 rounded-full shadow-lg"
              />
            </figure>
          )}
        </div>
      </div>
      {!!sections &&
        sections.map((section) => {
          const componentTypeName = section["__typename"].replace(
            /^Contentful/,
            ""
          );
          let Component = sectionComponentTypeList[componentTypeName];
          return <Component section={section} />;
        })}
    </LayoutGlobal>
  );
}

export const query = graphql`
  query FlexiblePageQuery($slug: String!) {
    item: contentfulFlexiblePage(slug: { eq: $slug }) {
      id
      title
      slug
      image {
        file {
          url
        }
      }
      imageAltText
      sections {
        ... on ContentfulSectionCallToAction {
          __typename
          ...SectionCtaFragment
        }
        ... on ContentfulSectionHero {
          __typename
          ...SectionHeroFragment
        }
      }
    }
  }
`;