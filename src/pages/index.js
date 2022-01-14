import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/templates/layout'
import Seo from '../components/templates/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="ホームページ">
      <Seo title="ホームページ" description="プログラミング・情報系の知識に関する日頃の疑問を解消し、このブログで皆さんにお伝えします。" />
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <Link href='http://localhost:8000/___graphql'>graphql</Link>

    </Layout>
  )
}

export default IndexPage
