import { Position } from './useDraggableList'

interface Args {
  index: number
  yOffset: number
  positions: Position[]
}

export const findIndex = (args: Args) => {
  const { index, yOffset, positions } = args
  const buffer = 30

  const distance = (a: number, b: number) => Math.abs(a - b)
  const clamp = (min: number, max: number, v: number) => Math.min(Math.max(v, min), max)

  const { top, height } = positions[index]
  const bottom = top + height

  let target = index

  // If moving down
  if (yOffset > 0) {
    const nextItem = positions[index + 1]
    if (nextItem === undefined) return index

    const swapOffset = distance(bottom, nextItem.top + nextItem.height / 2) + buffer
    if (yOffset > swapOffset) target = index + 1

    // If moving up
  } else if (yOffset < 0) {
    const prevItem = positions[index - 1]
    if (prevItem === undefined) return index

    const prevBottom = prevItem.top + prevItem.height
    const swapOffset = distance(top, prevBottom - prevItem.height / 2) + buffer
    if (yOffset < -swapOffset) target = index - 1
  }

  return clamp(0, positions.length, target)
}
