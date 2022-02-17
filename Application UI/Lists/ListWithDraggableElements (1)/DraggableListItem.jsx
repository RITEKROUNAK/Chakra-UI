import * as React from 'react'
import { MotionListItem } from './MotionListItem'

export const DraggableListItem = (props) => {
  const { index, measurePosition, onPositionUpdate, ...rest } = props
  const ref = React.useRef(null)
  const [isDragging, setIsDragging] = React.useState(false)
  React.useEffect(() => {
    measurePosition(index, {
      height: ref?.current?.offsetHeight ?? 0,
      top: ref?.current?.offsetTop ?? 0,
    })
  })
  return (
    <MotionListItem
      ref={ref}
      initial={false}
      animate={
        isDragging
          ? {
              zIndex: 1,
            }
          : {
              zIndex: 0,
              transition: {
                delay: 0.3,
              },
            }
      }
      layout
      drag="y"
      dragConstraints={{
        top: 0,
        bottom: 0,
      }}
      dragElastic={1.0}
      listStyleType="none"
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => {
        setIsDragging(false)
      }}
      onViewportBoxUpdate={(_viewportBox, delta) => {
        isDragging && onPositionUpdate(index, delta.y.translate)
      }}
      cursor="pointer"
      userSelect="none"
      {...rest}
    />
  )
}
