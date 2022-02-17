import { BoxProps, Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export const SocialLinkIcon = (props: BoxProps) => (
  <Box
    transition="all 0.2s"
    _hover={{ color: useColorModeValue('blue.700', 'blue.200') }}
    fontSize="lg"
    color={useColorModeValue('blue.600', 'blue.300')}
    {...props}
  />
)
