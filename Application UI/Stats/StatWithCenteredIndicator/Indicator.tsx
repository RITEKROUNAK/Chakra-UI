import { Box, HStack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { HiArrowDown, HiArrowUp } from 'react-icons/hi'

interface IndicatorProps {
  type: 'up' | 'down'
  value: string | number
}

const types = {
  up: { icon: HiArrowUp, colorScheme: 'green' },
  down: { icon: HiArrowDown, colorScheme: 'red' },
}

export const Indicator = (props: IndicatorProps) => {
  const { type, value } = props
  const { colorScheme: c, icon } = types[type]

  return (
    <HStack color={mode(`${c}.500`, `${c}.300`)} fontWeight="bold" justify="center" spacing="1">
      <Box
        aria-hidden
        color="currentcolor"
        as={icon}
        position="relative"
        top={type === 'down' ? 'px' : undefined}
      />
      <Box srOnly>
        Value is {type} by {value}
      </Box>
      <Text fontSize="sm" ms="1">
        {value}
      </Text>
    </HStack>
  )
}
