import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/templates/layout'

const ArticleDetail = ({ data }) => {
  return (
    <Layout>
      <article>
        <h1>{data.mdx.frontmatter.title}</h1>

        <div>
          <div>作成日 : {data.mdx.frontmatter.date}</div>
          {data.mdx.frontmatter.update && <div>更新日 : {data.mdx.frontmatter.update}</div>}
        </div>

        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
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
