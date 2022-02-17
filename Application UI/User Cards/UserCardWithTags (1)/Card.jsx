import { Box, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const Card = (props) => (
  <Box
    bg={useColorModeValue('white', 'gray.700')}
    maxWidth="2xl"
    mx="auto"
    p={{
      base: '6',
      md: '8',
    }}
    rounded={{
      sm: 'lg',
    }}
    shadow={{
      md: 'base',
    }}
    {...props}
  />
)
