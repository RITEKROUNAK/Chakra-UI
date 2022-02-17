import { Box, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { BiBarChartSquare, BiBriefcaseAlt, BiDollarCircle } from 'react-icons/bi'
import { StatCard } from './StatCard'

export const App = () => (
  <Box
    as="section"
    position="relative"
    maxW="7xl"
    mx="auto"
    px={{ base: '4', sm: '6' }}
    py={{ base: '8', lg: '16' }}
  >
    <Box maxW={{ base: '2xl', lg: 'unset' }} mx="auto" pl={{ lg: '10' }}>
      <Box textAlign="center" maxW="2xl" mx="auto">
        <Heading mt="6" fontSize={{ base: '3xl', sm: '5xl' }} fontWeight="extrabold">
          Deliver what your customers want every time
        </Heading>
        <Text
          color={useColorModeValue('gray.600', 'whiteAlpha.700')}
          fontWeight="medium"
          mt="4"
          fontSize="lg"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nihil ea rerum.
        </Text>
      </Box>
      <SimpleGrid mt="12" columns={{ base: 1, md: 3 }} spacing="6">
        <StatCard
          title="Trackable revenue generated across our portfolio"
          value="$33M"
          icon={<BiDollarCircle />}
        />
        <StatCard
          title="Average yearly growth rate across our clients"
          value="220%"
          icon={<BiBarChartSquare />}
        />
        <StatCard
          title="Increate in client’s creative output on average"
          value="10x"
          icon={<BiBriefcaseAlt />}
        />
      </SimpleGrid>
    </Box>
  </Box>
)
