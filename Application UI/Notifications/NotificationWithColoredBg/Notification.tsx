import { Box, Center, Flex, FlexProps, Icon, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { FiInfo } from 'react-icons/fi'

export const Notification = (props: FlexProps) => {
  const { children, ...flexProps } = props
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      width="md"
      boxShadow="lg"
      bg={useColorModeValue('white', 'gray.700')}
      borderRadius={{ base: 'none', sm: 'base' }}
      overflow="hidden"
      borderTopWidth={{ base: '4px', sm: '0' }}
      borderColor={useColorModeValue('blue.500', 'blue.300')}
      {...flexProps}
    >
      <Center
        display={{ base: 'none', sm: 'flex' }}
        bg={useColorModeValue('blue.500', 'blue.300')}
        px="4"
      >
        <Icon as={FiInfo} boxSize="9" color={useColorModeValue('white', 'gray.900')} />
      </Center>
      <Box px="4" py="3">
        {children}
      </Box>
    </Flex>
  )
}
