import { HStack, useRadioGroup } from '@chakra-ui/react'
import * as React from 'react'
import { FeedbackOption } from './FeedbackOption'

export const FeedbackRadioGroup = (props) => {
  const { name, options, onChange, ...rest } = props
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    onChange,
  })
  return (
    <HStack {...getRootProps(rest)}>
      {options.map((value) => (
        <FeedbackOption
          key={value}
          {...getRadioProps({
            value,
          })}
        >
          {value}
        </FeedbackOption>
      ))}
    </HStack>
  )
}
