import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/templates/Layout'
import HeadingTwo from "../../components/atoms/HeadingTwo"
import { Box } from "@chakra-ui/react"


const ArticleDetail = ({ data }) => {
  return (
    <Layout>
      <article>
        <HeadingTwo title={data.mdx.frontmatter.title} />
        <Box paddingLeft={{ md:"2rem"}}>
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
