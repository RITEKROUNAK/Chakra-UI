import { Box, Heading, HStack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { Indicator } from './Indicator'

export interface StatCardProps {
  data: {
    label: string
    value: string | number
    change: number
    description?: string
  }
}

export function StatCard(props: StatCardProps) {
  const { label, value, change, description } = props.data

  const isNegative = change < 0
  const changeText = `${change * 100}%`

  return (
    <Box
      px="6"
      py="4"
      bg={mode('white', 'gray.700')}
      borderRadius="8px"
      boxShadow="md"
      color={mode('gray.800', 'white')}
    >
      <Text fontWeight="medium" fontSize="sm">
        {label}
      </Text>
      <HStack spacing="4" mt="2">
        <Heading as="h4" size="xl" lineHeight="1" letterSpacing="tight">
          {value}
        </Heading>
        <Indicator type={isNegative ? 'down' : 'up'} value={changeText} />
      </HStack>
      {description && (
        <Text fontSize="sm" mt="4" color={mode('gray.500', 'gray.400')}>
          {description}
        </Text>
      )}
    </Box>
  )
}
