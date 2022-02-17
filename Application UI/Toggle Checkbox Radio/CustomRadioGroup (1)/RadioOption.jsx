import { Square, useColorModeValue as mode, useId, useRadio } from '@chakra-ui/react'
import * as React from 'react'

export const RadioOption = (props) => {
  const { getInputProps, getCheckboxProps, getLabelProps } = useRadio(props)
  const id = useId()
  return (
    <label {...getLabelProps()}>
      <input {...getInputProps()} aria-labelledby={id} />
      <Square
        id={id}
        rounded="lg"
        fontWeight="bold"
        size={{
          base: '10',
          md: '12',
        }}
        borderWidth="1px"
        transition="all 0.2s"
        cursor="pointer"
        _hover={{
          bg: mode('gray.100', 'whiteAlpha.200'),
        }}
        _active={{
          bg: mode('gray.200', 'whiteAlpha.300'),
        }}
        _checked={{
          bg: mode('blue.500', 'blue.300'),
          color: mode('white', 'black'),
        }}
        _focus={{
          shadow: 'outline',
        }}
        {...getCheckboxProps(props)}
      />
    </label>
  )
}
