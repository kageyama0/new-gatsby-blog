import * as React from 'react'
import {Heading} from "@chakra-ui/react"


const ProfileHeadingTwo = ({title}) => (
  <Heading
    as="h2"
    bg="background"
    fontSize="1.6rem"
    m={{ base: "3.0rem 0.6rem 0.8rem ", md: "4.2rem 1.0rem 1.2rem" }}
    p={{ base: "1.0rem 0.6rem", md: "1.2rem 1.0rem" }}
    lineHeight="2.5rem"
    borderLeft="9px solid"
    borderLeftColor="secondary"
  >
    {title}
  </Heading>
)

export default ProfileHeadingTwo
