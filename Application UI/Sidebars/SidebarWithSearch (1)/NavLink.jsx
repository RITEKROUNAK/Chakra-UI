import { HStack, Icon, Link, useColorModeValue as mode, Text } from '@chakra-ui/react'
import * as React from 'react'

export const NavLink = (props) => {
  const { icon, isActive, label, ...rest } = props
  return (
    <Link
      display="block"
      py={2}
      px={3}
      borderRadius="md"
      transition="all 0.3s"
      fontWeight="medium"
      lineHeight="1.5rem"
      aria-current={isActive ? 'page' : undefined}
      color={mode('blackAlpha.800', 'whiteAlpha.800')}
      _hover={{
        bg: mode('gray.100', 'gray.700'),
        color: mode('black', 'white'),
      }}
      _activeLink={{
        bg: mode('blue.500', 'blue.300'),
        color: mode('white', 'black'),
      }}
      {...rest}
    >
      <HStack spacing={4}>
        <Icon as={icon} boxSize="20px" />
        <Text as="span">{label}</Text>
      </HStack>
    </Link>
  )
}
