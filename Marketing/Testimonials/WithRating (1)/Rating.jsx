import { Box, HStack } from '@chakra-ui/react'
import * as React from 'react'
import { FaStar } from 'react-icons/fa'

export const Rating = (props) => {
  const { value = 5, ...rest } = props
  return (
    <HStack {...rest}>
      {Array.from({
        length: 5,
      }).map((_, i) => {
        const fade = i + 1 > value
        return (
          <Box as={FaStar} color={fade ? 'whiteAlpha.500' : 'yellow.400'} fontSize="xl" key={i} />
        )
      })}
    </HStack>
  )
}
