import { graphql } from "gatsby";

export const query = graphql`
  fragment PostFields on ContentfulBlogPost {
    id
    title
    slug
    image {
      file {
        url
      }
    }
    imageAltText
  }
`;