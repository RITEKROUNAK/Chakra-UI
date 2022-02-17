import { Box, Button, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { HiPencilAlt } from 'react-icons/hi'
import { Card } from './Card'
import { CardContent } from './CardContent'
import { CardHeader } from './CardHeader'
import { Property } from './Property'

export const App = () => (
  <Box as="section" bg={useColorModeValue('gray.100', 'inherit')} py="12" px={{ md: '8' }}>
    <Card maxW="3xl" mx="auto">
      <CardHeader
        title="Account Info"
        action={
          <Button variant="outline" minW="20" leftIcon={<HiPencilAlt />}>
            Edit
          </Button>
        }
      />
      <CardContent>
        <Property label="Name" value="Chakra UI" />
        <Property label="Email" value="chakra-ui.sh@gmail.com" />
        <Property label="Member since" value="February, 2021" />
        <Property label="Subscription Plan" value="Starter Pro" />
      </CardContent>
    </Card>
  </Box>
)
