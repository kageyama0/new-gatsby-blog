import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link as ChakraLink} from "@chakra-ui/react"

const Link = ({ to, children, ...props }) => {
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

export default Link
