import { StatLabel as ChakraStatLabel, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const StatLabel = (props) => (
  <ChakraStatLabel
    fontWeight="medium"
    isTruncated
    color={useColorModeValue('gray.500', 'gray.400')}
    {...props}
  />
)
