import { Grid, GridProps } from '@chakra-ui/react'
import * as React from 'react'
import { useAspectRatioGrid } from './useAspectRatioGrid'

interface AspectRatioGridProps extends Omit<GridProps, 'gap'> {
  aspectRatio: number
  minChildWidth: number
  gap?: number
}

export const AspectRatioGrid = (props: AspectRatioGridProps) => {
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
