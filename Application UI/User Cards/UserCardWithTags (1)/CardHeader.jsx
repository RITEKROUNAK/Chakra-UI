import { Flex, Heading } from '@chakra-ui/react'
import * as React from 'react'

export const CardHeader = (props) => {
  const { title, action, ...flexProps } = props
  return (
    <Flex justifyContent="space-between" alignItems="center" {...flexProps}>
      <Heading size="md" fontWeight="extrabold" letterSpacing="tight" marginEnd="6">
        {title}
      </Heading>
      {action}
    </Flex>
  )
}
