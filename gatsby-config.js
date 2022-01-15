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

    // ブログ関連のファイルを読み込むためのプラグイン
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `content`,
        path: `${__dirname}/blog-content`,
      }
    },

    // mdx形式のファイル　gatsbyjs.com/docs/tutorial/part-5/#task-install-and-configure-the-mdx-transformer-plugin-and-dependencies
    "gatsby-plugin-mdx",

    // mdxファイルを変換して、記事にしたときに
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins:[
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            }
          }
        ]
      }
    },
  ],
}
