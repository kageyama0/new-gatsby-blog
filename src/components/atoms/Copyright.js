import { Text } from '@chakra-ui/react'
import * as React from 'react'

export const Copyright = () => (
  <Text fontSize="sm">
    &copy; {new Date().getFullYear()} kageyama0. All rights reserved.
  </Text>
)
