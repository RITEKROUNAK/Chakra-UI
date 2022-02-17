import { useSafeLayoutEffect } from '@chakra-ui/react'
import * as React from 'react'

export const useGridConstraints = (
  parentWidth,
  parentHeight,
  minChildWidth,
  minChildHeight,
  gap = 0,
) => {
  const [constraints, setConstraints] = React.useState({
    maxColumns: 0,
    maxRows: 0,
    maxItems: 0,
  })
  useSafeLayoutEffect(() => {
    const maxColumns = getMax(parentWidth, minChildWidth, gap)
    const maxRows = getMax(parentHeight, minChildHeight, gap)
    const maxItems = maxColumns * maxRows
    setConstraints({
      maxColumns,
      maxRows,
      maxItems,
    })
  }, [parentWidth, parentHeight, minChildWidth, minChildHeight, gap])
  return constraints
}
export const getMax = (length, minLength, gap) =>
  length && minLength ? Math.floor((length + gap) / (minLength + gap)) : 0
