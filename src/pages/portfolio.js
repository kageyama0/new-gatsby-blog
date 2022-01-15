import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/templates/Layout'
import Seo from '../components/templates/Seo'

const PortfolioPage = () => {
  return (
    <Layout>
      <Seo title="ポートフォリオ一覧" description="プログラミング・情報系の知識に関する記事です。" />

      <Link to='/___graphql'>graphql</Link>

    </Layout>
  )
}

export default PortfolioPage
