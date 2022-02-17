export const getFluidGridProps = (options) => {
  const { items, maxColumns, width, gap, aspectRatio } = options
  const columns = Math.min(items, maxColumns)
  const rows = Math.ceil(items / columns)
  const itemWidth = (width - (columns - 1) * gap) / columns
  const itemHeight = itemWidth / aspectRatio
  return {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, ${itemHeight}px)`,
  }
}
