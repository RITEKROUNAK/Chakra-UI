import {
  Box,
  Button,
  Center,
  Grid,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { FaPlayCircle } from 'react-icons/fa'
import { SampleLogo } from './SampleLogo'
import { Testimonial } from './Testimonial'

const Feature = (props) => {
  const { title, children } = props
  return (
    <Stack>
      <Text fontWeight="bold">{title}</Text>
      <Text>{children}</Text>
    </Stack>
  )
}

export const App = () => {
  return (
    <Box as="section" py="24" bg={mode('gray.100', 'gray.800')}>
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
        <Grid
          templateColumns={{
            base: '1fr',
            md: '360px 1fr',
          }}
          gap="64px"
        >
          <Box>
            <Heading size="3xl" letterSpacing="tight" fontWeight="extrabold">
              Build SaaS with ease!
            </Heading>
            <Text mt="6" mb="8" fontSize="lg" fontWeight="medium">
              At volutpat diam ut venenatis tellus. Sit amet consectetur.
            </Text>
            <Button size="lg" colorScheme="blue" minH="14" rightIcon={<BiRightArrowAlt />}>
              Get Started now
            </Button>
            <Testimonial
              logo={<SampleLogo />}
              author="Susan Mana"
              company="Executive director"
              image="https://images.unsplash.com/photo-1531078215167-91fcfe45b39e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2598&q=80"
            >
              &ldquo; At volutpat diam ut venenatis tellus. Sit amet consectetur adipiscing elit
              duis. Quis hendrerit dolor magna eget est. Amet est placerat in egestas erat imperdiet
              sed euismod. &rdquo;
            </Testimonial>
          </Box>
          <Box>
            <Center
              bg={mode('white', 'gray.700')}
              shadow="lg"
              minH={{
                base: '320px',
                lg: '480px',
              }}
              rounded="lg"
            >
              {/* Replace this with your screenshot */}
              <Box as={FaPlayCircle} fontSize="90px" color="gray.300" />
            </Center>
            <SimpleGrid
              rounded="lg"
              mt="10"
              p={{
                base: '10',
                lg: '0',
              }}
              columns={{
                base: 1,
                lg: 3,
              }}
              spacing="6"
              bg={{
                base: mode('gray.200', 'gray.700'),
                lg: 'unset',
              }}
            >
              <Feature title="Powered by Chakra">
                At volutpat diam ut venenatis tellus. Sit amet consectetur adipiscing elit duis.
                Quis hendrerit dolor magna eget est.
              </Feature>
              <Feature title="Zero downtime">
                Vestibulum sed arcu non odio euismod. Tristique senectus et netus et malesuada fames
                ac turpis mako.
              </Feature>
              <Feature title="Easy upgrades">
                Convallis a cras semper auctor. Curabitur vitae nunc sed velit. Arcu non odio
                euismod lacinia at quis risus.
              </Feature>
            </SimpleGrid>
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}
