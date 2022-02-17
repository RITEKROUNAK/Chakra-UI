import { Box, SimpleGrid, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { data, icons } from './_data'
import { StatCard } from './StatCard'

export const App = () => {
  return (
    <Box as="section" bg={mode('gray.50', 'gray.800')} p="10">
      <Box maxW="7xl" mx="auto" px={{ base: '6', md: '8' }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="6">
          {data.map((stat, index) => {
            const { icon, color: accentColor } = icons[stat.symbol]
            return <StatCard icon={icon} accentColor={accentColor} key={index} data={stat} />
          })}
        </SimpleGrid>
      </Box>
    </Box>
  )
}
