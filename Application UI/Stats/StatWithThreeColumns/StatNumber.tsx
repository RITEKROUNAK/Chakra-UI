import {
  StatNumber as ChakraStatNumber,
  StatNumberProps,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'

export const StatNumber = (props: StatNumberProps) => (
  <ChakraStatNumber
    fontSize="3xl"
    fontWeight="medium"
    color={useColorModeValue('gray.900', 'white')}
    {...props}
  />
)
