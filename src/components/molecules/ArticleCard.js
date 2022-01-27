import React from "react"
import Link from "../atoms/Link"
import Image from "../atoms/Image"
import { getImage } from  "gatsby-plugin-image"

import {
  Box,
  Flex
} from "@chakra-ui/react"

const ArticleCard = ({ title, slug, thumbnail, alt }) => {
  const image = getImage(thumbnail);

  return (
    <Box
      border="1px"
      borderColor="gray"
    >
      <Link to={`/blog/${slug}`}>
        <Flex
          direction="column"
        >
          <Image
            aspectRatio={16/9}
            image={image}
            alt={alt}
          />
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
}

export default ArticleCard;
