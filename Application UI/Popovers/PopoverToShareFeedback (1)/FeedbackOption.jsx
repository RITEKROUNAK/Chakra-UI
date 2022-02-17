import { Circle, useColorModeValue, useRadio } from '@chakra-ui/react'
import * as React from 'react'

export const FeedbackOption = (props) => {
  const { isChecked, ...rest } = props
  const { getInputProps, getCheckboxProps, getLabelProps } = useRadio(props)
  return (
    <label {...getLabelProps()}>
      <input {...getInputProps()} />
      <Circle
        borderWidth="1px"
        size="8"
        fontSize="xl"
        transition="all 0.2s"
        cursor="pointer"
        _hover={{
          transform: 'scale(1.125)',
        }}
        _checked={{
          transform: 'scale(1.125)',
          borderColor: useColorModeValue('blue.500', 'blue.300'),
        }}
        {...getCheckboxProps(rest)}
      />
    </label>
  )
}
