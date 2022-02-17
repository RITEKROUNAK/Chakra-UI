import {
  Box,
  Center,
  createIcon,
  Flex,
  Text,
  useRadio,
  useRadioGroup,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { AnimateSharedLayout } from 'framer-motion'
import * as React from 'react'
import { ActiveIndicator } from './ActiveIndicator'
const CurvedLine = createIcon({
  viewBox: '0 0 38 20',
  path: (
    <path
      fill="none"
      d="M1.5 18.5H21C29.8366 18.5 37 11.3366 37 2.5V1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
})

export const RadioButton = (props) => {
  const { getInputProps, getCheckboxProps, getLabelProps, state } = useRadio(props)
  return (
    <Box as="label" pos="relative" {...getLabelProps()}>
      <input {...getInputProps()} />
      <Center
        {...getCheckboxProps()}
        cursor="pointer"
        pos="relative"
        zIndex={1}
        h="12"
        px="8"
        textAlign="center"
        transition="all 0.2s"
        minW="8rem"
        fontWeight="medium"
        _checked={{
          color: mode('blue.600', 'blue.200'),
          fontWeight: 'bold',
        }}
      >
        {props.children}
      </Center>
      {state.isChecked && (
        <ActiveIndicator
          bg={mode('white', 'gray.600')}
          shadow="md"
          layoutId="highlight"
          transition={{
            duration: '0.1',
          }}
        />
      )}
    </Box>
  )
}
export const DurationSwitcher = (props) => {
  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: 'monthly',
  })
  return (
    <Box pos="relative">
      <AnimateSharedLayout>
        <Flex
          display="inline-flex"
          align="center"
          bg={mode('gray.200', 'gray.700')}
          rounded="full"
          {...getRootProps(props)}
        >
          <RadioButton
            {...getRadioProps({
              value: 'monthly',
            })}
          >
            Monthly
          </RadioButton>
          <RadioButton
            {...getRadioProps({
              value: 'yearly',
            })}
          >
            Yearly
          </RadioButton>
        </Flex>
      </AnimateSharedLayout>
      <Box color={mode('blue.600', 'blue.400')} pos="absolute" right="-7rem" top="6">
        <Text lineHeight="1" fontWeight="bold">
          Save 18%
        </Text>
        <CurvedLine fontSize="2.5rem" pos="relative" right="8" bottom="1" />
      </Box>
    </Box>
  )
}
