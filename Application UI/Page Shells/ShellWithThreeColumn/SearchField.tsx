import {
  Input,
  InputGroup,
  InputGroupProps,
  InputLeftElement,
  InputRightElement,
  Square,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import * as React from 'react'

export const SearchField = (props: InputGroupProps) => {
  return (
    <InputGroup size="sm" {...props}>
      <InputLeftElement pointerEvents="none">
        <BsSearch opacity={0.5} />
      </InputLeftElement>
      <InputRightElement>
        <Square
          rounded="base"
          fontSize="xs"
          borderWidth="1px"
          w="5"
          h="5"
          bg={mode('gray.100', 'gray.800')}
          color="gray.500"
        >
          /
        </Square>
      </InputRightElement>
      <Input
        rounded="md"
        placeholder="Search"
        bg={mode('white', 'gray.900')}
        _placeholder={{
          opacity: 1,
          color: mode('gray.400', 'gray.500'),
        }}
      />
    </InputGroup>
  )
}
