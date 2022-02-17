import { Box, Heading, Stack, useCheckboxGroup } from '@chakra-ui/react'
import * as React from 'react'
import { ButtonCheckbox } from './Checkbox'
import { FaPlaystation, FaApple, FaPlaneDeparture } from 'react-icons/fa'

export const App = () => {
  const { getCheckboxProps } = useCheckboxGroup({ defaultValue: ['ps5'] })
  return (
    <Box as="section" py="12">
      <Box maxW="xl" mx="auto" width="full" px={{ base: '6', md: '8' }}>
        <Heading size="lg" mb="8" fontWeight="extrabold">
          Select valentine gift
        </Heading>
        <Stack spacing="5" justify="flex-start">
          <ButtonCheckbox
            {...getCheckboxProps({ value: 'ps5' })}
            icon={<FaPlaystation />}
            title="Playstation 5"
            description="1-2 business days"
            price="$3,459"
          >
            Option 1
          </ButtonCheckbox>
          <ButtonCheckbox
            {...getCheckboxProps({ value: 'm1' })}
            icon={<FaApple />}
            title="Macbook Pro - M1"
            description="5-8 business days"
            price="$4,899"
          >
            Option 2
          </ButtonCheckbox>
          <ButtonCheckbox
            {...getCheckboxProps({ value: 'bahamas' })}
            icon={<FaPlaneDeparture />}
            title="Flight to Bahamas"
            description="3-4 business days"
            price="$5,199"
          >
            Option 3
          </ButtonCheckbox>
        </Stack>
      </Box>
    </Box>
  )
}
