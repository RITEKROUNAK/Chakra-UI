import { StatLabel as ChakraStatLabel, StatLabelProps, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const StatLabel = (props: StatLabelProps) => (
  <ChakraStatLabel
    fontWeight="medium"
    isTruncated
    color={useColorModeValue('gray.500', 'gray.400')}
    {...props}
  />
)
