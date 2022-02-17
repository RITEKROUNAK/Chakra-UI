import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiSearch } from 'react-icons/fi'

export const App = () => {
  return (
    <Box p="8">
      <Box maxW="7xl" mx="auto">
        <Stack
          spacing="5"
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'flex-start', md: 'center' }}
        >
          <Stack>
            <Heading size="lg">Contacts</Heading>
            <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
              1-12 of 200 contacts
            </Text>
          </Stack>

          <HStack
            justify="flex-end"
            flex="1"
            w={{ base: 'full', md: 'auto' }}
            spacing={{ base: '2', md: '4' }}
          >
            <InputGroup maxW={{ md: '80' }} w="full">
              <InputRightElement color="gray.400">
                <FiSearch />
              </InputRightElement>
              <Input bg={mode('white', 'gray.800')} placeholder="Search for contact" />
            </InputGroup>
            <Button colorScheme="blue" flexShrink={0} fontWeight="bold" fontSize="sm">
              Add Contact
            </Button>
          </HStack>
        </Stack>
      </Box>
    </Box>
  )
}
