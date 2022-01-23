import React from 'react'
import { Container, SimpleGrid } from "@chakra-ui/react"
import ArticleCard from '../molecules/ArticleCard'



const ArticleCards = ({ data }) => {
  const dataList = [
    {
      id: "1",
      product: "Product 1",
      summary: "This is a summary, can be any length",
      longLine: "Very short, can be any description"
    },
    {
      id: "2",
      product: "Product Two",
      summary:
        "Another summary, make sure that this is very responsivesfafsdfsdfsdfsdfsfsfsdf",
      longLine: "Billy Bob Bob Bob Bob likes Markiplier gameplay videos"
    },
    {
      id: "3",
      product: "Long Product",
      summary: "Finalize them summary, hurry, we are close to deadline",
      longLine: "Wow, this is very descriptive! I wonder how long it is"
    }
  ]
  return (
      <Container maxW="80rem" centerContent>
        <SimpleGrid minWidth="10rem">
          {dataList.map((data) =>{
            const { id, title, date, image } = data;
            return (
              <ArticleCard
                key={id}
                title={title}
                date={date}
              />
            );
          })}
        </SimpleGrid>
      </Container>
  )
}

export default ArticleCards
