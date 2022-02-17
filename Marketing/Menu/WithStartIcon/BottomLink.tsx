import { HStack, StackProps, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

interface BottomLinkProps extends StackProps {
  icon: React.ReactElement
  children: React.ReactNode
}

export const BottomLink = (props: BottomLinkProps) => {
  const { icon, children, ...rest } = props
  return (
    <HStack
      justify="center"
      as="a"
      href="#"
      py="4"
      flex="1"
      transition="all 0.2s"
      {...rest}
      _hover={{ bg: mode('gray.50', 'gray.600'), color: mode('inherit', 'white') }}
    >
      {icon}
      <span>{children}</span>
    </HStack>
  )
}
