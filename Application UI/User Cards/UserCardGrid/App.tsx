import { Box, Button, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { CardWithAvatar } from './CardWithAvatar'
import data from './data.json'
import { FollowerCount } from './FollowerCount'
import { UserInfo } from './UserInfo'

export const App = () => (
  <Box bg={useColorModeValue('gray.100', 'gray.800')} px={{ base: '6', md: '8' }} py="12">
    <Box as="section" maxW={{ base: 'xs', md: '3xl' }} mx="auto">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
        {data.map((user) => {
          const { name, bio, src, isVerified, followerCount } = user
          return (
            <CardWithAvatar key={name} avatarProps={{ src, name }}>
              <UserInfo mt="3" name={name} bio={bio} isVerified={isVerified} />
              <FollowerCount my="4" count={followerCount} />
              <Button variant="outline" colorScheme="blue" rounded="full" size="sm" width="full">
                View Profile
              </Button>
            </CardWithAvatar>
          )
        })}
      </SimpleGrid>
    </Box>
  </Box>
)
