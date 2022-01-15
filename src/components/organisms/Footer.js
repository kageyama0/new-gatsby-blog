import { Box, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { Copyright } from '../atoms/Copyright'
import { SocialMediaLinks } from '../molecules/SocialMediaLinks'

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    width="100%"
    textAlign="center"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{ base: '4', md: '8' }}
  >
    <Stack alignItems="center" >
      <Stack direction="row" spacing="4" justify="space-between">
        <SocialMediaLinks />
      </Stack>
      <Copyright />
    </Stack>
  </Box>
)

export default Footer
