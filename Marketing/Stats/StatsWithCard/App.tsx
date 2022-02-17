import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import * as React from 'react'
import { StatCard } from './StatCard'

export const App = () => {
  return (
    <Box as="section" pb="20">
      <Box bg="blue.600" pt="20" pb="20">
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <Box mb="16" color="white" maxW="xl">
            <Heading size="2xl" letterSpacing="tight" fontWeight="extrabold" lineHeight="normal">
              Trusted by companies from US love Software
            </Heading>
            <Text fontSize="lg" mt="4" fontWeight="medium">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim.
            </Text>
          </Box>
        </Box>
      </Box>
      <Box mt="-20">
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="6">
            <StatCard title="Annual Orders" value="$351M">
              Amet minim mollit non deserunt ullamco.
            </StatCard>
            <StatCard title="Customers" value="5.75K">
              Amet minim mollit non deserunt ullamco.
            </StatCard>
            <StatCard title="Transactions" value="2.56M">
              Amet minim mollit non deserunt ullamco.
            </StatCard>
            <StatCard title="New Business" value="400+">
              Amet minim mollit non deserunt ullamco.
            </StatCard>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}
