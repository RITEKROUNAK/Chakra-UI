import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import * as React from 'react'

export const GridItemAspectRatioSelect = (props) => (
  <FormControl>
    <FormLabel>Aspect Ratio</FormLabel>
    <Select {...props}>
      <option value={1}>1 / 1</option>
      <option value={4 / 3}>4 / 3</option>
      <option value={16 / 9}>16 / 9</option>
    </Select>
  </FormControl>
)
