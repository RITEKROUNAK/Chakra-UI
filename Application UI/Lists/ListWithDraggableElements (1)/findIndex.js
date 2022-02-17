export const findIndex = (args) => {
  const { index, yOffset, positions } = args
  const buffer = 30

  const distance = (a, b) => Math.abs(a - b)

  const clamp = (min, max, v) => Math.min(Math.max(v, min), max)

  const { top, height } = positions[index]
  const bottom = top + height
  let target = index // If moving down

  if (yOffset > 0) {
    const nextItem = positions[index + 1]
    if (nextItem === undefined) return index
    const swapOffset = distance(bottom, nextItem.top + nextItem.height / 2) + buffer
    if (yOffset > swapOffset) target = index + 1 // If moving up
  } else if (yOffset < 0) {
    const prevItem = positions[index - 1]
    if (prevItem === undefined) return index
    const prevBottom = prevItem.top + prevItem.height
    const swapOffset = distance(top, prevBottom - prevItem.height / 2) + buffer
    if (yOffset < -swapOffset) target = index - 1
  }

  return clamp(0, positions.length, target)
}
