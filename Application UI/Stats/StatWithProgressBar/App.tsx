import { Box, SimpleGrid, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { StatCard } from './StatCard'
import { data } from './_data'

export const App = () => {
  return (
    <Box as="section" bg={mode('gray.50', 'gray.800')} p="8">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: '2', md: '4', lg: '8' }}>
          {data.map((stat) => (
            <StatCard data={stat} key={stat.id} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}
