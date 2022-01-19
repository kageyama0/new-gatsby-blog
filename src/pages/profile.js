import * as React from 'react'
import {
  Box,
  Text,
  Heading,
  Accordion,
} from "@chakra-ui/react"

import Layout from "../components/templates/Layout"
import Seo from "../components/templates/Seo"
import ProfileHeadingTwo from '../components/atoms/ProfileHeadingTwo'
import ProfileHeadingFour from '../components/atoms/ProfileHeadingFour'
import AccordionSet from '../components/molecules/AccordionSet'



const ProfilePage = () => {
  const ProfileBox = ({ children }) => <Box p={{ base: "0 0.2rem", md: "0.5rem 1.5rem" }}>{children}</Box>

  return (
    <Layout>
      <Seo title="プロフィール" description="プログラミング・情報系の知識に関する日頃の疑問を解消し、このブログで皆さんにお伝えします。" />

      <Box h="1000px" bg="white" >
        <Heading
          as="h1"
          size="xl"
          textAlign="center"
          color="gray.400"
          mt="2.0rem"
          pt="2.0rem"
        >
          プロフィール
        </Heading>

        <ProfileHeadingTwo title="スキル" />
        <ProfileBox>
          <ProfileHeadingFour title="プログラミング言語" />
          <Box></Box>
        </ProfileBox>


        <ProfileHeadingTwo title="趣味(おまけ)" />
        <ProfileBox>
          <Accordion allowMultiple>

            <AccordionSet title="外食">
              <Text>大阪に住んでいるので、大阪のいろんな店を開拓してます。</Text>
              <Text>特に、焼肉・焼き鳥・寿司が大好きで、よく新規開拓してます。</Text>
              <Text>結構美味しいお店知ってるつもりなので、気になる方いればぜひ聞いてください。</Text>
            </AccordionSet>

            <AccordionSet title="料理">
              <Text>料理は好きで、結構何でも作ります。</Text>
              <Text>よく作るのは、ハンバーグとか麻婆茄子とかです。</Text>
            </AccordionSet>

            <AccordionSet title="麻雀">
              <Text>大学時代は一生麻雀してました。3人よりも４人打ちの方が好きです</Text>
              <Text>九蓮宝燈はあがったことあるのに、なぜか国士無双はあがったことありません。</Text>
              <Text>国士無双テンパイまでは15, 6回はしてるはずなんですけどね〜。縁がないです...w</Text>
            </AccordionSet>

            <AccordionSet title="将棋">
              <Text>5, 6年前からちょこちょこやってます。</Text>
              <Text>定跡とかをちゃんと勉強していないので、特に得意戦法とかもなく雰囲気でやってます。</Text>
              <Text>将棋ウォーズ: 初段〜二段</Text>
              <Text>好きな棋士: 藤井猛九段</Text>
            </AccordionSet>

          </Accordion>
        </ProfileBox>

      </Box>

    </Layout>
  )
}
export default ProfilePage
