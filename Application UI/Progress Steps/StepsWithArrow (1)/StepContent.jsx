import { AbsoluteCenter, Center } from '@chakra-ui/react'
import * as React from 'react'

export const StepContent = (props) => (
  <AbsoluteCenter height="full" width="full" position="absolute" zIndex={1}>
    <Center height="full" fontSize="sm" fontWeight="semibold" {...props} />
  </AbsoluteCenter>
)
