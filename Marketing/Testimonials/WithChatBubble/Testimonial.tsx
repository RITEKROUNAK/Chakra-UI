import {
  Box,
  BoxProps,
  Center,
  chakra,
  Flex,
  HStack,
  Img,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { ImQuotesLeft } from 'react-icons/im'

interface TestimonialProps extends BoxProps {
  image: string
  name: string
  role: string
  accentColor: string
}
export const Testimonial = (props: TestimonialProps) => {
  const { image, name, role, children, accentColor } = props
  return (
    <Flex direction="column">
      <Box
        flex="1"
        rounded="lg"
        bg={useColorModeValue('white', 'gray.700')}
        shadow="base"
        px="10"
        pt="8"
        pb="12"
        pos="relative"
        mb="10"
      >
        <Box as={ImQuotesLeft} color={accentColor} fontSize="3xl" />
        <Text mt="5" fontSize="lg" fontWeight="bold">
          {children}
        </Text>
        <chakra.svg
          pos="absolute"
          bottom="-7"
          insetStart="3.5rem"
          w="10"
          viewBox="0 0 38 28"
          color={useColorModeValue('white', 'gray.700')}
          style={{
            filter: 'drop-shadow(0px 1px 1px rgba(0, 0, 0, .1)',
          }}
        >
          <path d="M0 28V0H38L0 28Z" fill="currentColor" />
        </chakra.svg>
      </Box>
      <HStack spacing="4">
        <Center rounded="full" w="4rem" h="4rem" p="1" border="3px solid" borderColor={accentColor}>
          <Img w="100%" h="100%" rounded="full" objectFit="cover" src={image} />
        </Center>
        <Box>
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="sm">{role}</Text>
        </Box>
      </HStack>
    </Flex>
  )
}
