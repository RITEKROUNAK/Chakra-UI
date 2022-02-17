import {
  Badge,
  Box,
  Circle,
  Heading,
  HStack,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'

interface StatProps {
  icon: React.ReactElement
  accentColor: string
  data: {
    change: number
    label: string
    value: string
  }
}

export const StatCard = (props: StatProps) => {
  const { accentColor, icon, data } = props
  const { label, value, change } = data

  const isNegative = change < 0

  return (
    <Stack mx="auto" spacing="3">
      <Box color={mode('gray.600', 'gray.400')} fontWeight="medium">
        {label}
      </Box>
      <HStack spacing="3">
        <Circle flexShrink={0} size="6" bg={accentColor} color="white">
          {icon}
        </Circle>
        <Heading as="h1" size="xl" fontWeight="bold">
          {value}
        </Heading>
      </HStack>
      <HStack>
        <Text>Past 7 days</Text>
        <Badge fontSize="sm" px="2" rounded="full" colorScheme={isNegative ? 'red' : 'green'}>
          {change}%
        </Badge>
      </HStack>
    </Stack>
  )
}
