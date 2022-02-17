import { useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import * as React from 'react'

export const useMobileMenuState = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const isMobile = useBreakpointValue({ base: true, lg: false })

  React.useEffect(() => {
    if (isMobile == false) {
      onClose()
    }
  }, [isMobile, onClose])

  return { isOpen, onClose, onOpen }
}
