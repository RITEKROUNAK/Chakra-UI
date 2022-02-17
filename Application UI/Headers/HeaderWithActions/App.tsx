import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { BsCaretLeftFill, BsFillCaretDownFill, BsSearch } from 'react-icons/bs'

export const App = () => {
  return (
    <Box minH="400px" p={{ base: '4', md: '8' }}>
      <Box maxW="7xl" mx="auto">
        <Link
          href="#"
          display="inline-flex"
          alignItems="center"
          color={mode('blue.600', 'blue.400')}
          fontSize="sm"
          fontWeight="semibold"
          mb="4"
          rounded="lg"
          px="2"
          py="1"
          _hover={{ bg: mode('gray.50', 'gray.700') }}
        >
          <Box as={BsCaretLeftFill} fontSize="xs" marginEnd="1" />
          Back to list
        </Link>
        <Stack
          spacing="5"
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'flex-start', md: 'center' }}
        >
          <Stack>
            <Heading size="lg">Vendor List</Heading>
            <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
              Count: 1,200 contacts
            </Text>
          </Stack>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing="4"
            justify="flex-end"
            flex="1"
            w={{ base: 'full', md: 'auto' }}
          >
            <InputGroup maxW={{ md: '320px' }} w="full">
              <InputRightElement color="gray.400" pointerEvents="none">
                <BsSearch />
              </InputRightElement>
              <Input bg={mode('gray.50', 'gray.800')} placeholder="Search for contact" />
            </InputGroup>
            <Stack display="inline-flex" direction="row" spacing="4">
              <Menu placement="bottom">
                <MenuButton
                  as={Button}
                  variant="outline"
                  colorScheme="blue"
                  rightIcon={<BsFillCaretDownFill fontSize="0.8em" />}
                >
                  Actions
                </MenuButton>
                <MenuList>
                  <MenuItem>Re-order columns</MenuItem>
                  <MenuItem>Add new property</MenuItem>
                  <MenuItem>Import list</MenuItem>
                </MenuList>
              </Menu>
              <Button flexShrink={0} colorScheme="blue" fontWeight="bold">
                Add Contact
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}
