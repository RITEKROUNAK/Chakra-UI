import { extendTheme } from '@chakra-ui/react'
import { getColor, mode } from '@chakra-ui/theme-tools'

export const theme = extendTheme({
  components: {
    CustomSelect: {
      parts: ['field', 'menu', 'option'],
      baseStyle: (props) => ({
        field: {
          width: '100%',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 50ms ease',
        },
        option: {
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          _focus: {
            bg: mode(`gray.100`, `whiteAlpha.100`)(props),
          },
          _hover: {
            bg: mode(`gray.100`, `whiteAlpha.100`)(props),
          },
          _selected: {
            bg: mode(`gray.200`, `whiteAlpha.200`)(props),
          },
          _disabled: {
            opacity: 0.4,
            cursor: 'not-allowed',
          },
        },
        menu: {
          bg: mode('white', 'gray.700')(props),
          boxShadow: mode('sm', 'dark-lg')(props),
          color: 'inherit',
          minW: '3xs',
          py: '2',
          borderRadius: 'md',
          borderWidth: '1px',
        },
      }),
      variants: {
        outline: (props) => ({
          field: {
            border: '1px solid',
            borderColor: 'inherit',
            _hover: {
              borderColor: mode('gray.300', 'whiteAlpha.400')(props),
            },
            _disabled: {
              opacity: 0.4,
              cursor: 'not-allowed',
              borderColor: 'inherit',
            },
            _readOnly: {
              boxShadow: 'none !important',
              userSelect: 'all',
            },
            _invalid: {
              borderColor: getColor(props.theme, mode('red.500', 'red.300')(props)),
              boxShadow: `0 0 0 1px ${getColor(props.theme, mode('red.500', 'red.300')(props))}`,
            },
            _focus: {
              borderColor: getColor(
                props.theme,
                mode(`${props.colorScheme}.500`, `${props.colorScheme}.300`)(props),
              ),
              boxShadow: `0 0 0 1px ${getColor(
                props.theme,
                mode(`${props.colorScheme}.500`, `${props.colorScheme}.300`)(props),
              )}`,
            },
            _expanded: {
              borderColor: getColor(
                props.theme,
                mode(`${props.colorScheme}.500`, `${props.colorScheme}.300`)(props),
              ),
              boxShadow: `0 0 0 1px ${getColor(
                props.theme,
                mode(`${props.colorScheme}.500`, `${props.colorScheme}.300`)(props),
              )}`,
            },
          },
        }),
      },
      sizes: {
        xs: {
          field: {
            fontSize: 'xs',
            px: 2,
            h: 6,
            borderRadius: 'sm',
          },
        },
        sm: {
          field: {
            fontSize: 'sm',
            px: 3,
            h: 8,
            borderRadius: 'sm',
          },
        },
        md: {
          option: {
            px: 4,
            h: 10,
          },
          field: {
            fontSize: 'md',
            px: 4,
            h: 10,
            borderRadius: 'md',
          },
        },
        lg: {
          field: {
            fontSize: 'lg',
            px: 4,
            h: 12,
            borderRadius: 'md',
          },
        },
      },
      defaultProps: {
        size: 'md',
        variant: 'outline',
        colorScheme: 'teal',
      },
    },
  },
})
