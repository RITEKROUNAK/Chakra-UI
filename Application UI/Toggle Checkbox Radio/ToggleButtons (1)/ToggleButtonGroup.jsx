import { ButtonGroup, useRadioGroup } from '@chakra-ui/react'
import * as React from 'react'

export const ToggleButtonGroup = (props) => {
  const { children, name, defaultValue, value, onChange, ...rest } = props
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
    value,
    onChange,
  })
  const buttons = React.useMemo(
    () =>
      React.Children.toArray(children)
        .filter(React.isValidElement)
        .map((button, index, array) => {
          const isFirstItem = index === 0
          const isLastItem = array.length === index + 1
          const styleProps = Object.assign({
            ...(isFirstItem && !isLastItem
              ? {
                  borderRightRadius: 0,
                }
              : {}),
            ...(!isFirstItem && isLastItem
              ? {
                  borderLeftRadius: 0,
                }
              : {}),
            ...(!isFirstItem && !isLastItem
              ? {
                  borderRadius: 0,
                }
              : {}),
            ...(!isLastItem
              ? {
                  mr: '-px',
                }
              : {}),
          })
          return React.cloneElement(button, {
            ...styleProps,
            radioProps: getRadioProps({
              value: button.props.value,
              disabled: props.isDisabled || button.props.isDisabled,
            }),
          })
        }),
    [children, getRadioProps, props.isDisabled],
  )
  return <ButtonGroup {...getRootProps(rest)}>{buttons}</ButtonGroup>
}
