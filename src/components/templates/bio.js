import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import StaticImage from "gatsby-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          social {
            twitter
            qiita
            github
          }
        }
      }
    }
  `)

  // author(name, summary) + social(twitter)
  const social = data.site.siteMetadata.social
  return (
    <div>
      <div className="cube flip-to-top twitter">
        <div className="default-state">
          <FontAwesomeIcon icon={faExternalLinkAlt} color=" white" />
          <span> Twitter</span>
        </div>

        <div className="active-state twitter">
          <FontAwesomeIcon icon={faTwitter} color=" #019AD1" />
          <Link className="small-link" to={`https://twitter.com/${social.twitter}`}>
            Follow me!
          </Link>
        </div>
      </div>

      <div className="cube flip-to-top qiita">
        <div className="default-state">
          <FontAwesomeIcon icon={faExternalLinkAlt} color=" white" />
          <span> Qiita</span>
        </div>

        <div className="active-state qiita">
          <StaticImage
            alt="Qiitaアイコン"
            src="../../images/qiita-icon.jpg"
          />
          <span>
            <Link className="small-link" to={`https://qiita.com/${social.qiita}`}>
              Qiitaの投稿記事一覧へ
            </Link>
          </span>
        </div>
      </div>

      <div className="cube flip-to-top github">
        <div className="default-state">
          <FontAwesomeIcon icon={faExternalLinkAlt} color=" white" />
          <span> Github</span>
        </div>

        <div className="active-state github">
          <FontAwesomeIcon icon={faGithub} color="black" />
          <span>
            <Link className="small-link" href={`https://github.com/${social.github}`}>
              Source Code
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Bio
