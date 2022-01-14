import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ title, description, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    social,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    twitter: social.twitter,
    qiita: social.qiita,
    github: social.github
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang="ja" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1 ,viewport-fit=cover" />

      <meta name="description" content={seo.description} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:creator" content={seo.twitter} />

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

    </Helmet>

  )
}
export default Seo

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}
Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}


const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle
        titleTemplate
        defaultDescription
        siteUrl
        author {
          name
          summary
        }
        social{
          twitter
        }
      }
    }
  }
`
