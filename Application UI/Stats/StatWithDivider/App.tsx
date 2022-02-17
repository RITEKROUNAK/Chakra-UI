import { Box, Stack, StackDivider, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { HiCheckCircle, HiClock, HiExclamationCircle } from 'react-icons/hi'
import { StatCard } from './StatCard'

export const App = () => {
  return (
    <Box as="section" bg={mode('gray.50', 'gray.800')} p="6">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <Box bg={mode('white', 'gray.700')} p="10" rounded="xl" shadow="base">
          <Stack
            spacing="8"
            justify="space-between"
            direction={{ base: 'column', md: 'row' }}
            divider={<StackDivider />}
          >
            <StatCard
              accentColor="green.500"
              icon={<HiClock />}
              data={{ label: 'Total time today', value: '5h 40m', change: -2.1 }}
            />
            <StatCard
              accentColor="red.500"
              icon={<HiExclamationCircle />}
              data={{ label: 'Unproductive time', value: '1h 10m', change: 4.31 }}
            />
            <StatCard
              accentColor="cyan.500"
              icon={<HiCheckCircle />}
              data={{ label: 'Tasks completed', value: '40', change: -4.5 }}
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
