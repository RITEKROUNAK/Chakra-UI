import { Box, ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import { CustomSelect } from './CustomSelect'
import { Option } from './Option'
import { theme } from './theme'

/**
 * Please note - this component uses Downshift as a dependency. This must be installed additionally using `yarn add downshift`
 */
export const App = () => {
  const [selectedOption, setSelectedOption] = React.useState<string | null | undefined>(null)

  return (
    <ChakraProvider theme={theme}>
      <Box maxW="xs" mx="auto" py="12" minH="2xs">
        <CustomSelect
          name="Fruit"
          colorScheme="blue"
          value={selectedOption}
          onChange={setSelectedOption}
          placeholder="Select a fruit"
        >
          <Option value="Apple 🍎" />
          <Option value="Banana 🍌" />
          <Option value="Pineapple 🍍" />
        </CustomSelect>
      </Box>
    </ChakraProvider>
  )
}
