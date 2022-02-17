import { HStack, useRadioGroup } from '@chakra-ui/react'
import * as React from 'react'
import { RadioOption } from './RadioOption'

export const RadioGroup = (props) => {
  const { name, options, onChange, ...rest } = props
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    onChange,
  })
  return (
    <HStack
      spacing={{
        base: 2,
        md: 4,
      }}
      {...getRootProps(rest)}
    >
      {options.map((value) => (
        <RadioOption
          key={value}
          {...getRadioProps({
            value,
          })}
        >
          {value}
        </RadioOption>
      ))}
    </HStack>
  )
}
