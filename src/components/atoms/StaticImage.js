// Chakra uiを使う中で、GatsbyのStaticImageを使いたい場合、as={ StaticImage } として扱う必要がある.
import React from "react"
import { AspectRatio, Image as ChakraImage } from "@chakra-ui/react"

const StaticImage = ({ aspectRatio, src, alt, ...props }) => {
  return (
    <AspectRatio ratio={aspectRatio} textAlign="center">
      <ChakraImage
        src={src}
        alt={alt}
        {...props}
      />
    </AspectRatio>
  )
}

export default StaticImage
