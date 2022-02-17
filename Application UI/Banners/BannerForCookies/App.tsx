import { Box } from '@chakra-ui/react'
import * as React from 'react'
import { CookieBanner } from './CookieBanner'

export const App = () => (
  <Box position="relative" minH="600px">
    <CookieBanner position="absolute" bottom="0" right="0" left="0" />
  </Box>
)
