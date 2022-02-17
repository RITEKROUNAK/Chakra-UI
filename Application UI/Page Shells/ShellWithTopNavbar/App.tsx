import { Flex, HStack, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { Logo } from './Logo'
import { MobileHamburgerMenu } from './MobileHamburgerMenu'
import { NavMenu } from './NavMenu'
import { Notification } from './Notification'
import { PageContent } from './PageContent'
import { PageHeader } from './PageHeader'
import { ProfileDropdown } from './ProfileDropdown'
import { useMobileMenuState } from './useMobileMenuState'

export const App = () => {
  const { isMenuOpen, toggle } = useMobileMenuState()
  return (
    <Flex direction="column" bg={mode('gray.100', 'gray.800')} height="100vh">
      <Flex align="center" bg="blue.600" color="white" px="6" minH="16">
        <Flex justify="space-between" align="center" w="full">
          <MobileHamburgerMenu onClick={toggle} isOpen={isMenuOpen} />
          <NavMenu.Mobile />

          {/* Desktop Logo placement */}
          <Logo display={{ base: 'none', lg: 'block' }} flexShrink={0} h="5" marginEnd="10" />

          {/* Desktop Navigation Menu */}
          <NavMenu.Desktop />

          {/* Mobile Logo placement */}
          <Logo flex={{ base: '1', lg: '0' }} display={{ lg: 'none' }} flexShrink={0} h="5" />

          <HStack spacing="3">
            <Notification display={{ base: 'none', lg: 'inline-flex' }} />
            <ProfileDropdown />
          </HStack>
        </Flex>
      </Flex>

      <PageHeader />
      <PageContent />
    </Flex>
  )
}
