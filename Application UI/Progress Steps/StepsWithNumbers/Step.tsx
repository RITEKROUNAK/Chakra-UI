import { Box, Circle, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

interface StepProps {
  state: 'active' | 'complete' | 'incomplete'
  label?: string
  children?: React.ReactNode
  onClick?: () => void
}

export const Step = (props: StepProps) => {
  const { label, children, state, onClick } = props

  const isCompleted = state === 'complete'
  const isIncompleted = state === 'incomplete'

  const inCompletedColor = useColorModeValue('gray.600', 'gray.300')
  const defaultColor = useColorModeValue('white', 'gray.900')
  const completedBg = useColorModeValue('blue.500', 'blue.300')
  const incompletedBg = useColorModeValue('gray.200', 'gray.600')

  return (
    <Box as="li" display="inline-flex">
      <button onClick={onClick}>
        <Circle
          aria-hidden
          zIndex={1}
          position="relative"
          size="8"
          bg={isCompleted ? completedBg : incompletedBg}
        >
          <Box as="span" color={isIncompleted ? inCompletedColor : defaultColor} fontWeight="bold">
            {children}
          </Box>
        </Circle>
        <Box srOnly>{isCompleted ? `${label} - Completed` : label}</Box>
      </button>
    </Box>
  )
}
