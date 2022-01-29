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

    // mdx形式のファイル　gatsbyjs.com/docs/tutorial/part-5/#task-install-and-configure-the-mdx-transformer-plugin-and-dependencies
    "gatsby-plugin-mdx",

    // mdxファイルを変換して、記事にしたときにコードをハイライトするためのもの。
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

    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: '/',
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true,
        host: 'www.kageyama0.com', // if 'www' is set to 'false', be sure to also remove it here!
        ErrorDocument: `
          ErrorDocument 404 /404/index.html
        `,
        redirect: [
          {
            from: 'kgeyama0.com/',
            to: 'www.kageyama0.com',
          },
        ],
        custom: `
            # This is a custom rule!
            # This is a another custom rule!
        `,
      },
    },
  ],
}
