import * as React from 'react'
import { AiOutlineCoffee, AiOutlineSketch, AiOutlineWoman } from 'react-icons/ai'
import { Box, Icon } from '@chakra-ui/react'
import { List } from './List'
import { ListItem } from './ListItem'
import { Placeholder } from './Placeholder'

export const App = () => {
  return (
    <Box as="section">
      <Box maxW="2xl" mx="auto" p={{ base: '4', md: '8' }}>
        <List spacing="12">
          <ListItem
            title="Have a Coffee Break with Chakra UI"
            subTitle="Posted by Mark Chandler"
            icon={<Icon as={AiOutlineCoffee} boxSize="6" />}
          >
            <Placeholder />
          </ListItem>
          <ListItem
            title="Women in Tech learning Chakra UI"
            subTitle="Posted by Christian Schröter"
            icon={<Icon as={AiOutlineWoman} boxSize="6" />}
          >
            <Placeholder />
          </ListItem>
          <ListItem
            title="Using Chakra UI in Sketch"
            subTitle="Posted by Segun Adebayo"
            icon={<Icon as={AiOutlineSketch} boxSize="6" />}
          >
            <Placeholder />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}
