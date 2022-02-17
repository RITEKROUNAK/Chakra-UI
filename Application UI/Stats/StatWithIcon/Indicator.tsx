import { Box } from '@chakra-ui/react'
import * as React from 'react'
import { FiArrowDownLeft, FiArrowUpRight } from 'react-icons/fi'

interface IndicatorProps {
  type: 'up' | 'down'
}

const types = {
  up: { icon: FiArrowUpRight, color: 'green.500' },
  down: { icon: FiArrowDownLeft, color: 'red.500' },
}

export const Indicator = (props: IndicatorProps) => {
  const { type } = props
  const { color, icon } = types[type]
  return <Box as={icon} fontSize="lg" color={color} />
}
