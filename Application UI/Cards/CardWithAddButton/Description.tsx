import { Box, HStack, IconButton, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { HiLocationMarker, HiPencilAlt, HiTrash } from 'react-icons/hi'

interface DescriptionProps {
  title: string
  children: React.ReactNode
  location: string
}

export const Description = (props: DescriptionProps) => {
  const { title, children, location } = props
  return (
    <Box position="relative">
      <Box fontWeight="bold" maxW="xl">
        {title}
      </Box>
      <HStack fontSize="sm" fontWeight="medium" color={mode('gray.500', 'white')} mt="1">
        <Box as={HiLocationMarker} fontSize="md" color="gray.400" />
        <span>{location}</span>
      </HStack>
      <Box mt="3" maxW="xl" color={mode('gray.600', 'gray.200')}>
        {children}
      </Box>
      <HStack
        position={{ sm: 'absolute' }}
        top={{ sm: '0' }}
        insetEnd={{ sm: '0' }}
        mt={{ base: '4', sm: '0' }}
      >
        <IconButton aria-label="Edit" icon={<HiPencilAlt />} rounded="full" size="sm" />
        <IconButton aria-label="Delete" icon={<HiTrash />} rounded="full" size="sm" />
      </HStack>
    </Box>
  )
}
