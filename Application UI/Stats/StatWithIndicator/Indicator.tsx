import { Badge, Box, Text } from '@chakra-ui/react'
import * as React from 'react'
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs'

interface IndicatorProps {
  type: 'up' | 'down'
  value: string | number
}

const types = {
  up: { icon: BsCaretUpFill, colorScheme: 'green' },
  down: { icon: BsCaretDownFill, colorScheme: 'red' },
}

export const Indicator = (props: IndicatorProps) => {
  const { type, value } = props
  return (
    <Badge
      display="flex"
      alignItems="center"
      variant="solid"
      colorScheme={types[type].colorScheme}
      rounded="base"
      px="1"
      spacing="0"
    >
      <Box
        aria-hidden
        color="currentcolor"
        as={types[type].icon}
        pos="relative"
        top={type === 'down' ? 'px' : undefined}
      />
      <Box srOnly>
        Value is {type} by {value}
      </Box>
      <Text fontSize="sm" color="white" marginStart="1">
        {value}
      </Text>
    </Badge>
  )
}
