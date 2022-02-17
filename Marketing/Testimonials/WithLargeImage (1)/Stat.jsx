import { Box, HStack, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'

export const Stat = (props) => {
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
