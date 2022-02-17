import * as React from 'react'
import { arrayMove } from './arrayMove'
import { findIndex } from './findIndex'

export const useDraggableList = (initialItems) => {
  const [items, setItems] = React.useState(initialItems) // We need to collect an array of height and position data for all of its component's
  // children, so we can later us that in calculations to decide when a dragging
  // item should swap places with its siblings.

  const positions = React.useRef([]).current

  const measurePosition = (index, offset) => (positions[index] = offset) // Find the ideal index for a dragging item based on its position in the array, and its
  // current drag offset. If it's different to its current index, we swap this item with that
  // sibling.

  const handlePositionUpdate = (index, yOffset) => {
    const targetIndex = findIndex({
      index,
      yOffset,
      positions,
    })

    if (targetIndex !== index) {
      setItems(arrayMove(items, index, targetIndex))
    }
  }

  return {
    items,
    measurePosition,
    handlePositionUpdate,
  }
}
