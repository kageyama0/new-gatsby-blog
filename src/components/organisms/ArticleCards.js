import React from 'react'
import { Grid, GridItem } from "@chakra-ui/react"
import ArticleCard from '../molecules/ArticleCard'


const ArticleCards = ({ data }) => {
  //console.log(data)

  return (
    <Grid
      padding={{ md: "0 3.0rem" }}
      templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2, 1fr)" }}
      gap={6}
    >

    {
      data.allMdx.nodes.map((node, index ) => (
        <GridItem
          key={index}
          margin="auto"
          width={{ base: "90%", md: "100%"}}
        >
          <ArticleCard
            title={node.frontmatter.title}
            slug={node.slug}
            thumbnail={node.frontmatter.thumbnail}
            alt={node.frontmatter.thumbnail_alt}
          />
        </GridItem>
      ))
    }
    </Grid>
  )
}

export default ArticleCards
