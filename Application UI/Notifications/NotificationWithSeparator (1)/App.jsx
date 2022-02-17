import { Box, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { Notification } from './Notification'
import { NotificationButton } from './NotificationButton'

export const App = () => (
  <Box
    as="section"
    pt="8"
    pb="20"
    px={{
      base: '4',
      md: '8',
    }}
    bg={useColorModeValue('gray.50', 'inherit')}
  >
    <Flex direction="row-reverse">
      <Notification
        primaryAction={<NotificationButton colorScheme="blue">Update</NotificationButton>}
        secondaryAction={<NotificationButton>Close</NotificationButton>}
      >
        <Stack spacing="1">
          <Heading as="h3" fontSize="md">
            Update Available
          </Heading>
          <Text fontSize="sm">
            A new version is available. Please upgrade for the best experience.
          </Text>
        </Stack>
      </Notification>
    </Flex>
  </Box>
)
