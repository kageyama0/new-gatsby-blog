module.exports = {
  siteMetadata: {
    defaultTitle: "技術ブログ(仮)",
    titleTemplate:  "%s | kageyama0",
    defaultDescription: "Gatsbyで作成したブログです。",
    siteUrl: `https://20376.gatsbyjs.io/`,
    author: {
      name: "kageyama0",
      summary: "駆け出しエンジニア",
    },
    keywords:"ブログ, エンジニア,駆け出しエンジニア",
    social: {
      twitter:"@ka4maa",
      qiita:  "kageyama0",
      github: "kageyama0",
    },
  },

  plugins: [
    //画像用プラグイン, https://www.gatsbyjs.com/docs/tutorial/part-3/
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",

    // CSSライブラリ Bulma用プラグイン, https://www.gatsbyjs.com/docs/how-to/styling/bulma/
    "gatsby-plugin-sass",

    // SEO用プラグイン, https://www.gatsbyjs.com/docs/add-page-metadata/
    "gatsby-plugin-react-helmet",

    // ブログ関連のファイルを読み込むためのプラグイン
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      }
    },

    // mdx形式のファイル　gatsbyjs.com/docs/tutorial/part-5/#task-install-and-configure-the-mdx-transformer-plugin-and-dependencies
    "gatsby-plugin-mdx",


  ],
}
