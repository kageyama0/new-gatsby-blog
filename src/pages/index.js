import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../components/templates/Layout"
import Seo from "../components/templates/Seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="ホームページ" description="プログラミング・情報系の知識に関する日頃の疑問を解消し、このブログで皆さんにお伝えします。" />


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

export default IndexPage
