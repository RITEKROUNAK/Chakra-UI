import { Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const HeadingGroup = (props) => {
  const { title, description, ...stackProps } = props
  return (
    <Stack spacing="1" {...stackProps}>
      <Heading size="md" fontWeight="semibold">
        {title}
      </Heading>
      <Text color={useColorModeValue('gray.600', 'gray.400')}>{description}</Text>
    </Stack>
  )
}
