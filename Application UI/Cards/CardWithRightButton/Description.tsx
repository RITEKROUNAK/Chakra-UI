import { Badge, Box, Button, Stack, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

interface DescriptionProps {
  icon: React.ReactElement
  title: string
  children: React.ReactNode
  isRecommended?: boolean
  onClickEnable?: React.MouseEventHandler
}

export const Description = (props: DescriptionProps) => {
  const { title, children, icon, isRecommended, onClickEnable } = props
  return (
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      spacing="5"
      justify="space-between"
      pos="relative"
    >
      <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" align="flex-start" flex="1">
        <Box aria-hidden fontSize="2xl" pt="1" color="gray.500">
          {icon}
        </Box>
        <Box flex="1">
          <Box as="h4" fontWeight="bold" maxW="xl">
            <span>{title}</span> {isRecommended && <Badge marginStart="1">Recommended</Badge>}
          </Box>
          <Box
            maxW={{ base: 'xs', md: 'unset' }}
            color={mode('gray.600', 'gray.400')}
            fontSize="sm"
          >
            {children}
          </Box>
        </Box>
      </Stack>
      <Button colorScheme="blue" onClick={onClickEnable}>
        Enable
      </Button>
    </Stack>
  )
}
