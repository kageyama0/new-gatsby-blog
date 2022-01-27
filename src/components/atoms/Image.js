// Gatsbyでchakra uiを使う際に、Imageを as={GatsbyImage}として扱う必要がある。はず。。。

import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { AspectRatio, Image as ChakraImage} from "@chakra-ui/react"

const Image = ({ maxWidth, aspectRatio, image, alt,  children, ...props }) => {
  return (
    <AspectRatio maxWidth={maxWidth} ratio={aspectRatio}>
      <ChakraImage
        as={GatsbyImage}
        image={image}
        alt={alt}
        {...props}
      />
    </AspectRatio>
  )
}

export default Image
