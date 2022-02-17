import { Heading, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { Stat } from './Stat'

export const App = () => (
  <Stack
    as="section"
    maxW="7xl"
    mx="auto"
    px={{ base: '6', md: '8' }}
    py={{ base: '12', md: '20' }}
    spacing="12"
  >
    <Stack maxW="xl" spacing="6">
      <Heading size="2xl" fontWeight="extrabold">
        Less overhead, more collaboration
      </Heading>
      <Text
        fontSize="lg"
        fontWeight="medium"
        color={useColorModeValue('gray.600', 'whiteAlpha.700')}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim.
      </Text>
    </Stack>
    <SimpleGrid mx="auto" spacing={{ base: '10', md: '20' }} columns={{ base: 1, md: 3 }}>
      <Stat
        title="Mobile revenue"
        value="+30%"
        accentColor={useColorModeValue('green.500', 'green.300')}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor.
      </Stat>
      <Stat
        title="New customers"
        value="34K"
        accentColor={useColorModeValue('blue.500', 'blue.300')}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor.
      </Stat>
      <Stat
        title="Last year’s revenue"
        value="$234K"
        accentColor={useColorModeValue('pink.500', 'pink.300')}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor.
      </Stat>
    </SimpleGrid>
  </Stack>
)
