import { AiOutlineAlignLeft, AiOutlineAlignCenter, AiOutlineAlignRight } from 'react-icons/ai'
import { Flex } from '@chakra-ui/react'
import * as React from 'react'
import { ToggleButtonGroup } from './ToggleButtonGroup'
import { ToggleButton } from './ToggleButton'

export const App = () => {
  const [textAlign, setTextAlign] = React.useState('right')

  return (
    <Flex justify="center" py="12">
      <ToggleButtonGroup
        size="lg"
        value={textAlign}
        onChange={setTextAlign}
        defaultValue="left"
        isAttached
        variant="outline"
        aria-label="Align text"
      >
        <ToggleButton value="left" aria-label="Align left" icon={<AiOutlineAlignLeft />} />
        <ToggleButton value="center" aria-label="Align center" icon={<AiOutlineAlignCenter />} />
        <ToggleButton value="right" aria-label="Align right" icon={<AiOutlineAlignRight />} />
      </ToggleButtonGroup>
    </Flex>
  )
}
