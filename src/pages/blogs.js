import { graphql } from "gatsby";
import * as React from "react";

import Layout from "../components/Layout";
// import Seo from "../components/templates/Seo"
import ArticleCards from "../components/ArticleCards";

const BlogsPage = ({ data }) => {
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

export default BlogsPage;
