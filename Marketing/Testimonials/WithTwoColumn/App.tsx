import { Box, SimpleGrid, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { Testimonial } from './Testimonial'

export const App = () => {
  return (
    <Box as="section" bg={mode('gray.50', 'gray.800')}>
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <SimpleGrid py="16" columns={{ base: 1, lg: 2 }} spacing={{ base: '16', lg: '32' }}>
          <Testimonial
            name="Jane Cooper"
            role="Marketing Manager @ Freeko.com"
            image="https://images.unsplash.com/photo-1571175351749-e8d06f275d85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTk0fHxsYWR5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Testimonial>
          <Testimonial
            name="Matt Godin"
            role="Engineering Manager @ Freezone"
            image="https://images.unsplash.com/photo-1603987248955-9c142c5ae89b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhhbmRzb21lJTIwbWFuJTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          >
            Accumsan tortor posuere ac ut consequat semper. Turpis cursus in hac habitasse platea.
            Hendrerit dolor magna eget est
          </Testimonial>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
