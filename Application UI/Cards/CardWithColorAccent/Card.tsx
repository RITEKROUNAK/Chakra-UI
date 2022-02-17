import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const Card = (props: BoxProps) => (
  <Box
    bg={useColorModeValue('white', 'gray.700')}
    shadow="base"
    maxW="2xl"
    mx="auto"
    px={{ base: 4, md: 8 }}
    pt="6"
    pb="8"
    borderTopWidth="2px"
    borderColor={useColorModeValue('gray.300', 'gray.500')}
    borderTopColor={useColorModeValue('blue.500', 'blue.300')}
    borderBottomRadius={{ base: 'none', sm: 'base' }}
    {...props}
  />
)
