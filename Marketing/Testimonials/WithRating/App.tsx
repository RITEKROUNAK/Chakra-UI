import { Box, Grid, Heading, Link, Text } from '@chakra-ui/react'
import * as React from 'react'
import { Rating } from './Rating'
import { Testimonial } from './Testimonial'

export const App = () => {
  return (
    <Box as="section" bg="blue.800" color="white" py="6rem">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }} py="10">
        <Grid templateColumns={{ base: '1fr', lg: '460px 1fr' }} gap={{ base: '10', lg: '8' }}>
          <Box>
            <Text
              textTransform="uppercase"
              fontWeight="semibold"
              color="yellow.400"
              letterSpacing="wide"
            >
              Trusted by 1,300+ companies
            </Text>
            <Heading as="h3" size="3xl" mt="7" lineHeight="shorter">
              Hear from our customers
            </Heading>
            <Rating mt="10" value={4} />
            <Text mt="4">
              <b>4.0/5</b> on <Link>Capterra</Link>
            </Text>
          </Box>
          <Box maxW={{ base: 'unset', lg: '37.5rem' }} mx="auto">
            <Testimonial
              name="Kemi Alex"
              company="VFX Artist & Film-maker"
              image="https://images.unsplash.com/photo-1603610515737-193e0b423983?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjk4fHxsYWR5JTIwaGVhZHNob3QlMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            >
              Sed sed risus pretium quam vulputate dignissim. Ornare quam viverra orci sagittis.
              Integer vitae justo eget magna fermentum iaculis eu non diam
            </Testimonial>
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}
