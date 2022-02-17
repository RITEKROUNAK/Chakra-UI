import {
  Box,
  HStack,
  Text,
  useCheckbox,
  UseCheckboxProps,
  useColorModeValue as mode,
  useId,
} from '@chakra-ui/react'
import * as React from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import { CheckboxBox } from './CheckboxBox'

interface ButtonCheckboxProps extends UseCheckboxProps {
  icon: React.ReactElement
  title: string
  description: string
  price: string
  children: React.ReactNode
}

export const ButtonCheckbox = (props: ButtonCheckboxProps) => {
  const { icon, title, description, price, ...rest } = props
  const { getCheckboxProps, getInputProps, getLabelProps, state } = useCheckbox(rest)
  const id = useId()

  return (
    <label {...getLabelProps()}>
      <input {...getInputProps()} aria-labelledby={id} />
      <CheckboxBox {...getCheckboxProps()} id={id}>
        <HStack spacing="4">
          <Box
            data-checked={state.isChecked ? '' : undefined}
            fontSize="2xl"
            _checked={{
              color: mode('blue.500', 'blue.300'),
            }}
            color={mode('gray.300', 'whiteAlpha.400')}
          >
            {state.isChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          </Box>
          <Box fontSize="3xl">{icon}</Box>
          <Box flex="1">
            <Text fontWeight="bold">{title}</Text>
            <Text fontSize="sm">{description}</Text>
          </Box>
          <Box fontWeight="bold" color={mode('blue.600', 'blue.400')}>
            {price}
          </Box>
        </HStack>
      </CheckboxBox>
    </label>
  )
}
