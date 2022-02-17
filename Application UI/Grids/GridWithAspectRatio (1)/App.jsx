import { Box, Flex, GridItem, Stack, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { AspectRatioGrid } from './AspectRatioGrid'
import { GridItemAspectRatioSelect } from './GridItemAspectRatioSelect'
import { GridItemNumberInput } from './GridItemNumberInput'
import { GridItemWidthSelect } from './GridItemWidthSelect'

export const App = () => {
  const [items, setItems] = React.useState(2)
  const [minWidth, setMinWidth] = React.useState(320)
  const [aspectRatio, setAspectRatio] = React.useState(16 / 9)
  const bgColor = useColorModeValue('blue.500', 'blue.300')
  return (
    <Flex h="100vh" flexDirection="column">
      <Box
        minH="24"
        mx="auto"
        maxW={{
          base: 'full',
          md: 'md',
        }}
      >
        <Stack
          direction="row"
          h="full"
          spacing="6"
          justifyContent="center"
          alignItems="center"
          p="2"
        >
          <GridItemNumberInput
            value={items}
            onChange={(_string, value) => setItems(isNaN(value) ? 0 : value)}
            min={0}
            max={50}
          />
          <GridItemWidthSelect
            value={minWidth}
            onChange={(e) => setMinWidth(Number.parseInt(e.target.value))}
          />
          <GridItemAspectRatioSelect
            value={aspectRatio}
            onChange={(e) => setAspectRatio(Number.parseFloat(e.target.value))}
          />
        </Stack>
      </Box>
      <Flex flex="1" overflowY="auto" minH="0">
        <AspectRatioGrid aspectRatio={aspectRatio} minChildWidth={minWidth} gap={1}>
          {Array.from(Array(items).keys()).map((_, i) => (
            <GridItem key={i}>
              <Box h="full" bg={bgColor} />
            </GridItem>
          ))}
        </AspectRatioGrid>
      </Flex>
    </Flex>
  )
}
