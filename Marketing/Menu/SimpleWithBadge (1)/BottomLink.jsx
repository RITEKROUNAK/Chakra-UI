import { HStack, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

export const BottomLink = (props) => {
  const { icon, children, ...rest } = props
  return (
    <HStack
      justify="center"
      as="a"
      href="#"
      py="4"
      flex="1"
      _hover={{
        bg: mode('gray.50', 'gray.600'),
      }}
      {...rest}
    >
      {icon}
      <span>{children}</span>
    </HStack>
  )
}
