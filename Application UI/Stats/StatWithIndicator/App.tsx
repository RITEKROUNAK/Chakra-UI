import { Box, SimpleGrid, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { StatCard, StatCardProps } from './StatCard'

const data: StatCardProps['data'][] = [
  {
    label: 'Profit & Loss',
    value: '$7,650',
    change: -0.025,
    description: 'You made an extra $97 this week',
  },
  {
    label: 'Unique Opens',
    value: '83%',
    change: 0.001,
    description: 'Your email is getting opened!',
  },
  {
    label: 'Delivered',
    value: '60.67%',
    change: 0.12,
    description: 'You get more emails out this week',
  },
]

export const App = () => {
  return (
    <Box as="section" bg={mode('gray.50', 'gray.800')} p="10">
      <Box maxW="7xl" mx="auto" px={{ base: '6', md: '8' }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
          {data.map((stat, idx) => (
            <StatCard key={idx} data={stat} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}
