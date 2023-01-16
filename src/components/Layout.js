import {
  Box,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { graphql, useStaticQuery } from "gatsby";
import { FaGithub, FaTwitter } from "react-icons/fa";
import ProfileImage from "../images/profile.png";
import ScenaryImage from "../images/scenary.png";
import { Link } from "./Link";


const Layout = ({ children }) => {
  return (
    <Box bg="background">
      <Header />

      <main>
        <Box margin="1rem auto" lineHeight="2rem">
          <Grid
            templateColumns={{ base: "1fr", lg: "5fr minmax(180px, 2fr)" }}
            gap={{ base: "0", md: "6" }}
          >
            <GridItem
              padding={{ base: "1rem 0.2rem", md: "2rem 0.5rem" }}
              margin={{ base: "1rem", md: "auto" }}
              minWidth={{ base: "90%", md: "80%" }}
              maxWidth="60rem"
            >
              {children}
            </GridItem>
            <GridItem padding={{ base: "1rem 0.2rem", md: "2rem 0.5rem" }}>
              <Sidebar />
            </GridItem>
          </Grid>
        </Box>
      </main>

      <Footer />
    </Box>
  );
};
export default Layout;

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const NavLink = ({ ...props }) => (
    <Link
      rounded="base"
      display="block"
      _hover={{ bg: "teal.200" }}
      p={2}
      {...props}
    />
  );

  return (
    <header>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={6}
        bg="primary"
        color="white"
        width="100%"
      >
        <Flex align="center" mr={5}>
          <Text
            as="a"
            href="/"
            fontSize="2xl"
            fontWeight="bold"
            letterSpacing={"tighter"}
            textDecoration="none"
          >
            K-Blog
          </Text>
        </Flex>

        <Box
          fontSize="2xl"
          display={{ base: "block", md: "none" }}
          onClick={handleToggle}
        >
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
    </header>
  );
};

const Sidebar = () => {
  return (
    <Box marginRight="1rem">
      <Box maxWidth="320px" margin="auto" backgroundColor="white">
        <Image width="100%" height="auto" src={ScenaryImage} alt="風景画像" />

        <Box
          width={{ base: "80px", md: "130px" }}
          margin={{ base: "-1.7rem auto", md: "-3.7rem auto" }}
        >
          <Image
            borderRadius="full"
            border="1px"
            borderColor="gray"
            src={ProfileImage}
            alt="プロフィール画像"
          />
        </Box>

        <Box textAlign="center" padding="60px 10px 20px">
          <Box fontSize="1.2rem">kageyama</Box>
          <Box fontSize="0.8rem">
            <Box>エンジニア2年目。大阪在住。</Box>

            <Box marginTop="4px">
              日頃の勉強内容をアウトプットしていきます。
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    width="100%"
    textAlign="center"
    borderTop="1px"
    borderTopColor="gray.200"
    mx="auto"
    my="8"
    maxW="7xl"
    py="12"
    px={{ base: "4", md: "8" }}
  >
    <Stack alignItems="center">
      <Stack direction="row" spacing="4" justify="space-between">
        <SocialMediaLinks />
      </Stack>
      <Copyright />
    </Stack>
  </Box>
);

const SocialMediaLinks = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            twitter
            github
          }
        }
      }
    }
  `);
  const social = data.site.siteMetadata.social;

  return (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
      <IconButton
        as="a"
        href={`https://twitter.com/${social.twitter}`}
        aria-label="Twitter"
        icon={<FaTwitter color="#00acee" fontSize="20px" />}
      />
      <IconButton
        as="a"
        href={`https://github.com/${social.github}`}
        aria-label="Github"
        icon={<FaGithub fontSize="20px" />}
      />
    </ButtonGroup>
  );
};

const Copyright = () => (
  <Text fontSize="sm">
    &copy; {new Date().getFullYear()} kageyama0. All rights reserved.
  </Text>
);
