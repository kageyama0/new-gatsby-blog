import * as React from 'react'
import { Heading } from "@chakra-ui/react"



const HeadingOne = ({ title }) => (
  <Heading
    as="h1"
    size="xl"
    textAlign="center"
    color="gray.400"
    paddingTop="2.0rem"
  >
    {title }
  </Heading>
)

export default HeadingOne
