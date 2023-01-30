import { graphql } from "gatsby";
import * as React from "react";

import ArticleCards from "../components/ArticleCards";
import Layout from "../components/Layout";

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <ArticleCards data={data} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { is_displayed_on_the_home: { eq: true } } }
      sort: { frontmatter: { created_at: DESC } }
    ) {
      nodes {
        frontmatter {
          title
          created_at(formatString: "MMMM D, YYYY")
          slug
          is_displayed_on_the_home
          thumbnail_alt
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
