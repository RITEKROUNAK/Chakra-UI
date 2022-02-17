import { Box, HStack, Img, Link, Text, useColorModeValue, VisuallyHidden } from '@chakra-ui/react'
import * as React from 'react'
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'

interface MemberProps {
  image: string
  name: string
  twitter?: string
  linkedIn?: string
  children: React.ReactNode
}

export const Member = (props: MemberProps) => {
  const { image, name, twitter, linkedIn, children } = props
  return (
    <Box>
      <Box pos="relative">
        <Img
          pos="relative"
          alt={name}
          w="32"
          h="32"
          rounded="lg"
          objectFit="cover"
          src={image}
          zIndex="1"
        />
        <Box
          zIndex="0"
          pos="absolute"
          w="32"
          top="-2"
          left="2"
          h="100%"
          bg={useColorModeValue('blue.600', 'blue.300')}
          rounded="lg"
        />
      </Box>
      <Text fontWeight="bold" mt="4">
        {name}
      </Text>
      <Text mt="2" color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')} maxW="20rem">
        {children}
      </Text>
      <HStack mt="5" spacing="3">
        <Link isExternal color={useColorModeValue('blue.600', 'blue.300')} href={twitter}>
          <VisuallyHidden>{`${name}'s Twitter page`}</VisuallyHidden>
          <FaTwitter aria-hidden />
        </Link>
        <Link isExternal color={useColorModeValue('blue.600', 'blue.300')} href={linkedIn}>
          <VisuallyHidden>{`${name}'s Linkedin page`}</VisuallyHidden>
          <FaLinkedinIn aria-hidden />
        </Link>
      </HStack>
    </Box>
  )
}
