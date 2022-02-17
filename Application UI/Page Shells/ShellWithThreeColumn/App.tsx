import { Box, Flex } from '@chakra-ui/react'
import * as React from 'react'
import { MobileTopBar } from './MobileTopBar'
import { Sidebar } from './Sidebar'

export const App: React.FC = () => {
  return (
    <Flex h="100vh" flexDirection="column">
      <MobileTopBar />
      <Flex flex="1" overflow="hidden">
        <Sidebar display={{ base: 'none', md: 'flex' }} />
        <Flex
          display={{ base: 'none', lg: 'block' }}
          width="96"
          direction="column"
          overflowY="auto"
          borderRightWidth="1px"
          p="6"
        >
          <Box borderWidth="2px" rounded="base" borderStyle="dashed" h="full" />
        </Flex>
        <Flex flex="1" p="6">
          <Box borderWidth="2px" rounded="base" borderStyle="dashed" h="full" w="full" />
        </Flex>
      </Flex>
    </Flex>
  )
}
