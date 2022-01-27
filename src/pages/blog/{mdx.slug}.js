import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/templates/Layout'
import { Box, Heading } from "@chakra-ui/react"

import "./mdx.module.css"


const ArticleDetail = ({ data }) => {
  return (
    <Layout>
      <article>
        <Box
          backgroundColor="white"
          padding="3.2rem 1.6rem"
        >
          <Heading
            as="h1"
          >
            {data.mdx.frontmatter.title}
          </Heading>

          <Box marginTop="1.6rem">
            <Box>
              <Box color="gray">
                作成日 : {data.mdx.frontmatter.date}
              </Box>
              {data.mdx.frontmatter.update &&
                <Box color="gray">
                  更新日 : {data.mdx.frontmatter.update}
                </Box>
              }
            </Box>

            <MDXRenderer>
              {data.mdx.body}
            </MDXRenderer>
          </Box>
        </Box>

      </article>
    </Layout>
  )
}

export default ArticleDetail

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "YYYY年 M月 D日")
        update(formatString: "YYYY年 M月 D日")
      }
      body
    }
  }
`
