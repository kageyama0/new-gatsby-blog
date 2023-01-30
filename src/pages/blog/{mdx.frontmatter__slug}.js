import { graphql } from "gatsby";
import * as React from "react";

import { MDXProvider } from "@mdx-js/react";
import Layout from "../../components/Layout";

import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import { HeadingOne, HeadingThree, HeadingTwo } from "../../components/Heading";
import { BookLink, Link }  from "../../components/Link";

const ArticleDetail = ({ data: { mdx }, children }) => {
  console.log("children", children);

  const HeadingFour = (props) => {
    return <Heading
      as="h4"
      fontSize="1.2rem"
      fontWeight="bold"
      mt={8}
      mb={3}
      {...props}
    />;
  };

  const Space = (props) => {
    return <Box {...props} />
  };

  const MdxLink = (props) => {
    return <Link
      color="blue.500"
      _hover={{ color: "secondary" }}
      to={props.href}
      {...props}
    />;
  };

  const MdxList = (props) => {
    return <List
      sx={{ listStyle: "disc" }}
      {...props}
    />;
  };

  const MdxListItem = (props) => {
    return <ListItem
      mb={2}
      ml={6}
      {...props}
    />;
  };

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
    h4: HeadingFour,
    a: MdxLink,
    ul: MdxList,
    li: MdxListItem,
    code: Code,
    blockquote: BlockQuote,
    BookLink: BookLink,
    Space: Space,
  };

  return (
    <Layout>
      <article>
        <Box backgroundColor="white" padding="3.2rem 1.6rem">
          <HeadingOne>{mdx.frontmatter.title}</HeadingOne>
          <Box marginTop="1.6rem">
            <Box textAlign="center">
              <Box color="gray">作成日 : {mdx.frontmatter.created_at}</Box>
              {mdx.frontmatter.updated_at && (
                <Box color="gray">更新日 : {mdx.frontmatter.updated_at}</Box>
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
        created_at(formatString: "YYYY年 M月 D日")
        updated_at(formatString: "YYYY年 M月 D日")
      }
    }
  }
`;
