import { Avatar, AvatarProps, Box, Flex, FlexProps, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

interface CardWithAvatarProps extends FlexProps {
  avatarProps: AvatarProps
}

export const CardWithAvatar = (props: CardWithAvatarProps) => {
  const { children, avatarProps, ...rest } = props
  return (
    <Flex
      direction="column"
      alignItems="center"
      rounded="md"
      padding="8"
      position="relative"
      bg={useColorModeValue('white', 'gray.700')}
      shadow={{ md: 'base' }}
      {...rest}
    >
      <Box position="absolute" inset="0" height="20" bg="blue.600" roundedTop="inherit" />
      <Avatar size="xl" {...avatarProps} />
      {children}
    </Flex>
  )
}
