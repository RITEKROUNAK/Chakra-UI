import * as React from 'react'
import { MotionBox, MotionBoxProps } from './MotionBox'

export const Circle = (props: MotionBoxProps) => (
  <MotionBox bg="white" width="4" height="4" rounded="full" {...props} />
)
