import {
  Box,
  Flex,
  HStack,
  SlideFade,
  Text,
  useBoolean,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { links } from './links-data'
import { MenuItem } from './MenuItem'

export const App = () => {
  const [show, { toggle }] = useBoolean(true)
  return (
    <Box as="header" minH="560px" pos="relative">
      <Box maxW="7xl" px={{ base: '4', md: '6', lg: '8' }} py="6">
        <HStack
          as="button"
          fontWeight="semibold"
          color={mode('gray.600', 'gray.400')}
          onClick={toggle}
        >
          <span>Submenu</span>
          <Box as={HiChevronDown} fontSize="lg" color="gray.500" />
        </HStack>
        <Box
          as={SlideFade}
          in={show}
          pos="absolute"
          top="16"
          bg={mode('white', 'gray.700')}
          pt="2"
          w="full"
          maxW="lg"
          rounded="lg"
          overflow="hidden"
          shadow="lg"
        >
          <Box as="ul" listStyleType="none" px="2" pb="2">
            {links.map((link, idx) => (
              <Box as="li" key={idx}>
                <MenuItem href="#" title={link.title} isNew={link.new}>
                  {link.description}
                </MenuItem>
              </Box>
            ))}
          </Box>
          <Flex
            align="center"
            justify="space-between"
            px="6"
            py="6"
            bg={mode('blue.50', '#324a65')}
          >
            <Box>
              <Text fontWeight="semibold">Book an Envelope demo today!</Text>
              <Text fontSize="sm" color={mode('gray.600', 'gray.400')}>
                Discover & access advanced features
              </Text>
            </Box>
            <Box color={mode('blue.600', 'blue.300')} fontWeight="semibold">
              Get a live demo
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
