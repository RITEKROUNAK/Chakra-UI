import { Box, BoxProps, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

interface StatCardProps extends BoxProps {
  title: string
  value: string
  children: string
}
export const StatCard = (props: StatCardProps) => {
  const { title, value, children } = props
  return (
    <Box as="dl" bg={useColorModeValue('white', 'gray.700')} p="6" rounded="lg" shadow="md">
      <Text
        as="dt"
        color={useColorModeValue('blue.500', 'blue.300')}
        fontSize="sm"
        fontWeight="bold"
      >
        {title}
      </Text>
      <Text as="dd" fontSize="5xl" fontWeight="extrabold" lineHeight="1" my="4">
        {value}
      </Text>
      <Text as="dd" color={useColorModeValue('gray.600', 'white')}>
        {children}
      </Text>
    </Box>
  )
}
