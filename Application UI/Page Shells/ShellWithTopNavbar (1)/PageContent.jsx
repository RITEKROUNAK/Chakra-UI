import { Box, Container, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

export const PageContent = () => {
  return (
    <Box as="main" py="8" flex="1">
      <Container maxW="7xl">
        <Box bg={mode('white', 'gray.700')} p="6" rounded="lg" shadow="base">
          <Box
            border="3px dashed currentColor"
            color={mode('gray.200', 'gray.600')}
            h="96"
            rounded="lg"
          />
        </Box>
      </Container>
    </Box>
  )
}
