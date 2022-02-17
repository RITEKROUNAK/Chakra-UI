import { HStack, StackProps, useRadioGroup } from '@chakra-ui/react'
import * as React from 'react'
import { RadioOption } from './RadioOption'

interface RadioGroupProps extends Omit<StackProps, 'onChange'> {
  name: string
  options: string[]
  onChange: (value: string) => void
}

export const RadioGroup = (props: RadioGroupProps) => {
  const { name, options, onChange, ...rest } = props
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    onChange,
  })

  return (
    <HStack spacing={{ base: 2, md: 4 }} {...getRootProps(rest)}>
      {options.map((value) => (
        <RadioOption key={value} {...getRadioProps({ value })}>
          {value}
        </RadioOption>
      ))}
    </HStack>
  )
}
