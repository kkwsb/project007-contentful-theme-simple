import { graphql } from "gatsby";
import React from "react";
import SiteMetadata from "../components/site-metadata.jsx";
import LayoutGlobal from "../layouts/layout-global.jsx";
import sectionComponentTypeList from "../components/index-section-components.jsx";

export default function FlexiblePage({ pageContext, data, location }) {
  const { title, sections, image, imageAltText } = data.item;
  const SectionComponents = sections.map((section) => {
    const componentTypeName = section["__typename"].replace(/^Contentful/, "");
    let Component = sectionComponentTypeList[componentTypeName];
    return <Component section={section} />;
  });
  return (
    <LayoutGlobal location={location}>
      <SiteMetadata title={title} />
      <div className="py-8 px-4 mx-auto sm:max-w-xl md:max-w-full lg:py-12 lg:max-w-screen-xl">
        <h1 class="text-4xl font-extrabold text-center mb-8">{title}</h1>
        <figure>
          <img
            src={image.file.url}
            alt={imageAltText}
            className="w-full max-w-screen-sm mx-auto md:w-auto lg:max-w-screen-xl"
          />
        </figure>
      </div>
      {SectionComponents}
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
