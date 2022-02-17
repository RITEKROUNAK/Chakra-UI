import {
  Flex,
  HStack,
  Text,
  useColorModeValue as mode,
  useControllableState,
} from '@chakra-ui/react'
import * as React from 'react'
import { Circle } from './Circle'

function useSwitch(props) {
  const [value, setValue] = useControllableState(props)
  const isYearly = value === 'yearly'
  const isMonthly = value === 'monthly'
  return {
    value,
    setValue,
    isMonthly,
    isYearly,
    buttonProps: {
      'aria-checked': isYearly,
      role: 'switch',
      style: {
        userSelect: 'none',
      },

      onClick() {
        const nextValue = value === 'yearly' ? 'monthly' : 'yearly'
        setValue(nextValue)
      },
    },
  }
}

export const DurationSwitch = (props) => {
  const { buttonProps, isMonthly, isYearly } = useSwitch(props)
  return (
    <HStack
      as="button"
      fontSize="2xl"
      fontWeight="semibold"
      spacing="4"
      display="inline-flex"
      {...buttonProps}
    >
      <Text color={isYearly ? mode('blue.600', 'blue.400') : undefined}>Annual</Text>
      <Flex
        align="center"
        justify={isYearly ? 'flex-start' : 'flex-end'}
        height="5"
        w="35px"
        rounded="full"
        px="2px"
        bg="blue.600"
      >
        <Circle layout />
      </Flex>
      <Text color={isMonthly ? mode('blue.600', 'blue.400') : undefined}>Monthly</Text>
    </HStack>
  )
}
