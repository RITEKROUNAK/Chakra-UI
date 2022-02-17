import { Box, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const Card = (props) => (
  <Box
    bg={useColorModeValue('white', 'gray.800')}
    rounded={{
      md: '2xl',
    }}
    p="8"
    {...props}
  />
)
