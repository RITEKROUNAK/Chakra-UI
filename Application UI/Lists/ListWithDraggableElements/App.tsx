import { Box, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { DraggableListItem } from './DraggableListItem'
import { useDraggableList } from './useDraggableList'

export const App = () => {
  const initialItems = ['200', '300', '400', '500', '600']
  const { items, handlePositionUpdate, measurePosition } = useDraggableList(initialItems)

  return (
    <Box as="section" p="10">
      <Box p="16" maxW="sm" mx="auto">
        <Stack as="ul" spacing="4">
          {items.map((hue, index) => (
            <DraggableListItem
              key={hue}
              index={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ cursor: 'grabbing', scale: 1.12 }}
              height="16"
              bg={`blue.${hue}`}
              borderRadius="lg"
              boxShadow="md"
              position="relative"
              onPositionUpdate={handlePositionUpdate}
              measurePosition={measurePosition}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  )
}
