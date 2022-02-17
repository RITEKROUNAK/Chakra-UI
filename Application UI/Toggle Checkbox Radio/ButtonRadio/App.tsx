import { Badge, Box, Heading, Text } from '@chakra-ui/react'
import * as React from 'react'
import { HiBriefcase, HiCursorClick } from 'react-icons/hi'
import { ButtonRadioGroup } from './ButtonRadioGroup'

export const App = () => {
  return (
    <Box as="section" py="12">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <Box textAlign="center" mb="10">
          <Badge px="3" py="1" variant="solid" colorScheme="blue">
            Step 1
          </Badge>
          <Heading size="lg" fontWeight="extrabold" mt="6" mb="2">
            Choose what you want to measure
          </Heading>
          <Text maxW="md" mx="auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Text>
        </Box>
        <Box maxW="xl" mx="auto">
          <ButtonRadioGroup
            defaultValue="analytics"
            options={[
              {
                label: 'Business Suite',
                description: 'For websites, apps and digital products',
                icon: <HiBriefcase />,
                value: 'analytics',
              },
              {
                label: 'Click Analytics',
                description: 'For page tracking, click detection and other interactions',
                icon: <HiCursorClick />,
                value: 'intranet',
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  )
}
