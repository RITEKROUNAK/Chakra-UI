import { Box, Grid, Heading, HStack, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Member } from './Member'
import { members } from './_data'

export const App = () => (
  <Box as="section" bg={useColorModeValue('gray.50', 'gray.800')}>
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
      py={{
        base: '12',
        md: '20',
      }}
    >
      <Grid
        templateColumns={{
          base: '1fr',
          lg: '24rem 1fr',
        }}
        gap={{
          base: '8',
          md: '12',
          lg: '16',
        }}
      >
        <Box>
          <Heading
            size="2xl"
            letterSpacing="tight"
            mb="5"
            fontWeight="extrabold"
            color={useColorModeValue('blue.600', 'blue.300')}
          >
            Meet our team
          </Heading>
          <Text
            fontSize="xl"
            maxW="2xl"
            color={useColorModeValue('blackAlpha.700', 'whiteAlpha.800')}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation
          </Text>
          <HStack
            mt="8"
            as="a"
            display="inline-flex"
            href="#"
            className="group"
            fontSize="lg"
            fontWeight="bold"
            color={useColorModeValue('blue.600', 'blue.300')}
          >
            <span>Join the team</span>
            <Box
              as={FaArrowRight}
              transition="all 0.2s"
              _groupHover={{
                transform: 'translateX(5px)',
              }}
            />
          </HStack>
        </Box>
        <SimpleGrid
          mt={{
            base: '8',
            md: '0',
          }}
          columns={{
            base: 1,
            md: 2,
          }}
          spacing="10"
        >
          {members.map((member, index) => (
            <Member
              key={index}
              image={member.image}
              role={member.role}
              name={member.name}
              twitter="#"
              linkedIn="#"
            >
              {member.description}
            </Member>
          ))}
        </SimpleGrid>
      </Grid>
    </Box>
  </Box>
)
