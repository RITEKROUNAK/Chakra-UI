import { Box, HStack, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'

interface StatProps {
  icon: React.ElementType
  title: string
  description: string
}

export const Stat = (props: StatProps) => {
  const { icon, title, description } = props
  return (
    <Stack>
      <HStack>
        <Box as={icon} fontSize="3xl" />
        <Text fontSize="2xl" fontWeight="extrabold">
          {title}
        </Text>
      </HStack>
      <Text fontSize="sm" maxW="40">
        {description}
      </Text>
    </Stack>
  )
}
