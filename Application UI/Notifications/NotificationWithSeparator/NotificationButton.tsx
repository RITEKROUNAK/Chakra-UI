import { Button, ButtonProps } from '@chakra-ui/react'
import * as React from 'react'

export const NotificationButton = (props: ButtonProps) => (
  <Button variant="ghost" size="sm" px="8" minH="10" borderRadius="none" flex="1" {...props} />
)
