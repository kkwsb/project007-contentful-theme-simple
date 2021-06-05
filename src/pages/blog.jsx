import { graphql, Link } from "gatsby";
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
      <div className="py-8 px-4 mx-auto sm:max-w-xl md:max-w-full lg:py-12 lg:max-w-screen-xl">
        <h1 class="text-4xl font-extrabold text-center">{title}</h1>
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
