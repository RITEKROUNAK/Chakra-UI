import { Box, Button, HStack, Img, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { HiBriefcase, HiCheck, HiCurrencyDollar, HiLocationMarker, HiPencil } from 'react-icons/hi'
import { TextWithIcon } from './TextWithIcon'
import { VerifiedBadge } from './VerifiedBadge'

export const App = () => {
  return (
    <Box p="8">
      <Box maxW="7xl" mx="auto">
        <Stack
          spacing={{ base: '8', md: '4' }}
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
          align="flex-start"
        >
          <Stack direction="row" flex="1" spacing="6" align={{ base: 'flex-start', md: 'center' }}>
            <Img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzU5fHxsYWR5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Melinda Turner"
              objectFit="cover"
              rounded="lg"
              h="16"
              w="16"
            />
            <Box flex="1">
              <HStack mb={{ base: '3', md: '1' }}>
                <Text fontSize="xl" fontWeight="bold">
                  Melinda Turner
                </Text>
                <VerifiedBadge />
              </HStack>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '3', lg: '6' }}>
                <TextWithIcon icon={<HiBriefcase />}>UI Designer @ Amazon</TextWithIcon>
                <TextWithIcon icon={<HiLocationMarker />}>Jumeirah, Dubai</TextWithIcon>
                <TextWithIcon icon={<HiCurrencyDollar />}>$200k - $900k</TextWithIcon>
              </Stack>
            </Box>
          </Stack>
          <HStack spacing="4">
            <Button variant="outline" leftIcon={<Box as={HiPencil} fontSize="lg" />}>
              Edit
            </Button>
            <Button colorScheme="blue" leftIcon={<Box as={HiCheck} fontSize="lg" />}>
              Approve
            </Button>
          </HStack>
        </Stack>
      </Box>
    </Box>
  )
}
