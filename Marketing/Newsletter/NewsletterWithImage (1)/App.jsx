import {
  Box,
  Button,
  Heading,
  Img,
  Input,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'

const SubscribeForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault() // your subscribe logic here
      }}
    >
      <Stack
        maxW="md"
        spacing="4"
        direction={{
          base: 'column',
          sm: 'row',
        }}
      >
        <Input type="email" placeholder="Enter your Email" />
        <Button colorScheme="blue" px="10" type="submit">
          Subscribe
        </Button>
      </Stack>
    </form>
  )
}

export const App = () => {
  return (
    <Box as="section" py="12">
      <Box
        maxW={{
          base: 'xl',
          md: '5xl',
        }}
        mx="auto"
      >
        <Stack direction="row" justify="space-between" align="center" spacing="8">
          <Box
            maxW="2xl"
            p={{
              base: '6',
              md: '12',
            }}
          >
            <Heading size="lg" fontWeight="extrabold" mb="2">
              Not found what you are looking for?
            </Heading>
            <Text color={mode('gray.600', 'gray.400')} mb="6">
              Subscribe to our newsletter. We will contact you when there are new components to
              discover.
            </Text>
            <SubscribeForm />
          </Box>
          <Box
            display={{
              base: 'none',
              lg: 'block',
            }}
          >
            <Img
              src="https://images.unsplash.com/photo-1512626120412-faf41adb4874?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGVtYWlsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
              htmlWidth="380"
              htmlHeight="256"
              height="auto"
              objectFit="cover"
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}
