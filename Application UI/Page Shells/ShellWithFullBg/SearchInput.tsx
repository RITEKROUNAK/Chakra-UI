import { Input, InputGroup, InputGroupProps, InputLeftElement, InputProps } from '@chakra-ui/react'
import * as React from 'react'
import { BsSearch } from 'react-icons/bs'

interface SearchInputProps extends InputProps {
  rootProps?: InputGroupProps
}

export const SearchInput = (props: SearchInputProps) => {
  const { rootProps, ...rest } = props
  return (
    <InputGroup
      maxW="2xs"
      size="sm"
      variant="filled"
      display={{ base: 'none', lg: 'block' }}
      {...rootProps}
    >
      <InputLeftElement color="gray.400" pointerEvents="none">
        <BsSearch />
      </InputLeftElement>
      <Input {...rest} placeholder="Search" rounded="md" _placeholder={{ color: 'gray.400' }} />
    </InputGroup>
  )
}
