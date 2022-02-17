import { Box, Container, Heading, Stack, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { TabLink } from './TabLink'

export const PageHeader = () => {
  return (
    <Box bg={mode('white', 'gray.900')} pt="8" shadow="sm">
      <Container maxW="7xl">
        <Heading size="lg" mb="3">
          Forms
        </Heading>
        <Stack direction="row" spacing="4">
          <TabLink aria-current="page" href="#">
            Overview
          </TabLink>
          <TabLink href="#">Analytics</TabLink>
          <TabLink href="#">Automation</TabLink>
        </Stack>
      </Container>
    </Box>
  )
}
