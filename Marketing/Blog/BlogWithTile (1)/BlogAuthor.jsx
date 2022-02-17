import { Flex, HStack, Img, Text } from '@chakra-ui/react'
import * as React from 'react'

export const BlogAuthor = (props) => {
  const { image, name, role, ...rest } = props
  return (
    <HStack spacing="4" {...rest}>
      <Img
        objectFit="cover"
        rounded="full"
        htmlHeight="40px"
        htmlWidth="40px"
        w="10"
        h="10"
        alt={name}
        src={image}
      />
      <Flex direction="column">
        <Text fontWeight="semibold" fontSize="sm">
          {name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {role}
        </Text>
      </Flex>
    </HStack>
  )
}
