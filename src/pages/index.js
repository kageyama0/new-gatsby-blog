import * as React from "react";
import { graphql } from "gatsby";

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
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          slug
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
