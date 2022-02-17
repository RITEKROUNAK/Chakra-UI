import * as React from 'react'
import { MotionBox } from './MotionBox'

export const Circle = (props) => (
  <MotionBox bg="white" width="4" height="4" rounded="full" {...props} />
)
