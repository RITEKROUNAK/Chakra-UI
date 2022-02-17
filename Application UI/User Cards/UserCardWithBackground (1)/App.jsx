import { Box, Button, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { HiPencilAlt } from 'react-icons/hi'
import { CardContent } from './CardContent'
import { CardWithAvatar } from './CardWithAvatar'
import { UserInfo } from './UserInfo'

export const App = () => (
  <Box as="section" pt="20" pb="12" position="relative">
    <Box position="absolute" inset="0" height="32" bg="blue.600" />
    <CardWithAvatar
      maxW="xl"
      avatarProps={{
        src: 'https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHdvbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        name: 'Esther Felix',
      }}
      action={
        <Button size="sm" leftIcon={<HiPencilAlt />}>
          Edit
        </Button>
      }
    >
      <CardContent>
        <Heading size="lg" fontWeight="extrabold" letterSpacing="tight">
          Esther Felix
        </Heading>
        <Text color={useColorModeValue('gray.600', 'gray.400')}>
          Frontend Developer &amp; UI Designer
        </Text>
        <UserInfo location="Memphis, USA" website="esther.com" memberSince="Joined Sept. 2019" />
      </CardContent>
    </CardWithAvatar>
  </Box>
)
