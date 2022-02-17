import { FormControl, FormLabel } from '@chakra-ui/react'
import React from 'react'
import { Input } from './Input'

export const NameTextField = (props) => {
  return (
    <FormControl id="name">
      <FormLabel>Name</FormLabel>
      <Input type="text" {...props} />
    </FormControl>
  )
}
