import { Box, HStack, StackProps, Text } from '@chakra-ui/react'
import * as React from 'react'
import { HiCheckCircle } from 'react-icons/hi'

export const Feature = (props: StackProps) => {
  const { children, ...stackProps } = props
  return (
    <HStack {...stackProps}>
      <Box as={HiCheckCircle} color="yellow.400" fontSize="xl" />
      <Text color="white" fontSize="sm" fontWeight="semibold">
        {children}
      </Text>
    </HStack>
  )
}
