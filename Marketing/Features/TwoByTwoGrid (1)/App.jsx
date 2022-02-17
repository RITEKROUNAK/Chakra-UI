import {
  Box,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiBadgeCheck, HiTemplate, HiChartSquareBar, HiCurrencyDollar } from 'react-icons/hi'
import { Feature } from './Feature'

const FeatureImage = (props) => (
  <Box flex="1" {...props}>
    <Img
      objectFit="cover"
      h="100%"
      w="100%"
      src="https://images.unsplash.com/photo-1573878737226-4f9572c22b69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
      alt=""
    />
  </Box>
)

export const App = () => {
  return (
    <Box as="section" bg={mode('gray.50', 'gray.800')} py="24">
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
        <Flex
          justify="space-between"
          direction={{
            base: 'column',
            lg: 'row',
          }}
        >
          <Box
            maxW={{
              lg: 'lg',
            }}
          >
            <Box
              mb={{
                lg: '8rem',
              }}
            >
              <Heading
                lineHeight="shorter"
                size="2xl"
                letterSpacing="tight"
                color={mode('gray.900', 'white')}
                fontWeight="extrabold"
              >
                Manage — <br />
                <Box as="span" color={mode('blue.600', 'blue.400')}>
                  everything
                </Box>
              </Heading>
              <Text
                mt="4"
                fontSize="2xl"
                color={mode('gray.600', 'gray.400')}
                maxW={{
                  lg: 'md',
                }}
              >
                One mission control for your business, wherever you go.
              </Text>
            </Box>
            <FeatureImage
              my={{
                base: '14',
                lg: '0',
              }}
              display={{
                base: 'block',
                lg: 'none',
              }}
            />
            <SimpleGrid
              flex="1"
              columns={{
                base: 1,
                md: 2,
              }}
              spacing={{
                base: '3rem',
                md: '2rem',
              }}
            >
              <Feature title="Order fulfillment" icon={<HiBadgeCheck />}>
                Sed sit amet velit pharetra, viverra ligula scelerisque, neque.
              </Feature>
              <Feature title="Simple Payment" icon={<HiCurrencyDollar />}>
                Sed sit amet velit pharetra, viverra ligula scelerisque, neque.
              </Feature>
              <Feature title="Consumer Insight" icon={<HiChartSquareBar />}>
                Sed sit amet velit pharetra, viverra ligula scelerisque, neque.
              </Feature>
              <Feature title="Intuitive Dashboard" icon={<HiTemplate />}>
                Sed sit amet velit pharetra, viverra ligula scelerisque, neque.
              </Feature>
            </SimpleGrid>
          </Box>
          <FeatureImage
            maxW={{
              lg: '560px',
            }}
            display={{
              base: 'none',
              lg: 'block',
            }}
          />
        </Flex>
      </Box>
    </Box>
  )
}
