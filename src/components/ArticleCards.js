import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import { getImage } from "gatsby-plugin-image";
import DynamicImage from "./DynamicImage";
import { Link } from "./Link";

import { Box, Flex } from "@chakra-ui/react";

const ArticleCard = ({ title, slug, thumbnail, alt }) => {
  const image = getImage(thumbnail);

  return (
    <Box border="1px" borderColor="gray">
      <Link to={`/blog/${slug}`}>
        <Flex direction="column">
          <DynamicImage aspectRatio={16 / 9} image={image} alt={alt} />
          <Box
            p="0.5rem"
            borderTop="1px solid"
            borderTopColor="gray"
            textDecoration="none"
          >
            {title}
          </Box>
        </Flex>
      </Link>
    </Box>
  );
};

const ArticleCards = ({ data }) => {
  //console.log(data)

  return (
    <Grid
      padding={{ md: "0 3.0rem" }}
      templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2, 1fr)" }}
      gap={6}
    >
      {data.allMdx.nodes.map((node, index) => (
        <GridItem key={index} margin="auto" width={{ base: "90%", md: "100%" }}>
          <ArticleCard
            title={node.frontmatter.title}
            slug={node.frontmatter.slug}
            thumbnail={node.frontmatter.thumbnail}
            alt={node.frontmatter.thumbnail_alt}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ArticleCards;
