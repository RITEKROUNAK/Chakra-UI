import { Box, Heading, HStack, SimpleGrid, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { HiCheckCircle } from 'react-icons/hi'
import { PricingCard } from './PricingCard'

const FeatureItem: React.FC = ({ children }) => (
  <HStack>
    <Box flexShrink={0} as={HiCheckCircle} fontSize="xl" color={mode('blue.500', 'blue.300')} />
    <Text>{children}</Text>
  </HStack>
)

export const App = () => {
  return (
    <Box as="section" bg={mode('gray.50', 'gray.800')} py="20">
      <Box maxW={{ base: 'xl', md: '5xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <Box maxW="2xl" mx="auto" textAlign={{ sm: 'center' }}>
          <Text
            textTransform="uppercase"
            fontWeight="bold"
            letterSpacing="wide"
            mb="3"
            color={mode('gray.600', 'gray.400')}
          >
            Pricing
          </Text>
          <Heading as="h1" size="3xl" fontWeight="extrabold" letterSpacing="tight">
            Pay as you grow
          </Heading>
          <Text mt="6" fontSize="xl" color={mode('gray.600', 'gray.400')}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos
            odit doloribus molestiae voluptatum.
          </Text>
        </Box>
        <SimpleGrid alignItems="flex-start" mt="16" columns={{ base: 1, lg: 2 }} spacing="10">
          <PricingCard
            colorScheme="blue"
            name="Startup"
            price={29}
            duration="/ mo"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing."
            features={[
              '50 quod similique',
              '2000 libero doloribus modi nostru',
              'Unlimited basic esse repudiandae exceptur',
              '90 cupiditate adipisci quibusdam',
            ]}
          />
          <PricingCard
            colorScheme="teal"
            name="Enterprise"
            price={79}
            duration="/ mo"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing."
            features={[
              '100 quod similique',
              '20K libero doloribus modi nostru',
              'Unlimited ipsa esse repudiandae exceptur',
              '9000 cupiditate adipisci quibusdam',
            ]}
          />
        </SimpleGrid>
        <Box
          mt="10"
          bg={mode('white', 'gray.700')}
          shadow="md"
          rounded="lg"
          px="10"
          pt="10"
          pb="12"
          mx="auto"
          maxW={{ base: 'lg', lg: 'unset' }}
        >
          <Text
            color={mode('blue.500', 'blue.300')}
            textTransform="uppercase"
            fontWeight="bold"
            letterSpacing="wide"
          >
            Features & Services
          </Text>
          <Text fontSize="3xl" mt="2" fontWeight="bold">
            Included in all plans
          </Text>
          <SimpleGrid columns={{ base: 1, lg: 2 }} mt="5" spacing="5">
            <FeatureItem>Pre-approvals & role-based control</FeatureItem>
            <FeatureItem>Easy onboarding, training and dedicated support</FeatureItem>
            <FeatureItem>Individual limits and policies for each person</FeatureItem>
            <FeatureItem>Full visibility over all payments in real time</FeatureItem>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}
