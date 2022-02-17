import { chakra } from '@chakra-ui/react'
import { motion } from 'framer-motion'
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

export const ActiveIndicator = motion(ActiveIndicatorImpl)
