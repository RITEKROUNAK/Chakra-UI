import { Box, Divider, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { Member } from './Member'
import { members } from './_data'

export const App = () => {
  return (
    <Box as="section">
      <Box
        maxW="7xl"
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
          fontSize="lg"
          color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}
          maxW="2xl"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        </Text>
        <Divider my="10" />
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacingX="6"
          spacingY="16"
        >
          {members.map((member, idx) => (
            <Member key={idx} image={member.image} name={member.name} twitter="#" linkedIn="#">
              {member.description}
            </Member>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}
