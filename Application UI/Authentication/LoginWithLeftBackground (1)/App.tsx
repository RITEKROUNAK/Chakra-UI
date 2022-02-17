import { Box, Flex, Heading, HStack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { Logo } from './Logo'
import { SigninForm } from './SigninForm'

export const App = () => {
  return (
    <Flex minH="100vh" direction={{ base: 'column', md: 'row' }}>
      <Box
        display={{ base: 'none', md: 'block' }}
        maxW={{ base: '20rem', lg: '40rem' }}
        flex="1"
        bg="blue.600"
        color="white"
        px="10"
        py="8"
      >
        <Box>
          <Logo w="auto" h="7" color="white" />
        </Box>
        <Flex
          direction="column"
          align="center"
          justify="center"
          h="full"
          textAlign="center"
          mt="-10"
        >
          <Box>
            <Text
              maxW="md"
              mx="auto"
              fontWeight="extrabold"
              fontSize={{ base: '4xl', lg: '5xl' }}
              letterSpacing="tight"
              lineHeight="normal"
            >
              Introducing our 2020 report
            </Text>
            <Text mt="5" maxW="sm" mx="auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididun.
            </Text>
          </Box>
          <HStack
            justify="center"
            as="a"
            href="#"
            minW="2xs"
            py="3"
            fontWeight="semibold"
            px="2"
            mt="5"
            border="2px solid white"
            rounded="lg"
            _hover={{ bg: 'whiteAlpha.200' }}
          >
            <Box>View Report</Box>
            <HiOutlineExternalLink />
          </HStack>
        </Flex>
      </Box>
      <Box
        flex="1"
        px={{ base: '6', md: '10', lg: '16', xl: '28' }}
        py={{ base: '10', md: '64' }}
        bg={{ md: mode('gray.50', 'gray.800') }}
      >
        <Box maxW="xl">
          <Box>
            <Box display={{ md: 'none' }} mb="16">
              <Logo w="auto" h="7" iconColor="blue.400" />
            </Box>
            <Heading
              color={mode('blue.600', 'blue.400')}
              as="h1"
              size="2xl"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              Welcome back
            </Heading>
            <Text
              mt="3"
              fontSize={{ base: 'xl', md: '3xl' }}
              fontWeight="bold"
              color={mode('gray.500', 'inherit')}
            >
              Sign in to continue
            </Text>
          </Box>

          <Box
            minW={{ md: '420px' }}
            mt="10"
            rounded="xl"
            bg={{ md: mode('white', 'gray.700') }}
            shadow={{ md: 'lg' }}
            px={{ md: '10' }}
            pt={{ base: '8', md: '12' }}
            pb="8"
          >
            <SigninForm />
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}
