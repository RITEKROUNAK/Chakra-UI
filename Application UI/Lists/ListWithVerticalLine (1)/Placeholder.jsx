import { Box, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const Placeholder = (props) => (
  <Box
    bg={useColorModeValue('gray.50', 'gray.700')}
    width="full"
    height="32"
    rounded="xl"
    {...props}
  />
)
