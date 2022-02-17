import { HStack, Icon, Link, LinkProps, useColorModeValue as mode, Text } from '@chakra-ui/react'
import * as React from 'react'

interface NavLinkProps extends LinkProps {
  isActive?: boolean
  label: string
  icon: React.ElementType
}

export const NavLink = (props: NavLinkProps) => {
  const { icon, isActive, label, ...rest } = props
  return (
    <Link
      display="block"
      py="2"
      px="3"
      borderRadius="md"
      transition="all 0.3s"
      fontWeight="medium"
      fontSize="sm"
      userSelect="none"
      aria-current={isActive ? 'page' : undefined}
      color={mode('gray.700', 'gray.400')}
      _hover={{
        bg: mode('gray.100', 'gray.700'),
        color: mode('gray.900', 'white'),
      }}
      _activeLink={{
        bg: mode('gray.200', 'gray.700'),
        color: 'inherit',
      }}
      {...rest}
    >
      <HStack spacing="4">
        <Icon as={icon} fontSize="lg" opacity={0.64} />
        <Text as="span">{label}</Text>
      </HStack>
    </Link>
  )
}
