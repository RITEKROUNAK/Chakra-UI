import { Box, Img, SimpleGrid, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { Logo } from './Logo'
import { HiCurrencyDollar, HiClock, HiChartBar } from 'react-icons/hi'
import { Stat } from './Stat'

export const App = () => (
  <Box
    bg={mode('gray.50', 'gray.800')}
    as="section"
    py={{
      base: '12',
      md: '24',
    }}
  >
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
      <Stack
        direction={{
          base: 'column',
          md: 'row',
        }}
        spacing={{
          base: '12',
          xl: '20',
        }}
        align="center"
      >
        <Box
          maxW="450px"
          flex="1"
          h={{
            base: '240px',
            md: '400px',
          }}
          flexShrink={0}
        >
          <Img
            htmlWidth="450px"
            htmlHeight="500px"
            w="full"
            h="full"
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531384698654-7f6e477ca221?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvb2tpbmclMjBhdCUyMHRoZSUyMGNhbWVyYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </Box>
        <Box flex="1">
          <Text
            fontSize={{
              base: '2xl',
              md: '4xl',
            }}
            fontWeight={{
              base: 'bold',
              md: 'extrabold',
            }}
            lineHeight="short"
            align={{
              base: 'center',
              md: 'start',
            }}
          >
            <Box as="span" marginStart="-4">
              “
            </Box>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
            <Box as="span">”</Box>
          </Text>
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            spacing="5"
            mt="6"
            align="center"
            textAlign={{
              base: 'center',
              md: 'start',
            }}
          >
            <Logo h="6" color="gray.500" />
            <Box>
              <Text fontWeight="extrabold">Mensah Panya</Text>
              <Text fontSize="sm">VP, Plumptic Studios</Text>
            </Box>
          </Stack>
          <SimpleGrid
            columns={3}
            display={{
              base: 'none',
              xl: 'grid',
            }}
            mt="8"
          >
            <Stat
              icon={HiCurrencyDollar}
              title="120K"
              description="Duis aute irure dolor in reprehenderit"
            />
            <Stat
              icon={HiClock}
              title="29.5%"
              description="Excepteur sint occaecat cupidatat proident"
            />
            <Stat
              icon={HiChartBar}
              title="1.5x"
              description="Sunt in culpa qui officia deserunt mollit"
            />
          </SimpleGrid>
        </Box>
      </Stack>
    </Box>
  </Box>
)
