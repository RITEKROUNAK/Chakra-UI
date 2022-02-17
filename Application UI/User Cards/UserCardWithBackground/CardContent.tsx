import { Box, BoxProps } from '@chakra-ui/react'
import * as React from 'react'

export const CardContent = (props: BoxProps) => (
  <Box textAlign={{ sm: 'center' }} pt="2" {...props} />
)
