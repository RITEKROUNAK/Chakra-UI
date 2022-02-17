import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaArrowRight, FaFileSignature, FaHandsHelping, FaHeadset } from 'react-icons/fa'
import { Feature } from './Feature'

export const App = () => {
  return (
    <Box as="section" bg={mode('gray.50', 'gray.800')} py="20">
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
          spacing={{
            base: '4',
            lg: '20',
          }}
          direction={{
            base: 'column',
            lg: 'row',
          }}
        >
          <Center
            flex="1"
            shadow="lg"
            minH="26rem"
            maxW={{
              lg: 'xl',
            }}
          >
            <Img
              objectFit="cover"
              w="full"
              h="full"
              htmlWidth="576px"
              htmlHeight="420px"
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Bring team together"
            />
          </Center>
          <Box
            maxW={{
              lg: 'lg',
            }}
          >
            <Heading
              size="2xl"
              mt="10"
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="normal"
            >
              Bring your team together in channels
            </Heading>
            <Text fontSize="lg" mt="6" color={mode('gray.600', 'gray.400')}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
            </Text>
            <Button
              className="group"
              mt="8"
              colorScheme="blue"
              size="lg"
              px="8"
              fontWeight="bold"
              h="14"
              iconSpacing="3"
              rightIcon={
                <Box
                  as={FaArrowRight}
                  fontSize="sm"
                  transition="transform 0.2s"
                  _groupHover={{
                    transform: 'translateX(2px)',
                  }}
                />
              }
            >
              Learn more
            </Button>
          </Box>
        </Stack>
        <Divider my="20" opacity={1} />
        <SimpleGrid
          columns={{
            base: 1,
            md: 3,
          }}
          spacing={{
            base: '12',
            md: '8',
          }}
        >
          <Feature title="Share files" icon={<FaFileSignature />}>
            Keep files and the messages about them together in channels.
          </Feature>
          <Feature title="Connect with users" icon={<FaHeadset />}>
            Keep files and the messages about them together in channels.
          </Feature>
          <Feature title="Collaborate with partners" icon={<FaHandsHelping />}>
            Keep files and the messages about them together in channels.
          </Feature>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
