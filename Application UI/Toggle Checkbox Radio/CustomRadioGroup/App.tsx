import { Heading, VStack } from '@chakra-ui/react'
import * as React from 'react'
import { RadioGroup } from './RadioGroup'

export const App = () => {
  const options = ['1', '2', '3', '4', '5', '6', '7']

  return (
    <VStack spacing={6} mx="auto" maxW="5xl" width="full" p={{ base: 4, sm: 6, md: 8 }}>
      <Heading fontSize="xl" textAlign="center">
        How likely would you be to recommend our product?
      </Heading>
      <RadioGroup name="rating" options={options} onChange={console.log} />
    </VStack>
  )
}
