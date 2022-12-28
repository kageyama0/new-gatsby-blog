import { graphql } from "gatsby";
import * as React from "react";

import { MDXProvider } from "@mdx-js/react";
import Layout from "../../components/Layout";

import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import { HeadingOne, HeadingThree, HeadingTwo } from "../../components/Heading";

const ArticleDetail = ({ data: { mdx }, children }) => {
  console.log("children", children);

  const Code = (props) => {
    return (
      <Box
        mt={2}
        mb={9}
        backgroundColor="black"
        color="white"
        padding="1rem"
        borderRadius="0.4rem"
        {...props}
      />
    );
  };

  const BlockQuote = (props) => {
    return (
      <Box
        mt={3}
        mb={9}
        borderLeft="2px solid"
        borderLeftColor="gray.400"
        paddingLeft="1.2rem"
        {...props}
      />
    );
  };

  const components = {
    h1: HeadingOne,
    h2: HeadingTwo,
    h3: HeadingThree,
    ul: List,
    li: ListItem,
    code: Code,
    blockquote: BlockQuote,
  };

  return (
    <Layout>
      <article>
        <Box backgroundColor="white" padding="3.2rem 1.6rem">
          <Heading as="h1">{mdx.frontmatter.title}</Heading>

          <Box marginTop="1.6rem">
            <Box>
              <Box color="gray">作成日 : {mdx.frontmatter.date}</Box>
              {mdx.frontmatter.update && (
                <Box color="gray">更新日 : {mdx.frontmatter.update}</Box>
              )}
            </Box>

            <Box padding="1rem">
              <MDXProvider components={components}>{children}</MDXProvider>
            </Box>
          </Box>
        </Box>
      </article>
    </Layout>
  );
};

export default ArticleDetail;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY年 M月 D日")
        update(formatString: "YYYY年 M月 D日")
      }
    }
  }
`;
