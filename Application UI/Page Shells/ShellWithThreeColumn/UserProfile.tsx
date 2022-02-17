import { Avatar, Flex, HStack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

interface UserProfileProps {
  name: string
  image: string
  email: string
}

export const UserProfile = (props: UserProfileProps) => {
  const { name, image, email } = props
  return (
    <HStack spacing="4" px="2" flexShrink={0} borderTopWidth="1px" p="4">
      <Avatar size="sm" name={name} src={image} />
      <Flex direction="column" fontWeight="medium">
        <Text fontSize="sm">{name}</Text>
        <Text fontSize="xs" lineHeight="shorter" color={mode('gray.600', 'gray.400')}>
          {email}
        </Text>
      </Flex>
    </HStack>
  )
}
