import {
  Box,
  Button,
  createIcon,
  Divider,
  Heading,
  List,
  ListItem,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
const CheckIcon = createIcon({
  viewBox: '0 0 17 12',
  d: 'M0 5.82857L1.64571 4.11429L5.48571 7.2L14.8114 0L16.4571 1.71429L5.48571 12L0 5.82857Z',
})

const PricingDetail = (props) => {
  const { children, iconColor, ...rest } = props
  return (
    <ListItem display="flex" alignItems="flex-start" fontWeight="medium" maxW="260px" {...rest}>
      <CheckIcon marginEnd="3" mt="1" color={iconColor} />
      <Text as="span" display="inline-block">
        {children}
      </Text>
    </ListItem>
  )
}

export const PricingCard = (props) => {
  const {
    features,
    name,
    description,
    duration,
    price,
    extras,
    onClick,
    colorScheme: c,
    ...rest
  } = props
  return (
    <Box
      p={{
        base: '10',
        md: '16',
      }}
      {...rest}
    >
      <Heading>{name}</Heading>
      <Divider
        opacity={1}
        borderWidth="2px"
        borderColor={mode(`${c}.500`, `${c}.200`)}
        my="6"
        w="56px"
      />

      <Text maxW="280px" fontSize="lg">
        {description}
      </Text>

      <Box mt="2">
        <Text
          fontSize={{
            base: '6xl',
            md: '7xl',
          }}
          fontWeight="extrabold"
        >
          {price}
        </Text>
        <Text casing="uppercase" fontWeight="bold">
          {duration}
        </Text>
        <Text mt="2" color={mode('gray.600', 'gray.400')}>
          {extras}
        </Text>
      </Box>

      <Button my="8" size="lg" fontSize="md" colorScheme={c} onClick={onClick}>
        Start free trial
      </Button>

      <Box>
        <Text fontWeight="bold" mb="4">
          What you get:
        </Text>
        <List spacing="4">
          {features.map((feature, index) => (
            <PricingDetail key={index} iconColor={mode(`${c}.500`, `${c}.200`)}>
              {feature}
            </PricingDetail>
          ))}
        </List>
      </Box>
    </Box>
  )
}
