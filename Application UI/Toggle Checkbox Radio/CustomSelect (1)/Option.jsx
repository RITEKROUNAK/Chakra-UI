import { chakra, forwardRef, omitThemingProps, useMultiStyleConfig } from '@chakra-ui/react'
import * as React from 'react'

export const Option = forwardRef((props, ref) => {
  const { children, value, ...rest } = omitThemingProps(props)
  const { option } = useMultiStyleConfig('CustomSelect', props)
  return (
    <chakra.li ref={ref} __css={option} {...rest}>
      {children || value}
    </chakra.li>
  )
})
