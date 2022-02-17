import { VStack, Icon, Text, useColorModeValue, StackProps } from '@chakra-ui/react'
import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

export const FeedbackSuccessPanel = (props: StackProps) => (
  <VStack spacing="0" justify="center" {...props}>
    <Icon
      fontSize="40px"
      as={FiCheckCircle}
      mb="4"
      color={useColorModeValue('blue.500', 'blue.300')}
    />
    <Text fontSize="sm" lineHeight="short" textAlign="center">
      We have received your feedback.
    </Text>
    <Text fontSize="sm" lineHeight="short" textAlign="center">
      Thank you for your help.
    </Text>
  </VStack>
)
