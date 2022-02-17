import { Grid } from '@chakra-ui/react'
import * as React from 'react'
import { useAspectRatioGrid } from './useAspectRatioGrid'

export const AspectRatioGrid = (props) => {
  const { aspectRatio, minChildWidth, gap = 0, ...gridProps } = props
  const items = React.Children.count(props.children)
  const { ref, aspectRatioGridProps } = useAspectRatioGrid({
    aspectRatio,
    items,
    gap,
    minChildWidth,
  })
  return <Grid ref={ref} {...gridProps} {...aspectRatioGridProps} />
}
