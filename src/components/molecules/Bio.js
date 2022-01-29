import React from "react"
//import { StaticImage } from "gatsby-plugin-image"
// import StaticImage from "../atoms/StaticImage"
import { Image } from "@chakra-ui/react"
import ScenaryImage from "../../images/scenary.png"
import ProfileImage from "../../images/profile.png"

import { Box } from "@chakra-ui/react"

const Bio = () => {

  return (
    <Box
      backgroundColor="white"
    >
      <Image
        width="320px"
        height="150px"
        src={ScenaryImage}
        alt="風景画像"
      />

      <Box
        width="40%"
        margin="-3.7rem auto"
      >
        <Image
          borderRadius="full"
          border="1px"
          borderColor="gray"
          src={ProfileImage}
          alt="プロフィール画像"
        />
      </Box>


      <Box padding="60px 10px 20px">
        <Box
          textAlign="center"
          fontSize="1.2rem"
        >
          kageyama
        </Box>
        <Box fontSize="0.8rem">
          <Box>エンジニア１年目。大阪在住。</Box>

          <Box marginTop="4px">日頃の勉強内容をアウトプットしていきます。</Box>

        </Box>
      </Box>

    </Box>
  )
}

export default Bio
