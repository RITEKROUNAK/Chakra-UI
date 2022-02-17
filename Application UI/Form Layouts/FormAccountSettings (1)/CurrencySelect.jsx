import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import * as React from 'react'

export const CurrencySelect = (props) => (
  <FormControl id="currency">
    <FormLabel>Display currency</FormLabel>
    <Select maxW="2xs" {...props}>
      <option>USD ($)</option>
      <option>AED (dh)</option>
      <option>EUR (€)</option>
    </Select>
  </FormControl>
)
