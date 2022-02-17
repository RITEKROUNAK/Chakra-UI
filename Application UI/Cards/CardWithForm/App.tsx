import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa'

export const App = () => {
  return (
    <Box as="section" py="12" bg={mode('gray.100', 'inherit')}>
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ md: '8' }}>
        <Box
          maxW="xl"
          mx="auto"
          py="6"
          px="8"
          rounded={{ md: 'lg' }}
          bg={mode('white', 'gray.700')}
          shadow="base"
        >
          <Box mb="5">
            <Text as="h3" fontWeight="bold" fontSize="lg">
              Share Chakra UI with friends
            </Text>
            <Text fontSize="sm" mt="1" color={mode('gray.600', 'gray.200')}>
              Email friends who have never tried Chakra UI
            </Text>
          </Box>

          <Stack direction={{ base: 'column', md: 'row' }} mb="4">
            <Button
              variant="outline"
              flex={{ md: '1' }}
              leftIcon={<Box as={FaFacebook} color={mode('blue.500', 'blue.200')} />}
            >
              Facebook
            </Button>
            <Button
              variant="outline"
              flex={{ md: '1' }}
              leftIcon={<Box as={FaTwitter} color={mode('blue.500', 'blue.200')} />}
            >
              Twitter
            </Button>
            <Button
              variant="outline"
              flex={{ md: '1' }}
              leftIcon={<Box as={FaLinkedinIn} color={mode('blue.500', 'blue.200')} />}
            >
              LinkedIn
            </Button>
          </Stack>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              // submit logic goes here
            }}
          >
            <Stack direction={{ base: 'column', md: 'row' }} spacing="2">
              <FormControl id="email">
                <InputGroup>
                  <FormLabel srOnly>Enter email</FormLabel>
                  <InputLeftElement
                    pointerEvents="none"
                    fontSize="sm"
                    color={mode('gray.400', 'gray.600')}
                  >
                    <FaEnvelope />
                  </InputLeftElement>
                  <Input bg={mode('white', 'gray.800')} placeholder="Enter email address" />
                </InputGroup>
              </FormControl>
              <Button type="submit" colorScheme="blue" minW="24">
                Send
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </Box>
  )
}
