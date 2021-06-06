import { graphql } from "gatsby";
import React from "react";
import SiteMetadata from "../components/site-metadata.jsx";
import LayoutGlobal from "../layouts/layout-global.jsx";
import SectionCards from "../components/section-cards.jsx";

export default function BlogList({ pageContext, data, location }) {
  const title = "Blog";
  const posts = data.posts.nodes;
  const cardsSection = !!posts &&
    posts.length > 0 && {
      cards: posts.map((post) => {
        const { title, subtitle, image, imageAltText, slug } = post;
        return { title, subtitle, image, imageAltText, url: `/blog/${slug}` };
      }),
    };
  return (
    <LayoutGlobal location={location}>
      <SiteMetadata title={title} />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
          <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
            <h1 className="mb-5 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl sm:leading-none">
              {title}
            </h1>
          </div>
        </div>
        <SectionCards section={cardsSection} />
      </div>
    </LayoutGlobal>
  );
}

export const query = graphql`
  query BlogListQuery {
    posts: allContentfulBlogPost {
      nodes {
        ...PostFields
      }
    }
  }
`;
