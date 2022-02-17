import { Box, Center } from '@chakra-ui/react'
import * as React from 'react'
import { FeedbackPopover } from './FeedbackPopover'

export const App = () => (
  <Box mx="auto" maxW="5xl" minH="sm" p={{ base: 4, sm: 6, md: 8 }}>
    <Center>
      <FeedbackPopover />
    </Center>
  </Box>
)
