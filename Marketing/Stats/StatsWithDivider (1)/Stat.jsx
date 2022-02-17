import { Box, Stack, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const Stat = (props) => {
  const { title, value, ...rest } = props
  return (
    <Stack direction="column-reverse" maxW="12rem" mx="auto" as="dl" textAlign="center" {...rest}>
      <Box as="dt" color={useColorModeValue('gray.600', 'whiteAlpha.700')} fontWeight="medium">
        {title}
      </Box>
      <Box
        as="dd"
        fontSize="6xl"
        fontWeight="extrabold"
        color={useColorModeValue('blue.500', 'blue.300')}
      >
        {value}
      </Box>
    </Stack>
  )
}
