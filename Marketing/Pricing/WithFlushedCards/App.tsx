import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { DurationSwitcher } from './DurationSwitch'
import { PricingCard } from './PricingCard'

export const App = () => {
  return (
    <Box as="section" bg={mode('gray.100', 'gray.800')} py="24">
      <Box maxW={{ base: 'xl', md: '5xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <Flex direction="column" align={{ base: 'flex-start', md: 'center' }} maxW="2xl" mx="auto">
          <Heading
            as="h1"
            size="2xl"
            letterSpacing="tight"
            fontWeight="extrabold"
            textAlign={{ base: 'start', md: 'center' }}
          >
            Find the perfect plan for you
          </Heading>
          <Text
            mt="4"
            fontSize="xl"
            textAlign={{ base: 'left', md: 'center' }}
            color={mode('gray.600', 'gray.400')}
          >
            For growing teams and businesses
          </Text>
          <DurationSwitcher mt="10" />
        </Flex>

        <Flex
          direction={{ base: 'column', lg: 'row' }}
          maxW={{ base: '560px', lg: 'unset' }}
          mx="auto"
          mt="10"
          bg={mode('white', 'gray.700')}
          rounded="xl"
        >
          <PricingCard
            flex="1"
            colorScheme="blue"
            name="Basic"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            price="$10"
            duration="Per user per month"
            extras="Additional storage: $25 / TB / month"
            features={[
              '100 GB per user',
              'Support for all file types',
              'PDF reviews',
              'Commenting and notifications',
            ]}
          />
          <Box
            w={{ base: 'unset', lg: '1px' }}
            minH="0"
            h={{ base: '1px', lg: 'unset' }}
            bg={mode('gray.100', 'gray.600')}
          />
          <PricingCard
            flex="1"
            colorScheme="red"
            name="Plus"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            price="$50"
            duration="Per user per month"
            extras="Additional storage: $25 / TB / month"
            features={[
              '100 GB per user',
              'Support for all file types',
              'PDF reviews',
              'Commenting and notifications',
            ]}
          />
        </Flex>
        <Box mt="10" px="12" py="10" bg={mode('gray.200', 'gray.700')} rounded="xl">
          <Flex align="center" direction={{ base: 'column', md: 'row' }}>
            <Stack w="full" align="center" direction="row" spacing="8">
              <Img
                w={{ base: '6rem', md: '8rem' }}
                h={{ base: '6rem', md: '8rem' }}
                rounded="full"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1506880135364-e28660dc35fa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGxhZHklMjB3aXRoJTIwdGVsZXBob25lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Customer Service"
              />
              <Box maxW="400px">
                <Text fontSize="xl" fontWeight="bold">
                  Need help or have questions?
                </Text>
                <Text mt="2">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </Text>
              </Box>
            </Stack>
            <Button
              colorScheme="blue"
              size="lg"
              mt={{ base: '6', md: '0' }}
              w={{ base: 'full', md: 'auto' }}
              minW="10rem"
              flexShrink={0}
              fontSize="md"
            >
              Book a demo
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
