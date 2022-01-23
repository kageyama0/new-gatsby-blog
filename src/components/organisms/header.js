import React from "react"
import {
  Box,
  Stack,
  Flex,
  Text,
  useDisclosure
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import Link from "../atoms/Link"

const NavLink = ({ ...props }) => (
  <Link
    rounded="base"
    display="block"
    _hover={{ bg: "teal.200" }}
    p={2}
    {...props}
  />
)

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="primary"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Text as="a" href="/" fontSize="2xl" fontWeight="bold" letterSpacing={"tighter"} textDecoration="none">
          K-Blog
        </Text>
      </Flex>

      <Box fontSize="2xl" display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <NavLink to="/blogs">記事一覧</NavLink>
        <NavLink to="/profile">プロフィール</NavLink>
        <NavLink to="/portfolio">ポートフォリオ</NavLink>
      </Stack>

    </Flex>
  );
};

export default Header;
