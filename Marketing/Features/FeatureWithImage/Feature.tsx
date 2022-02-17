import { Box, HStack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

interface FeatureProps {
  icon: React.ElementType
  title: string
  children: React.ReactNode
}
export const Feature = (props: FeatureProps) => {
  const { icon, title, children } = props
  return (
    <Box>
      <HStack spacing="3" color={mode('blue.500', 'blue.300')}>
        <Box as={icon} fontSize="xl" />
        <Text fontWeight="extrabold" fontSize="lg">
          {title}
        </Text>
      </HStack>
      <Text mt="3">{children}</Text>
    </Box>
  )
}
