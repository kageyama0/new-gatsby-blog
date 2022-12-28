import { Heading } from "@chakra-ui/react";
import * as React from "react";

export const HeadingOne = (props) => (
  <Heading
    as="h1"
    size="xl"
    textAlign="center"
    color="gray.400"
    paddingTop="2.0rem"
    {...props}
  />
);


export const HeadingTwo = (props) => (
  <Heading
    as="h2"
    bg="background"
    fontSize={{ base: "1.5rem", md: "1.8rem" }}
    m={{ base: "3.0rem 0 0.8rem ", md: "4.2rem 0 1.2rem" }}
    p={{ base: "1.0rem 0.6rem", md: "1.2rem 1.0rem" }}
    lineHeight="2.5rem"
    borderLeft="9px solid"
    borderLeftColor="secondary"
    {...props}
  />
);

export const HeadingThree = (props) => (
  <Heading
    as="h3"
    position="relative"
    fontSize={{ base: "xl", md: "2xl" }}
    m={{ base: "1.0rem 0 0.6rem ", md: "2.0rem 0 1.2rem" }}
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
      opacity: 0.7,
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
      borderBottomColor: "white",
    }}
    {...props}
  />

);
