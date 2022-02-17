import { Box, Button, chakra, Divider, Heading, Stack, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { Card } from './Card'
import { EmailTextField } from './EmailTextField'
import { NameTextField } from './NameTextField'

export const App = () => {
  return (
    <Box as="section" py="12" bg={useColorModeValue('gray.100', 'gray.800')}>
      <Box maxW="7xl" mx="auto" px={{ sm: '8' }}>
        <Card>
          <Heading size="md" mb="4">
            User Details
          </Heading>
          <Divider mb="6" />
          <chakra.form maxW="sm">
            <Stack spacing="4">
              <NameTextField value="Chakra UI Pro" />
              <EmailTextField value="support@chakra-ui.com" />
            </Stack>
            <Button colorScheme="blue" mt="8">
              Save changes
            </Button>
          </chakra.form>
        </Card>
      </Box>
    </Box>
  )
}
