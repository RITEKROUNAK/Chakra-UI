import { Link, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export const SocialLink = (props) => {
  const { href, children, icon: SocialIcon, ...rest } = props
  return (
    <Link
      flex="1"
      display="flex"
      py="3"
      alignItems="center"
      justifyContent="center"
      fontWeight="bold"
      fontSize="sm"
      isExternal
      color={useColorModeValue('blue.600', 'blue.300')}
      href={href}
      _hover={{
        bg: useColorModeValue('gray.50', 'gray.700'),
      }}
      {...rest}
    >
      <SocialIcon aria-hidden />
      <Text ms="2">{children}</Text>
    </Link>
  )
}
