import { Stack, useRadioGroup, UseRadioGroupProps } from '@chakra-ui/react'
import * as React from 'react'
import { ButtonRadio } from './ButtonRadio'

interface ButtonRadioGroupProps extends UseRadioGroupProps {
  options: Array<{
    label: string
    value: string
    description: string
    icon: React.ReactElement
  }>
}

export const ButtonRadioGroup = (props: ButtonRadioGroupProps) => {
  const { options, ...rest } = props
  const { getRadioProps, getRootProps } = useRadioGroup(rest)
  return (
    <Stack
      justify="center"
      direction={{ base: 'column', md: 'row' }}
      spacing="3"
      {...getRootProps()}
    >
      {options.map((option) => (
        <ButtonRadio
          key={option.value}
          icon={option.icon}
          description={option.description}
          label={option.label}
          {...getRadioProps({ value: option.value })}
        />
      ))}
    </Stack>
  )
}
