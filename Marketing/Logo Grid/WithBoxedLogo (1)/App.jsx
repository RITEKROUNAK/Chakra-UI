import { Box, Center, Heading, SimpleGrid, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import * as Logo from './Brands'

export const App = () => {
  return (
    <Box as="section" py="16">
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
        <Heading align="center" fontWeight="extrabold" maxW="md" mx="auto">
          Trusted by over 5,000 tech companies
        </Heading>
        <SimpleGrid
          columns={{
            base: 1,
            sm: 2,
            md: 3,
          }}
          mt="8"
          spacing="6"
          color={mode('inherit', 'white')}
        >
          <Center
            py="8"
            px="8"
            bg={mode('gray.50', 'gray.800')}
            rounded={{
              md: 'lg',
            }}
          >
            <Logo.ChatMonkey h="6" opacity={0.64} />
          </Center>
          <Center
            py="8"
            px="8"
            bg={mode('gray.50', 'gray.800')}
            rounded={{
              md: 'lg',
            }}
          >
            <Logo.Finnik h="4" opacity={0.64} />
          </Center>
          <Center
            py="8"
            px="8"
            bg={mode('gray.50', 'gray.800')}
            rounded={{
              md: 'lg',
            }}
          >
            <Logo.Lighthouse h="5" opacity={0.64} />
          </Center>
          <Center
            py="8"
            px="8"
            bg={mode('gray.50', 'gray.800')}
            rounded={{
              md: 'lg',
            }}
          >
            <Logo.Plumtic h="5" opacity={0.64} />
          </Center>
          <Center
            py="8"
            px="8"
            bg={mode('gray.50', 'gray.800')}
            rounded={{
              md: 'lg',
            }}
          >
            <Logo.Wakanda h="5" opacity={0.64} />
          </Center>
          <Center
            py="8"
            px="8"
            bg={mode('gray.50', 'gray.800')}
            rounded={{
              md: 'lg',
            }}
          >
            <Logo.WorkScout h="5" opacity={0.64} />
          </Center>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
