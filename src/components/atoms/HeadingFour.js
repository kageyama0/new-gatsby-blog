import * as React from 'react'
import {Heading} from "@chakra-ui/react"


const HeadingFour = ({ title }) => (
  <Heading
    as="h4"
    position="relative"
    fontSize="2xl"
    m={{ base: "1.0rem 0.6rem ", md: "2.0rem 0.0rem 1.2rem" }}
    pb="0.3rem"
    lineHeight="1.5rem"
    _before={{
      position: "absolute",
      content: `""`,
      bottom: 0,
      right: 0,
      margin: "auto",
      background: "linear-gradient(45deg,#91919c,#4FBDBA 50%,#00d4ff)",
      width: "100%",
      height: "2px",
      opacity: 0.7
    }}

    _after={{
      position: "absolute",
      content: `""`,
      bottom: 0,
      right: 0,
      width: "30%",
      height: "4px",
      zIndex: 1,
      opacity: 1,
      borderBottom: "2px dashed",
      borderBottomColor: "white"
    }}
  >
    {title}
  </Heading>
)

export default HeadingFour
