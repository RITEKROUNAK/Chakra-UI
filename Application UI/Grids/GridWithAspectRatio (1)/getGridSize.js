export const getGridSize = (options) => {
  const { items, columns, width, height, aspectRatio, gap } = options
  const rows = Math.ceil(items / columns)
  const availableWidth = width - (columns - 1) * gap
  const availableHeight = height - (rows - 1) * gap
  const scaledToHeight = (columns / rows) * aspectRatio < availableWidth / availableHeight
  const itemWidth = scaledToHeight
    ? Math.floor((availableHeight / rows) * aspectRatio)
    : Math.floor(availableWidth / columns)
  const itemHeight = Math.floor(itemWidth / aspectRatio)
  const area = itemWidth * itemHeight * items
  return {
    columns,
    rows,
    itemWidth,
    itemHeight,
    area,
  }
}
