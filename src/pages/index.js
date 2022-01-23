import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/templates/Layout"
import Seo from "../components/templates/Seo"
import ArticleCard from '../components/molecules/ArticleCard'
import { Grid, GridItem } from '@chakra-ui/react'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="ホームページ" description="プログラミング・情報系の知識に関する日頃の疑問を解消し、このブログで皆さんにお伝えします。" />

      <Grid
        margin="auto"
        padding={{ lg: "0 3.0rem" }}
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2, 1fr)" }}
        gap={6}
      >
        {
          data.allMdx.nodes.map((node, index) => (
            <GridItem margin="auto">
              <ArticleCard
                key={index}
                title={node.frontmatter.title}
                slug={node.slug}
                thumbnail={node.frontmatter.thumbnail}
                alt={node.frontmatter.thumbnail_alt}
              />
            </GridItem>
          ))
        }
      </Grid>

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
