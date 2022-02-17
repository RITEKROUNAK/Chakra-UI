import { Box, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

export const FieldGroup = (props) => {
  const { title, description, ...boxProps } = props
  return (
    <Box>
      <Text fontWeight="semibold">{title}</Text>
      {description && (
        <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
          {description}
        </Text>
      )}
      <Box pt="5" {...boxProps} />
    </Box>
  )
}
