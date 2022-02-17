import {
  Box,
  BoxProps,
  Button,
  createIcon,
  Flex,
  List,
  ListItem,
  ListItemProps,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'

const CheckIcon = createIcon({
  viewBox: '0 0 17 12',
  d: 'M0 5.82857L1.64571 4.11429L5.48571 7.2L14.8114 0L16.4571 1.71429L5.48571 12L0 5.82857Z',
})

const PricingDetail = (props: ListItemProps) => {
  const { children, ...rest } = props
  return (
    <ListItem display="flex" alignItems="flex-start" fontWeight="medium" maxW="260px" {...rest}>
      <CheckIcon mr="4" mt="1" color={mode('blue.500', 'blue.300')} />
      <Text as="span" display="inline-block">
        {children}
      </Text>
    </ListItem>
  )
}

const PopularBadge = (props: BoxProps) => (
  <Box
    whiteSpace="nowrap"
    top="-4"
    left="50%"
    transform="translateX(-50%)"
    pos="absolute"
    rounded="md"
    fontWeight="bold"
    fontSize="sm"
    px="4"
    py="1"
    textTransform="uppercase"
    bg="blue.500"
    color="white"
    {...props}
  />
)

interface PriceDisplayProps {
  currency: string
  price: number
}

const PriceDisplay = (props: PriceDisplayProps) => {
  const { currency, price } = props
  return (
    <Flex w="100%" align="center" justify="center" my="5" fontWeight="extrabold">
      <Text fontSize="4xl" mr="2">
        {currency}
      </Text>
      <Text fontSize="72px" lineHeight="1" letterSpacing="tight">
        {price}
      </Text>
    </Flex>
  )
}

const PricingWrapper = (props: BoxProps & { highlight?: boolean }) => {
  const { highlight, ...rest } = props

  const popularStyles: BoxProps = {
    borderWidth: '2px',
    borderColor: 'blue.500',
    zIndex: 1,
    px: '8',
    pt: '12',
    pb: '10',
    top: { lg: '-8' },
  }

  const styles = highlight ? popularStyles : null

  return (
    <Box
      w="full"
      maxW="md"
      mx="auto"
      bg={mode('white', 'gray.700')}
      px="10"
      pt="8"
      pb="8"
      rounded="lg"
      shadow="base"
      position="relative"
      {...styles}
      {...rest}
    />
  )
}

interface PricingCardProps extends BoxProps {
  features: string[]
  popular?: boolean
  name: string
  description: string
  price: number
  onClick?: () => void
}

export const PricingCard = (props: PricingCardProps) => {
  const { onClick, features, name, description, price, popular, ...rest } = props

  return (
    <PricingWrapper highlight={popular} {...rest}>
      {popular && <PopularBadge>Most Popular</PopularBadge>}

      <Flex direction="column" justify="center">
        <Text align="center" fontSize="2xl" fontWeight="bold">
          {name}
        </Text>
        <Text align="center" mt="2" color={mode('gray.600', 'gray.400')} maxW="16rem" mx="auto">
          {description}
        </Text>
        <PriceDisplay currency="$" price={price} />
        <Box
          as="button"
          display="inline-flex"
          mx="auto"
          color={mode('blue.500', 'blue.300')}
          fontWeight="semibold"
        >
          Switch to yearly billing
        </Box>
      </Flex>

      <List stylePosition="outside" mt="8" spacing={4}>
        {features.map((feature, idx) => (
          <PricingDetail key={idx}>{feature}</PricingDetail>
        ))}
      </List>

      <Button
        minH="3.5rem"
        rounded="lg"
        fontWeight="bold"
        colorScheme={popular ? 'blue' : 'gray'}
        mt="8"
        w="100%"
        onClick={onClick}
      >
        Get Started
      </Button>
    </PricingWrapper>
  )
}
