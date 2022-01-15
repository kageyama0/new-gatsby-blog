import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/templates/Layout'
import Seo from '../components/templates/Seo'

const BlogsPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="記事一覧" description="プログラミング・情報系の知識に関する記事です。" />

      <Link to='/___graphql'>graphql</Link>

    </Layout>
  )
}

export const query = graphql` {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      slug
    }
  }
}
`

export default BlogsPage
