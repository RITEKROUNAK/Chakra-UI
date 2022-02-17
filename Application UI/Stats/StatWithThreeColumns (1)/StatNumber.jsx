import { StatNumber as ChakraStatNumber, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const StatNumber = (props) => (
  <ChakraStatNumber
    fontSize="3xl"
    fontWeight="medium"
    color={useColorModeValue('gray.900', 'white')}
    {...props}
  />
)
