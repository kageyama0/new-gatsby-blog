import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/templates/Layout"
import Seo from "../components/templates/Seo"
import ArticleCards from '../components/organisms/ArticleCards'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="ホームページ" description="プログラミング・情報系の知識に関する日頃の疑問を解消し、このブログで皆さんにお伝えします。" />

      <ArticleCards data={ data }/>

    </Layout>
  )
}

export const query = graphql` {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
        thumbnail_alt
      }
      slug
    }
  }
}
`

export default IndexPage
