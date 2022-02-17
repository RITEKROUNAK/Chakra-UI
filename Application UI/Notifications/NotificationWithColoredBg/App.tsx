import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { Notification } from './Notification'

export const App = () => (
  <Box
    as="section"
    pt="8"
    pb="20"
    px={{ base: '4', md: '8' }}
    bg={useColorModeValue('gray.50', 'inherit')}
  >
    <Flex direction="row-reverse">
      <Notification>
        <Stack spacing="1">
          <Heading as="h3" fontSize="md">
            Updates Available
          </Heading>
          <Text fontSize="sm">A new version is available. Please update your app.</Text>
          <HStack>
            <Button variant="link" size="sm" colorScheme="blue">
              Update
            </Button>
            <Button variant="link" size="sm">
              Close
            </Button>
          </HStack>
        </Stack>
      </Notification>
    </Flex>
  </Box>
)
