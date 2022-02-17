import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Img,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { Logo } from './Logo'
import { SigninForm } from './SigninForm'
import { UnderlineLink } from './UnderlineLink'

export const App = () => {
  return (
    <Flex
      direction={{
        base: 'column',
        md: 'row',
      }}
      overflow="hidden"
      minH="100vh"
      height="100%"
      bg={mode('gray.50', 'inherit')}
    >
      <Box
        overflowY="auto"
        flex="1"
        py={{
          base: '10',
          md: '16',
        }}
        px={{
          base: '6',
          md: '10',
        }}
      >
        <Box maxW="sm" mx="auto">
          <Logo
            mb={{
              base: '14',
              md: '32',
            }}
            w="auto"
            h="7"
            mx="auto"
            iconColor="blue.500"
          />
          <Box
            textAlign="center"
            mb={{
              base: '10',
              md: '16',
            }}
          >
            <Heading as="h1" size="xl" fontWeight="extrabold" letterSpacing="tight">
              Sign in to your account
            </Heading>
            <Text mt="3" color={mode('gray.600', 'gray.400')} fontWeight="medium">
              Need an account? <UnderlineLink>Sign up for free</UnderlineLink>
            </Text>
          </Box>
          <SigninForm />
        </Box>
      </Box>

      <Box
        display={{
          base: 'none',
          lg: 'block',
        }}
        maxH="100vh"
        overflow="hidden"
        flex="1"
        bg="blue.600"
        color="white"
        px="20"
        pt="32"
      >
        <Badge bg="blue.700" px="4" py="1" rounded="md" letterSpacing="wide" color="whiteAlpha.900">
          New and Improved
        </Badge>
        <Text
          mt="6"
          fontWeight="extrabold"
          fontSize={{
            base: '2xl',
            lg: '3xl',
          }}
          maxW="sm"
          letterSpacing="tight"
          lineHeight="normal"
        >
          Create Beautiful websites with Chakra Pro
        </Text>
        <Text mt="5" maxW="md" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.
        </Text>
        <HStack
          as="a"
          href="#"
          justify="center"
          display="inline-flex"
          minW="2xs"
          py="3"
          px="2"
          mt="5"
          fontWeight="semibold"
          border="2px solid white"
          rounded="lg"
          transition="all 0.2s"
          _hover={{
            bg: 'whiteAlpha.200',
          }}
        >
          <Box>Learn more</Box>
          <HiOutlineExternalLink />
        </HStack>
        <Box mt="10" position="relative">
          <Img
            alt="App screenshot"
            src="https://res.cloudinary.com/chakra-ui-pro/image/upload/v1621082943/pro-website/screenshot-dark_w6jpks.png"
          />
        </Box>
      </Box>
    </Flex>
  )
}
