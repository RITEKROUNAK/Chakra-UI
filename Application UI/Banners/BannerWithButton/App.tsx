import { BellIcon } from '@chakra-ui/icons'
import { Box, HStack, Icon, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { BannerLink } from './BannerLink'

export const App = () => (
  <Box as="section" pt="8" pb="12">
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      justifyContent="center"
      alignItems="center"
      py="3"
      px={{ base: '3', md: '6', lg: '8' }}
      color="white"
      bg={useColorModeValue('blue.600', 'blue.400')}
    >
      <HStack spacing="3">
        <Icon as={BellIcon} fontSize="2xl" h="10" />
        <Text fontWeight="medium" marginEnd="2">
          Confirm your email. Check your email. We&apos;ve send a message to <b>sample@gmail.com</b>
        </Text>
      </HStack>
      <BannerLink w={{ base: 'full', sm: 'auto' }} flexShrink={0}>
        Resend email
      </BannerLink>
    </Stack>
  </Box>
)
