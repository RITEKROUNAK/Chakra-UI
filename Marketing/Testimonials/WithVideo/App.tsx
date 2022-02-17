import { Box, Center, Divider, Flex, Img, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import { Logo } from './Logo'

export const App = () => {
  return (
    <Box as="section" py="12">
      <Box maxW="7xl" mx="auto" px={{ base: '6', md: '8' }}>
        <Flex align={{ lg: 'center' }} direction={{ base: 'column', md: 'row' }}>
          <Box
            flex="1"
            pos="relative"
            maxW={{ lg: '480px' }}
            as="button"
            aria-label="Play Testimonial video"
          >
            <Img
              w="full"
              h="full"
              objectFit="cover"
              alt="Teaser Video Image"
              loading="lazy"
              rounded="4px"
              overflow="hidden"
              src="https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGJ1c2luZXNzJTIwd29tYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=90"
            />
            <Center
              w="20"
              h="20"
              rounded="full"
              fontSize="40px"
              pos="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              bg="blackAlpha.600"
              color="white"
            >
              <BsFillPlayFill />
            </Center>
          </Box>

          <Box
            flex="1"
            paddingStart={{ md: '16' }}
            paddingEnd={{ md: '12' }}
            mt={{ base: '8', md: '0' }}
          >
            <Stack
              align={{ base: 'flex-start', lg: 'center' }}
              direction={{ base: 'column', lg: 'row' }}
              spacing={{ base: '2', lg: '4' }}
            >
              <Box as="h5" color="gray.500" fontSize="lg">
                Tim Collins, Marketing Director
              </Box>
              <Box h="4" display={{ base: 'none', lg: 'block' }}>
                <Divider orientation="vertical" />
              </Box>
              <Logo h="5" color="gray.500" />
            </Stack>
            <Box mt="4" fontSize={{ base: 'xl', lg: '2xl' }} as="blockquote">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip.&quot;
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
