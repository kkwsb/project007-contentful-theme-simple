import { graphql } from "gatsby";

export const query = graphql`
  fragment AssetFields on ContentfulAsset {
    id
  }
`;
