// https://chakra-ui.com/docs/navigation/link#usage-with-routing-library
// Gatsbyでchakra uiを使う際に、Linkを as={GatsbyLink}として扱う必要がある。

import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link as ChakraLink} from "@chakra-ui/react"

export const Link = ({ to, children, ...props }) => {
  return (
    <ChakraLink
      as={GatsbyLink}
      to={to}
      {...props}
    >
      {children}
    </ChakraLink>
  )
}

export const BookLink = ({ to, children, ...props }) => {
  return (
    <Link
      to={to}
      mb={10}
      sx={{ color: "blue.500", textAlign: "center", display: "block" }}
      {...props}
    >
      {children}
    </Link>
  )
}
