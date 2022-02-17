import {
  Box,
  Flex,
  HStack,
  SlideFade,
  useBoolean,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiPhoneCall, FiVideo } from 'react-icons/fi'
import { HiChevronDown } from 'react-icons/hi'
import { BottomLink } from './BottomLink'
import { links } from './links-data'
import { MenuItem } from './MenuItem'

export const App = () => {
  const [show, { toggle }] = useBoolean(true)
  return (
    <Box as="header" minH="560px" pos="relative">
      <Box maxW="7xl" px={{ base: '4', md: '6', lg: '8' }} py="6">
        <HStack
          as="button"
          onClick={toggle}
          fontWeight="semibold"
          color={mode('gray.600', 'gray.400')}
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
          borderWidth="1px"
          pt="2"
          w="full"
          maxW="sm"
          rounded="lg"
          overflow="hidden"
          shadow="lg"
        >
          <Box as="ul" listStyleType="none" px="2" pb="2">
            {links.map((link, idx) => (
              <Box as="li" key={idx}>
                <MenuItem
                  href="#"
                  icon={link.icon}
                  title={link.title}
                  description={link.description}
                />
              </Box>
            ))}
          </Box>
          <Flex
            borderTopWidth="1px"
            w="100%"
            fontWeight="semibold"
            color={mode('gray.600', 'gray.400')}
          >
            <BottomLink icon={<FiVideo />} borderEndWidth="1px">
              Watch Demo
            </BottomLink>
            <BottomLink icon={<FiPhoneCall />}>Contact Sales</BottomLink>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
