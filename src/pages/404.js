import * as React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import Layout from "../components/templates/Layout"
import Seo from "../components/templates/Seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404 Error" description="404 Error." />

      <Heading
        as="h1"
        textDecoration="underline"
      >
        お探しのページが見つかりません
      </Heading>
      <Box>
        URLが間違っているか、移動したり削除された記事にアクセスしようとしている可能性があります。
      </Box>

    </Layout>
  )
}


export default NotFoundPage
