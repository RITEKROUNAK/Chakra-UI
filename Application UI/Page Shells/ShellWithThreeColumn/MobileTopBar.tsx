import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { Logo } from './Logo'
import { Sidebar } from './Sidebar'
import { useMobileMenuState } from './useMobileMenuState'

export const MobileTopBar = () => {
  const { isOpen, onClose, onOpen } = useMobileMenuState()
  return (
    <Flex
      align="center"
      justify="space-between"
      py="2"
      px="4"
      bg={mode('gray.50', 'gray.800')}
      display={{ base: 'flex', md: 'none' }}
      borderBottomWidth="1px"
    >
      <Logo h="6" iconColor="blue.600" />
      <IconButton
        onClick={onOpen}
        variant="unstyled"
        display="flex"
        cursor="pointer"
        aria-label="Menu"
        icon={<HiOutlineMenu fontSize="1.5rem" />}
      />
      <Drawer
        size="xs"
        placement="left"
        isOpen={isOpen}
        blockScrollOnMount={false}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg={mode('white', 'gray.800')} shadow="none" position="relative" maxW="64">
          <Sidebar width="full" height="full" bg="inherit" border="0" />
          <DrawerCloseButton
            bg="blue.500"
            _hover={{ bg: 'blue.600' }}
            _active={{ bg: 'blue.700' }}
            rounded="0"
            position="absolute"
            color="white"
            right="-8"
            top="0"
          />
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}
