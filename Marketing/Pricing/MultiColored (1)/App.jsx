import { Box, Button, Flex, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { DurationSwitch } from './DurationSwitch'
import { PricingCard } from './PricingCard'

export const App = () => (
  <Box as="section" bg={useColorModeValue('gray.50', 'gray.800')} py="24">
    <Box
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
      <Box
        textAlign={{
          base: 'center',
          lg: 'start',
        }}
      >
        <Heading
          size="3xl"
          lineHeight="normal"
          color={useColorModeValue('blue.600', 'blue.400')}
          letterSpacing="tight"
          fontWeight="extrabold"
        >
          Ready to Get Started?
        </Heading>
        <Text
          fontSize={{
            base: 'xl',
            lg: '2xl',
          }}
          mt="4"
          maxW="2xl"
          mx={{
            base: 'auto',
            lg: 'unset',
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sequi unde repudiandae
          natus sequi unde.
        </Text>
      </Box>
      <Flex
        align="center"
        justify={{
          base: 'center',
          lg: 'flex-start',
        }}
        my="10"
      >
        <DurationSwitch defaultValue="yearly" />
      </Flex>
      <SimpleGrid
        mt="10"
        columns={{
          base: 1,
          lg: 3,
        }}
        spacing="10"
      >
        <PricingCard
          bg="gray.700"
          color="white"
          button={
            <Button w="full" size="lg" h="16" colorScheme="blue">
              Start for Free
            </Button>
          }
          data={{
            name: 'Free',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            price: 0,
            duration: 'monthly',
            benefits: [
              'No credit card needed',
              'Full access to all features',
              'Demo components',
              'Free Figma sources',
              'Support',
            ],
          }}
        />
        <PricingCard
          bg="gray.700"
          color="white"
          button={
            <Button w="full" h="16" colorScheme="blue" size="lg">
              Add to cart
            </Button>
          }
          data={{
            name: 'Freelancer',
            description: 'At erat pellentesque adipiscing commodo elit at imperdiet.',
            price: 29,
            duration: 'monthly',
            benefits: [
              'No credit card needed',
              'Full access to all features',
              'Demo components',
              'Free Figma sources',
              'Support',
            ],
          }}
        />
        <PricingCard
          bg="blue.600"
          color="white"
          button={
            <Button w="full" color="revert" h="16" size="lg">
              Add to cart
            </Button>
          }
          data={{
            name: 'Agency',
            description: 'Proin sagittis nisl rhoncus mattis rhoncus urna neque.',
            price: 39,
            duration: 'monthly',
            benefits: [
              'No credit card needed',
              'Full access to all features',
              'Demo components',
              'Free Figma sources',
              'Support',
            ],
          }}
        />
      </SimpleGrid>
    </Box>
  </Box>
)
