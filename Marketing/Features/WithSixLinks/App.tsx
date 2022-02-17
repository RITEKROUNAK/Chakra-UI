import {
  Box,
  createIcon,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FeatureLink } from './FeatureLink'
import { links } from './_data'

export const RightArrow = createIcon({
  viewBox: '0 0 11 12',
  d: 'M0 0L4.8 6L0 12H5.78182L10.5818 6L5.78182 0H0Z',
})

export const App = () => {
  return (
    <Box as="section" py="24">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <Flex direction={{ base: 'column', lg: 'row' }} justify="space-between">
          <Box flex="1" maxW={{ lg: 'xl' }}>
            <Img
              htmlWidth="560px"
              htmlHeight="430px"
              w="100%"
              h="100%"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80"
            />
          </Box>
          <Box ms={{ lg: '12' }} mt={{ base: '12', lg: 0 }} flex="1" maxW={{ lg: 'xl' }}>
            <Box maxW={{ base: 'xl', lg: 'unset' }}>
              <Box as="b" color={mode('blue.500', 'blue.300')}>
                Everything you need
              </Box>
              <Heading mt="4" mb="5" size="2xl" fontWeight="extrabold" lineHeight="1.2">
                CRM tool that’s easy to use and seriously smart.
              </Heading>
              <Text fontSize="lg" color={mode('gray.600', 'gray.400')}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit.
              </Text>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 2 }} mt="8">
              {links.map((link) => (
                <Flex key={link.label} align="center" minH="14" borderBottomWidth="1px">
                  <FeatureLink href={link.href}>{link.label}</FeatureLink>
                </Flex>
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
