import { getGridSize } from './getGridSize'

interface GetStaticGridPropsOptions {
  items: number
  maxColumns: number
  aspectRatio: number
  width: number
  height: number
  gap: number
}

export const getStaticGridProps = (options: GetStaticGridPropsOptions) => {
  const initialGridSize = {
    columns: 0,
    rows: 0,
    itemWidth: 0,
    itemHeight: 0,
    area: 0,
  }

  const gridSize = getSensibleNumberOfColumns(options).reduce((prev, columns, _i, array) => {
    const curr = getGridSize({ ...options, columns })
    if (prev.area > curr.area) {
      array.splice(1)
      return prev
    }
    return curr
  }, initialGridSize)

  const { itemWidth, itemHeight, rows, columns } = gridSize
  return {
    gridTemplateColumns: `repeat(${columns}, ${itemWidth}px)`,
    gridTemplateRows: `repeat(${rows}, ${itemHeight}px)`,
    alignContent: 'center',
  }
}

interface GetSensibleNumberOfColumnsOptions {
  items: number
  maxColumns: number
}

const getSensibleNumberOfColumns = (options: GetSensibleNumberOfColumnsOptions) => {
  const { items, maxColumns } = options
  const start = Math.max(1, Math.floor(Math.sqrt(items)) - 1)
  const end = Math.min(items, maxColumns) + 1
  return Array.from(Array(end - start)).map((_, i) => i + start)
}
