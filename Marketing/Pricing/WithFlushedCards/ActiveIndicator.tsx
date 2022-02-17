import { chakra, HTMLChakraProps } from '@chakra-ui/react'
import { HTMLMotionProps, motion } from 'framer-motion'

const ActiveIndicatorImpl = chakra('div', {
  baseStyle: {
    w: 'full',
    h: 'full',
    rounded: 'full',
    pos: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  },
})

export type ActiveIndicatorProps = HTMLChakraProps<'div'> & HTMLMotionProps<'div'>
export const ActiveIndicator = motion(ActiveIndicatorImpl)
