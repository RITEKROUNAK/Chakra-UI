import {
  Box,
  Button,
  HStack,
  Icon,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
} from '@chakra-ui/react'
import * as React from 'react'
import { GoCalendar, GoGlobe, GoPencil } from 'react-icons/go'
import { Card } from './Card'
import { CardContent } from './CardContent'
import { CardHeader } from './CardHeader'
import { UserAvatar } from './UserAvatar'

export const App = () => (
  <Box as="section" py="12" bg={useColorModeValue('gray.100', 'gray.800')}>
    <Card>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '4', md: '10' }}>
        <UserAvatar
          name="Samantha"
          src="https://images.unsplash.com/photo-1506935077180-46af676a2f6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          isVerified
        />
        <CardContent>
          <CardHeader
            title="Samantha Brooke"
            action={
              <Button
                size="sm"
                variant="outline"
                leftIcon={<Icon as={GoPencil} color="gray.400" marginStart="-1" />}
              >
                Edit
              </Button>
            }
          />
          <Text mt="1" fontWeight="medium">
            Creative Writer
          </Text>
          <Stack spacing="1" mt="2">
            <HStack fontSize="sm">
              <Icon as={GoGlobe} color="gray.500" />
              <Text>Ontario, Canada</Text>
            </HStack>
            <HStack fontSize="sm">
              <Icon as={GoCalendar} color="gray.500" />
              <Text>July, 2021</Text>
            </HStack>
          </Stack>

          <Text fontWeight="semibold" mt="8" mb="2">
            Interests
          </Text>
          <Wrap shouldWrapChildren>
            <Tag>Productivity</Tag>
            <Tag>Work</Tag>
            <Tag>Business</Tag>
            <Tag>Woman</Tag>
          </Wrap>
        </CardContent>
      </Stack>
    </Card>
  </Box>
)
