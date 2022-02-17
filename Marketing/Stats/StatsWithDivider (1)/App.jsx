import { Box, Heading, Stack, StackDivider, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { Stat } from './Stat'

export const App = () => (
  <Box
    as="section"
    maxW="7xl"
    mx="auto"
    px={{
      base: '6',
      md: '8',
    }}
    py={{
      base: '12',
      md: '20',
    }}
  >
    <Box mb="12" textAlign="center">
      <Heading size="xl" fontWeight="extrabold" lineHeight="normal">
        Less overhead, more collaboration
      </Heading>
      <Text
        fontSize="lg"
        mt="4"
        fontWeight="medium"
        color={useColorModeValue('gray.600', 'whiteAlpha.700')}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim.
      </Text>
    </Box>
    <Stack
      spacing="8"
      direction={{
        base: 'column',
        md: 'row',
      }}
      divider={<StackDivider />}
    >
      <Stat title="Amet minim mollit non deserunt ullamco." value="85%" />
      <Stat title="Amet minim mollit non deserunt ullamco." value="3/4" />
      <Stat title="Amet minim mollit non deserunt ullamco." value="45K" />
    </Stack>
  </Box>
)
