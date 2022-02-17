import { Box, HStack, Img, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SocialLink } from './SocialLink'
import { Member as MemberType } from './_data'

interface MemberProps {
  data: MemberType
  children: React.ReactNode
}

export const Member = (props: MemberProps) => {
  const { data, children } = props
  const { image, role, name, twitter, github } = data

  return (
    <Box>
      <Stack direction="row" spacing={6}>
        <Img w="20" h="20" minW="20" objectFit="cover" rounded="full" src={image} alt={name} />
        <Box>
          <Text fontWeight="extrabold" fontSize="xl" mb="2">
            {name}
          </Text>
          <Text color={useColorModeValue('gray.500', 'whiteAlpha.700')} fontWeight="medium">
            {role}
          </Text>
          <HStack mt="1" mb="6">
            <SocialLink
              href="#"
              fontWeight="bold"
              color={useColorModeValue('blue.600', 'blue.300')}
            >
              @{twitter}
            </SocialLink>
            <SocialLink href="#" icon={FaLinkedin} label="LinkedIn" />
            <SocialLink href={github} icon={FaGithub} label="Github" />
          </HStack>
          <Text fontWeight="medium" color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}>
            {children}
          </Text>
        </Box>
      </Stack>
    </Box>
  )
}
