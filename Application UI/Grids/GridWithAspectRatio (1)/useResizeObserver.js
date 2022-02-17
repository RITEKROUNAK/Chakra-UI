import { useSafeLayoutEffect } from '@chakra-ui/react'
import * as React from 'react'
/**
 * A very simpe resize observer hoook.
 * For a more sophisticated solution have a look here:
 *
 * {@link https://github.com/streamich/react-use/blob/master/docs/useMeasure.md react-use}
 * {@link https://github.com/ZeeCoder/use-resize-observer use-resize-observer}
 */

export const useResizeObserver = () => {
  const ref = React.useRef(null)
  const [width, setWidth] = React.useState(0)
  const [height, setHeight] = React.useState(0)
  useSafeLayoutEffect(() => {
    if (ref.current) {
      const observer = new ResizeObserver(([entry]) => {
        setWidth(entry.contentRect.width)
        setHeight(entry.contentRect.height)
      })
      observer.observe(ref.current)
      return () => {
        observer.disconnect()
      }
    }
  }, [ref])
  return {
    ref,
    height,
    width,
  }
}
