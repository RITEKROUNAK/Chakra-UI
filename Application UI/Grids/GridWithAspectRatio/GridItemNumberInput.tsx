import { QuestionIcon } from '@chakra-ui/icons'
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberInputProps,
  FormControl,
  FormLabel,
  Tooltip,
  HStack,
} from '@chakra-ui/react'
import * as React from 'react'

export const GridItemNumberInput = (props: NumberInputProps) => (
  <FormControl>
    <HStack mb="2">
      <FormLabel margin="0">Items</FormLabel>
      <Tooltip
        label="The grid is designed to use as much space as possible, respecting the aspect ratio and minimum length of its children. If it is not possible to display all items in the viewport, a vertical scrollbar is displayed."
        fontSize="md"
      >
        <QuestionIcon />
      </Tooltip>
    </HStack>
    <NumberInput {...props}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  </FormControl>
)
