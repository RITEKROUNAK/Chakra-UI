import { useDisclosure } from '@chakra-ui/react'
import { isFocusable, getOwnerDocument, isRightClick } from '@chakra-ui/utils'
import * as React from 'react'

const getTarget = (event) => event.relatedTarget || document.activeElement

export function useNavMenu() {
  const { isOpen, onClose, onToggle, onOpen } = useDisclosure()
  const menuRef = React.useRef(null)
  const triggerRef = React.useRef(null)
  const timeoutRef = React.useRef()
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const focusMenu = () => {
    timeoutRef.current = window.setTimeout(() => {
      menuRef.current?.focus({
        preventScroll: true,
      })
    }, 100)
  }

  const getTriggerProps = () => {
    const triggerProps = {
      ref: triggerRef,
      'aria-expanded': isOpen,
      'aria-controls': 'menu',
      'aria-haspopup': 'true',
    }

    triggerProps.onClick = (event) => {
      if (isRightClick(event)) return
      onToggle()

      if (!isOpen) {
        focusMenu()
      }
    }

    triggerProps.onBlur = (event) => {
      const target = getTarget(event)

      if (isOpen && !menuRef.current?.contains(target)) {
        onClose()
      }
    }

    triggerProps.onKeyDown = (event) => {
      if (isOpen && event.key === 'Escape') {
        onClose()
        triggerRef.current?.focus({
          preventScroll: true,
        })
      }

      if (event.key === 'ArrowDown') {
        if (!isOpen) onOpen()
        focusMenu()
      }
    }

    return triggerProps
  }

  const getMenuProps = () => {
    const menuProps = {
      ref: menuRef,
      id: 'menu',
      tabIndex: -1,
    }

    menuProps.onKeyDown = (event) => {
      if (!isOpen) return

      switch (event.key) {
        case 'Escape': {
          onClose()
          return triggerRef.current?.focus()
        }

        case 'ArrowDown': {
          const doc = getOwnerDocument(menuRef.current)
          const next = doc?.activeElement?.nextElementSibling
          return next?.focus()
        }

        case 'ArrowUp': {
          const doc = getOwnerDocument(menuRef.current)
          const prev = doc?.activeElement?.previousElementSibling
          const el = prev ?? triggerRef.current
          return el.focus()
        }

        default:
          break
      }
    }

    menuProps.onBlur = (event) => {
      const target = getTarget(event)
      const shouldBlur =
        isOpen && !target.isSameNode(triggerRef.current) && !menuRef.current?.contains(target)

      if (shouldBlur) {
        onClose()

        if (!isFocusable(target)) {
          triggerRef.current?.focus({
            preventScroll: true,
          })
        }
      }
    }

    return menuProps
  }

  return {
    isOpen,
    onClose,
    getTriggerProps,
    getMenuProps,
  }
}
