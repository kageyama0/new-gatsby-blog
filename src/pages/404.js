import * as React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <Heading as="h1" textDecoration="underline">
        お探しのページが見つかりません
      </Heading>
      <Box>
        URLが間違っているか、移動したり削除された記事にアクセスしようとしている可能性があります。
      </Box>
    </Layout>
  );
};

export default NotFoundPage;
