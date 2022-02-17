import { chakra } from '@chakra-ui/react'

export const ArrowButton = chakra('button', {
  baseStyle: {
    display: { base: 'none', lg: 'flex' },
    alignItems: 'center',
    justifyContent: 'center',
    rounded: 'full',
    pos: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    outline: '0',
    w: '2rem',
    h: '2rem',
    fontSize: '1rem',
    transition: 'all 0.2s',
    _hover: { bg: 'whiteAlpha.500' },
    _focus: { shadow: 'outline' },
    _disabled: { opacity: 0.4 },
    color: 'white',
  },
})
