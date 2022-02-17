import { Badge, Box, chakra, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

interface MenuItemProps {
  href: string
  title: string
  isNew?: boolean
  children?: React.ReactNode
}

export const MenuItem = (props: MenuItemProps) => {
  const { title, children, href, isNew } = props
  return (
    <chakra.a
      display="block"
      px="5"
      py="3"
      href={href}
      rounded="lg"
      transition="0.2s background"
      _hover={{ bg: mode('gray.50', 'gray.600') }}
    >
      <Box as="dl">
        <Text
          display="inline-block"
          as="dt"
          fontWeight="semibold"
          transition="0.2s all"
          _groupHover={{ color: 'blue.500' }}
        >
          {title}
        </Text>
        {isNew && (
          <Badge aria-hidden variant="solid" fontSize="10px" mt="-1" ms="2" colorScheme="blue">
            New
          </Badge>
        )}
        <Text as="dd" fontSize="sm" color={mode('gray.600', 'gray.400')}>
          {children}
        </Text>
      </Box>
    </chakra.a>
  )
}
