import * as React from 'react'
import Layout from '../components/templates/Layout'
import Seo from '../components/templates/Seo'
import HeadingOne from "../components/atoms/HeadingOne"
import PortfolioCard from '../components/organisms/PortfolioCard'
import { Box } from '@chakra-ui/react'

const PortfolioPage = () => {
  return (
    <Layout>
      <Seo title="ポートフォリオ一覧" description="プログラミング・情報系の知識に関する記事です。" />

      <Box
        bg="white"
        padding="3.0rem 1.0rem 6.0rem"
      >
        <HeadingOne title="これまで開発したもの" />
        <PortfolioCard
          title="自作ブログ"
          technologies={["Gatsby.js", "ChakraUI"]}
          start="2022-1"
          end="2022-2"
          description={`Gatsby.jsを使ってこのサイトを作りました。\n最近は、Next.jsでもSSGができるので、Next.jsでも良かったんですが、Gatsbyはブログを作る上で便利なプラグインが豊富にあり、簡単に実装できそうだったので、Gatsbyを採用しました。\nまた、CSSライブラリとしてChakra UIを採用してみましたが、可もなく不可もなしといった感じです。\nTailwindCSSの場合、割り当てるCSSに対応したクラスの名前をいちいち調べなきゃいけないんですが、ChakraUIはただキャメルケースにするだけで良いので、個人的にTailwindCSSよりも好きです。\nまあ、クラス名を調べる代わりに、対応するコンポーネントの名前・使い方などは調べなきゃいけないんですが...w`}
        />

      </Box>




    </Layout>
  )
}

export default PortfolioPage
