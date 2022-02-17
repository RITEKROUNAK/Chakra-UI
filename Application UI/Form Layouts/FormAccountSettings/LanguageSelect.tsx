import { FormControl, FormLabel, Select, SelectProps } from '@chakra-ui/react'
import * as React from 'react'

export const LanguageSelect = (props: SelectProps) => (
  <FormControl id="language">
    <FormLabel>Display Language</FormLabel>
    <Select maxW="2xs" {...props}>
      <option>English</option>
      <option>Hebrew</option>
      <option>Arabic</option>
    </Select>
  </FormControl>
)
