import { Box, HStack, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { CallToActionLink } from './CallToActionLink'
import { CloseButton } from './CloseButton'

export const App = () => (
  <Box as="section" pt="8" pb="12">
    <Box
      bgGradient="linear(to-r, blue.500, purple.500)"
      color="white"
      py="3"
      px={{ base: '3', md: '6', lg: '8' }}
    >
      <HStack spacing="3">
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          justifyContent="center"
          alignItems="center"
          spacing={{ base: '3', md: '6' }}
          width="full"
        >
          <Text>
            <b>Did you buy a license yet? </b>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
          </Text>
          <CallToActionLink textAlign="center" width={{ base: 'full', sm: 'auto' }}>
            Check it out
          </CallToActionLink>
        </Stack>
        <CloseButton alignSelf={{ base: 'self-start', sm: 'initial' }} aria-label="Close banner" />
      </HStack>
    </Box>
  </Box>
)
