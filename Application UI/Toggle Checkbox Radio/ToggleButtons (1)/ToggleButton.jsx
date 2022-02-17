import { Box, IconButton, useColorModeValue, useId, useRadio } from '@chakra-ui/react'
import * as React from 'react'

export const ToggleButton = (props) => {
  const { radioProps, ...rest } = props
  const { getInputProps, getCheckboxProps, getLabelProps } = useRadio(radioProps)
  const id = useId(undefined, 'toggle-button')
  const inputProps = getInputProps()
  const checkboxProps = getCheckboxProps()
  const labelProps = getLabelProps()
  return (
    <Box as="label" cursor="pointer" {...labelProps}>
      <input {...inputProps} aria-labelledby={id} />
      <IconButton
        as="div"
        id={id}
        color={useColorModeValue('gray.600', 'whiteAlpha.700')}
        _checked={{
          color: useColorModeValue('inherit', 'whiteAlpha.900'),
          bg: useColorModeValue('gray.200', 'whiteAlpha.300'),
        }}
        {...checkboxProps}
        {...rest}
      />
    </Box>
  )
}
