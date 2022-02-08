module.exports = {
  siteMetadata: {
    defaultTitle: "技術ブログ(仮)",
    titleTemplate:  "%s | kageyama0",
    defaultDescription: "Gatsbyで作成したブログです。",
    siteUrl: `https://kageyama0.com/`,
    author: {
      name: "kageyama0",
      summary: "駆け出しエンジニア",
    },
    keywords:"ブログ, エンジニア,駆け出しエンジニア",
    social: {
      twitter:"@kageyama0z",
      qiita:  "kageyama0",
      github: "kageyama0",
    },
  },

  plugins: [
    //画像用プラグイン, https://www.gatsbyjs.com/plugins/gatsby-plugin-image
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },

    // アイコン用プラグイン, https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        icon: `src/images/favicon.png`,
        start_url: `/`,
        display: `standalone`,
      },
    },


    // ChakraUIを使うためのプラグイン, https://chakra-ui.com/guides/integrations/with-gatsby
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },

    // SEO用プラグイン, https://www.gatsbyjs.com/docs/add-page-metadata/
    "gatsby-plugin-react-helmet",

    // ファイルを読み込むためのプラグイン、ここではブログ関連のファイルを読み込んでいる。
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `content`,
        path: `${__dirname}/blog-content`,
      }
    },

    // mdx形式のファイルを変換する時の設定
    // https://www.gatsbyjs.com/blog/2019-11-21-how-to-convert-an-existing-gatsby-blog-to-use-mdx/
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },

  ],
}
