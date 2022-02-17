import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  ButtonGroup,
  Grid,
  Heading,
  IconButton,
  Img,
  Stack,
  StackProps,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiChatAlt, HiChevronRight, HiPencilAlt, HiPhone } from 'react-icons/hi'

interface DescriptionProps extends StackProps {
  title: string
  children: React.ReactNode
}

const Description = (props: DescriptionProps) => {
  const { title, children, ...rest } = props
  return (
    <Stack as="dl" spacing="1" {...rest}>
      <Text
        as="dt"
        fontWeight="bold"
        fontSize="xs"
        casing="uppercase"
        color="gray.500"
        whiteSpace="nowrap"
      >
        {title}
      </Text>
      <Text fontSize="sm" fontWeight="medium">
        {children}
      </Text>
    </Stack>
  )
}

export const App = () => {
  return (
    <Box>
      <Box px="8" py="4">
        <Breadcrumb
          maxW="7xl"
          mx="auto"
          fontSize="sm"
          fontWeight="semibold"
          separator={<Box as={HiChevronRight} color="gray.500" fontSize="lg" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#" color={mode('blue.600', 'blue.300')}>
              Leads
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Kelvin</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box px="8" py="4">
        <Box maxW="7xl" mx="auto" pos="relative">
          <Stack spacing="10" direction={{ base: 'column', md: 'row' }} align="flex-start">
            <Img
              src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fG1hbiUyMHNpbWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Kelvin Domitrius"
              w="32"
              h="32"
              rounded="lg"
              objectFit="cover"
            />
            <Box w={{ base: 'full', md: 'auto' }}>
              <Heading size="md" mb="8" mt={{ lg: '3' }}>
                Kelvin Domitrius
              </Heading>
              <Grid
                templateColumns={{
                  base: '1fr',
                  sm: 'repeat(2, 1fr)',
                  lg: 'repeat(4, fit-content(320px))',
                }}
                columnGap="20"
                rowGap={{ base: '8', lg: '14' }}
              >
                <Description title="Company">The Tech Bros</Description>
                <Description title="Time spent">1h 34min</Description>
                <Description title="Total Purchase">32</Description>
                <Description title="Total Revenue">$45,900</Description>
              </Grid>
            </Box>
            <ButtonGroup variant="outline" pos={{ md: 'absolute' }} top="0" right="0">
              <IconButton aria-label="Call" icon={<HiPhone />} />
              <IconButton aria-label="Edit" icon={<HiPencilAlt />} />
              <Button variant="solid" colorScheme="blue" leftIcon={<HiChatAlt />}>
                Send Message
              </Button>
            </ButtonGroup>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
