/**
 * @type {import('gatsby').GatsbyConfig}
 */

// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: {
    defaultTitle: "技術ブログ(仮)",
    titleTemplate: "%s | kageyama0",
    defaultDescription: "Gatsbyで作成したブログです。",
    siteUrl: `https://kageyama0.com/`,
    author: {
      name: "kageyama0",
      summary: "駆け出しエンジニア",
    },
    keywords: "ブログ, エンジニア,駆け出しエンジニア",
    social: {
      twitter: "@kageyama0z",
      qiita: "kageyama0",
      github: "kageyama0",
    },
  },

  plugins: [
    // google-analytics用の設定、https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-50E2BE9PW4"],
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },

    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",

    // アイコン用プラグイン, https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        icon: `src/images/favicon.ico`,
        start_url: `/`,
        display: `standalone`,
      },
    },

    // mdx形式のファイルを変換する時の設定
    // https://www.gatsbyjs.com/blog/2019-11-21-how-to-convert-an-existing-gatsby-blog-to-use-mdx/
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // mdx内で画像を仕様するためのプラグイン
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          }
        ],
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        // eslint-disable-next-line no-undef
        path: `${__dirname}/src/pages/blog`,
      },
    },

    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },

    // ファイルを読み込むためのプラグイン、ここではブログ関連のファイルを読み込んでいる。
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `content`,
        // eslint-disable-next-line no-undef
        path: `${__dirname}/blog-content`,
      },
    },

    // chakraUI用のプラグイン
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
      },
    }
  ],
};
