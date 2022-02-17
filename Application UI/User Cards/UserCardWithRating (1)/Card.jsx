import { Box, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const Card = (props) => (
  <Box
    maxW="3xl"
    mx="auto"
    bg={useColorModeValue('white', 'gray.700')}
    rounded={{
      md: 'xl',
    }}
    padding="10"
    shadow={{
      md: 'base',
    }}
    px={{
      base: '6',
      md: '8',
    }}
    {...props}
  />
)
