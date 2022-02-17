import {
  Box,
  Button,
  Heading,
  Img,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { BsFillGridFill, BsPlusCircleFill, BsShieldLockFill, BsArrowRight } from 'react-icons/bs'
import { Feature } from './Feature'

export const App = () => {
  return (
    <Box
      as="section"
      py={{
        md: '12',
      }}
    >
      <Box
        bg={mode('gray.50', 'gray.800')}
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '12',
          lg: '20',
        }}
        py={{
          base: '12',
          md: '20',
        }}
      >
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          spacing="10"
        >
          <Box>
            <Heading size="xl" mb="4" fontWeight="extrabold">
              Breakthrough speaker
            </Heading>
            <Text
              fontSize={{
                md: 'lg',
              }}
              mb="6"
              maxW="md"
              color={mode('gray.600', 'gray.400')}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
            <Button
              size="lg"
              colorScheme="blue"
              rightIcon={<BsArrowRight />}
              fontWeight="bold"
              fontSize="md"
              w={{
                base: 'full',
                sm: 'auto',
              }}
            >
              Learn more
            </Button>
          </Box>
          <Img
            htmlWidth="500px"
            htmlHeight="320px"
            height={{
              md: '320px',
            }}
            objectFit="cover"
            src="https://images.unsplash.com/photo-1534949752991-a065b0f5dfaa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYxfHxkZXZpY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="state of the art speaker"
          />
        </SimpleGrid>
        <SimpleGrid
          columns={{
            base: 1,
            md: 3,
          }}
          mt="16"
          spacing="8"
        >
          <Feature icon={BsFillGridFill} title="Very portable">
            Ut enim ad minim veniam, quis nostrud exercitation velit esse cillum.
          </Feature>
          <Feature icon={BsPlusCircleFill} title="High fidelity">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
          </Feature>
          <Feature icon={BsShieldLockFill} title="Private and secure">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa velit esse.
          </Feature>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
