import { Avatar, Flex, HStack, Text } from '@chakra-ui/react'
import * as React from 'react'

export const UserProfile = (props) => {
  const { name, image, email } = props
  return (
    <HStack spacing="4" px="2">
      <Avatar name={name} src={image} />
      <Flex direction="column">
        <Text fontWeight="medium">{name}</Text>
        <Text fontSize="sm" lineHeight="shorter">
          {email}
        </Text>
      </Flex>
    </HStack>
  )
}
