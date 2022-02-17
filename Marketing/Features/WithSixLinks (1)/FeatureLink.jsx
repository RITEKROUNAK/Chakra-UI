import { Box, HStack, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { RightArrow } from './App'

export const FeatureLink = (props) => {
  const { children, ...rest } = props
  return (
    <HStack as="a" align="center" fontSize="md" className="group" cursor="pointer" {...rest}>
      <Box fontWeight="semibold">{children}</Box>
      <RightArrow
        color={mode('blue.500', 'blue.400')}
        fontSize="sm"
        transition="transform 0.2s"
        pos="relative"
        top="2px"
        _groupHover={{
          transform: 'translateX(2px)',
        }}
      />
    </HStack>
  )
}
