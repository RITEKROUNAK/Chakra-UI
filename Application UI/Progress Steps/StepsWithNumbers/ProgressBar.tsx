import { AbsoluteCenter, AbsoluteCenterProps, Box, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

interface ProgressbarProps extends AbsoluteCenterProps {
  value: number
}

export const Progressbar = (props: ProgressbarProps) => {
  const { value, ...rest } = props
  return (
    <AbsoluteCenter
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      aria-valuetext={`Progress: ${value}%`}
      position="absolute"
      height="2"
      axis="vertical"
      bg={useColorModeValue('gray.100', 'gray.700')}
      width="full"
      {...rest}
    >
      <Box bg={useColorModeValue('blue.500', 'blue.300')} height="inherit" width={`${value}%`} />
    </AbsoluteCenter>
  )
}
