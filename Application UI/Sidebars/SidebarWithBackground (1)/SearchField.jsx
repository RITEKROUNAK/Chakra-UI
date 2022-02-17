import { SearchIcon } from '@chakra-ui/icons'
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import * as React from 'react'

export const SearchField = (props) => {
  return (
    <InputGroup {...props}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon opacity={0.82} />
      </InputLeftElement>
      <Input
        placeholder="Search"
        bg="whiteAlpha.400"
        border={0}
        focusBorderColor="whiteAlpha.800"
        _placeholder={{
          color: 'whiteAlpha.600',
        }}
      />
    </InputGroup>
  )
}
