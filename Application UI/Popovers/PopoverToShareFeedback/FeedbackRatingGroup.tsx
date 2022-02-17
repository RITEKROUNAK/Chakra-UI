import { HStack, StackProps, useRadioGroup } from '@chakra-ui/react'
import * as React from 'react'
import { FeedbackOption } from './FeedbackOption'

interface RadioGroupProps extends Omit<StackProps, 'onChange'> {
  name: string
  options: string[]
  onChange: (value: string) => void
}

export const FeedbackRadioGroup = (props: RadioGroupProps) => {
  const { name, options, onChange, ...rest } = props
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    onChange,
  })

  return (
    <HStack {...getRootProps(rest)}>
      {options.map((value) => (
        <FeedbackOption key={value} {...getRadioProps({ value })}>
          {value}
        </FeedbackOption>
      ))}
    </HStack>
  )
}
