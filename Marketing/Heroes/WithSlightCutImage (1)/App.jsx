import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiArrowRight } from 'react-icons/hi'

export const App = () => {
  return (
    <Box
      as="section"
      bg={mode('gray.50', 'gray.800')}
      pb="24"
      pos="relative"
      px={{
        base: '6',
        lg: '12',
      }}
    >
      <Box maxW="7xl" mx="auto">
        <Box
          maxW={{
            lg: 'md',
            xl: 'xl',
          }}
          pt={{
            base: '20',
            lg: '40',
          }}
          pb={{
            base: '16',
            lg: '24',
          }}
        >
          <HStack
            className="group"
            as="a"
            href="#"
            px="2"
            py="1"
            bg={mode('gray.200', 'gray.700')}
            rounded="full"
            fontSize="sm"
            mb="8"
            display="inline-flex"
            minW="18rem"
          >
            <Badge
              px="2"
              variant="solid"
              colorScheme="green"
              rounded="full"
              textTransform="capitalize"
            >
              New
            </Badge>
            <Box fontWeight="medium">Introducing the new Chakra API</Box>
            <Box
              aria-hidden
              transition="0.2s all"
              _groupHover={{
                transform: 'translateX(2px)',
              }}
              as={HiArrowRight}
              display="inline-block"
            />
          </HStack>
          <Heading as="h1" size="3xl" lineHeight="1" fontWeight="extrabold" letterSpacing="tight">
            Connect and engage with{' '}
            <Box as="mark" color={mode('blue.500', 'blue.300')} bg="transparent">
              your customers globally
            </Box>
          </Heading>
          <Text mt={4} fontSize="xl" fontWeight="medium" color={mode('gray.600', 'gray.400')}>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
            commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </Text>
          <Stack
            direction={{
              base: 'column',
              sm: 'row',
            }}
            spacing="4"
            mt="8"
          >
            <Button size="lg" colorScheme="blue" height="14" px="8" fontSize="md">
              Get Started Now
            </Button>
            <Button
              size="lg"
              bg="white"
              color="gray.800"
              _hover={{
                bg: 'gray.50',
              }}
              height="14"
              px="8"
              shadow="base"
              fontSize="md"
            >
              Talk to an expert
            </Button>
          </Stack>
        </Box>
      </Box>
      <Box
        pos={{
          lg: 'absolute',
        }}
        insetY={{
          lg: '0',
        }}
        insetEnd={{
          lg: '0',
        }}
        bg="gray.50"
        w={{
          base: 'full',
          lg: '50%',
        }}
        height={{
          base: '96',
          lg: 'full',
        }}
        sx={{
          clipPath: {
            lg: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)',
          },
        }}
      >
        <Img
          height="100%"
          width="100%"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1551836022-b06985bceb24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          alt="Lady working"
        />
      </Box>
    </Box>
  )
}
