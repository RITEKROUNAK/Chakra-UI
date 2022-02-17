import { Box, Flex } from '@chakra-ui/react'
import * as React from 'react'
import { Progressbar } from './ProgressBar'
import { Step } from './Step'
import { useProgressState } from './useProgressState'
import steps from './data.json'

export const App = () => {
  const { value, getState, onClick } = useProgressState(steps)
  return (
    <Box mx="auto" maxW="3xl" py="10" px={{ base: '6', md: '8' }}>
      <Box as="nav" aria-label="Steps" position="relative">
        <Flex justify="space-between" align="center" as="ol" listStyleType="none" zIndex={1}>
          {steps.map((step, index) => (
            <Step label={step.label} key={index} state={getState(index)} onClick={onClick(index)}>
              {index + 1}
            </Step>
          ))}
        </Flex>
        <Progressbar value={value} />
      </Box>
    </Box>
  )
}
