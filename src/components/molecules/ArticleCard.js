import React from "react"
import Link from "../atoms/Link"
import { GatsbyImage, getImage } from  "gatsby-plugin-image"

import {
  Box,
  Flex
} from "@chakra-ui/react"

const ArticleCard = ({ title, slug, thumbnail, alt }) => {
  const image = getImage(thumbnail)

  return (
    <Box border="gray 1px solid">
      <Link to={`/blog/${slug}`}>
        <Flex
          direction="column"
        >
          <GatsbyImage
            aspectRatio={16 / 9}
            fullwidth="40rem"
            image={image}
            alt={alt}
          />
          <Box
            p="0.5rem"
            borderTop="gray 1px solid"
            textDecoration="none"
          >
            {title}
          </Box>
        </Flex>
      </Link>
    </Box>

  );
}

export default ArticleCard;
