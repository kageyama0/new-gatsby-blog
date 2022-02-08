import { ButtonGroup, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FaTwitter, FaGithub } from 'react-icons/fa'

export const SocialMediaLinks = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social{
            twitter
            github
          }
        }
      }
    }
  `)
  const social = data.site.siteMetadata.social

  return (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
      <IconButton
        as="a"
        href={`https://twitter.com/${social.twitter}`}
        aria-label="Twitter"
        icon={<FaTwitter color="#00acee" fontSize="20px" />}
      />
      <IconButton
        as="a"
        href={`https://github.com/${social.github}`}
        aria-label="Github"
        icon={<FaGithub fontSize="20px" />}
      />
    </ButtonGroup>
  )
}
