import { Box, Button, Heading, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

export const App = () => {
  return (
    <Box as="section" py="12">
      <Stack
        spacing="6"
        direction={{
          base: 'column',
          md: 'row',
        }}
        align={{
          md: 'center',
        }}
        justify="space-between"
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Box>
          <Text mb="2" fontSize="lg" fontWeight="semibold" color={mode('gray.600', 'gray.400')}>
            Ready to dive in?
          </Text>
          <Heading size="xl" fontWeight="extrabold" maxW="20ch">
            Start using Envelope app in just 30 minutes
          </Heading>
        </Box>
        <Stack
          direction={{
            base: 'column',
            sm: 'row',
          }}
          spacing={{
            base: '2',
            sm: '4',
          }}
        >
          <Button size="lg" colorScheme="blue">
            Get Started
          </Button>
          <Button size="lg">Contact sales</Button>
        </Stack>
      </Stack>
    </Box>
  )
}
