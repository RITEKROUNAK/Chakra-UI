import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { Feature } from './Feature'
import { InvitationForm } from './InvitationForm'

export const App = () => (
  <Box
    as="section"
    py={{
      lg: '12',
    }}
  >
    <Box
      bg="blue.600"
      rounded={{
        lg: '2xl',
      }}
      maxW="5xl"
      mx="auto"
      px={{
        base: '4',
        sm: '6',
        lg: '8',
      }}
      py={{
        base: '12',
        sm: '16',
      }}
    >
      <Box maxW="xl" mx="auto" color="white" textAlign="center">
        <Text mb="4" fontSize="lg" color="whiteAlpha.800" fontWeight="semibold">
          Grow your engineering team
        </Text>
        <Heading as="h2" mb="8" size="xl" fontWeight="extrabold" letterSpacing="tight">
          Start recruiting like the best and find perfect candidates in no time.
        </Heading>
        <InvitationForm />
        <Stack
          spacing={{
            base: '3',
            md: '6',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}
          mt="4"
          justify="center"
          align="center"
        >
          <Feature>Attract the best candiates</Feature>
          <Feature>Post multiple jobs in one click</Feature>
        </Stack>
      </Box>
    </Box>
  </Box>
)
