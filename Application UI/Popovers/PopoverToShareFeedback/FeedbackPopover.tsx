import { Button, Popover, PopoverContent, PopoverTrigger, Portal } from '@chakra-ui/react'
import * as React from 'react'
import { FeedbackForm } from './FeedbackForm'

export const FeedbackPopover = () => {
  const initialFocusRef = React.useRef(null)
  return (
    // you should remove`isOpen` since is only there to look good for the showcase
    <Popover initialFocusRef={initialFocusRef} isOpen>
      <PopoverTrigger>
        <Button variant="outline">Feedback</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent boxShadow="xl" p="3" _focus={{ outline: 'none' }}>
          <FeedbackForm forwardedRef={initialFocusRef} />
        </PopoverContent>
      </Portal>
    </Popover>
  )
}
