// Chakra uiを使う中で、GatsbyのGatsbyImageを使いたい場合、as={ GatsbyImage } として扱う必要がある.
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { AspectRatio, Image as ChakraImage} from "@chakra-ui/react"

const DynamicImage = ({ aspectRatio, image, alt,  ...props }) => {
  return (
    <AspectRatio ratio={aspectRatio} >
      <ChakraImage
        as={GatsbyImage}
        image={image}
        alt={alt}
        {...props}
      />
    </AspectRatio>
  )
}

export default DynamicImage
