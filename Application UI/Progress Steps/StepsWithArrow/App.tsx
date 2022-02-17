import { Box, HStack } from '@chakra-ui/react'
import * as React from 'react'
import { Step } from './Step'

export const App = () => (
  <Box mx="auto" maxW="3xl" py="10" px={{ base: '6', md: '8' }}>
    <nav aria-label="Progress steps">
      <HStack as="ol" listStyleType="none" spacing="0">
        <Step>View Job</Step>
        <Step isCurrent>Invite</Step>
        <Step>Review</Step>
        <Step>Hire (3)</Step>
      </HStack>
    </nav>
  </Box>
)
