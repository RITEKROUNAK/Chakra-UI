import { FormControl, FormLabel, InputProps } from '@chakra-ui/react'
import React from 'react'
import { Input } from './Input'

export const EmailTextField = (props: InputProps) => {
  return (
    <FormControl id="email">
      <FormLabel>Email Address</FormLabel>
      <Input type="email" {...props} />
    </FormControl>
  )
}
