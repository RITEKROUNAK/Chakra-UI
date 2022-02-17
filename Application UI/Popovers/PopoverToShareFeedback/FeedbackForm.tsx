import { Button, chakra, Flex, Stack, Textarea, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { FeedbackRadioGroup } from './FeedbackRatingGroup'

interface Props {
  forwardedRef: React.MutableRefObject<null>
}

export const FeedbackForm = (props: Props) => {
  const { forwardedRef } = props
  const [message, setMessage] = React.useState('')
  const [emoji, setEmoji] = React.useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your logic here
    console.log('sending feedback:', message, emoji)
  }

  // If the form was successfully submitted, you can also return the `FeedbackSuccessPanel` instead
  return (
    <chakra.form onSubmit={handleSubmit}>
      <Stack spacing="3">
        <Textarea
          ref={forwardedRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Feedback"
          required
          focusBorderColor={useColorModeValue('blue.500', 'blue.300')}
          _placeholder={{
            opacity: 1,
            color: useColorModeValue('gray.500', 'whiteAlpha.700'),
          }}
          resize="none"
        />
        <Flex justifyContent="space-between">
          <FeedbackRadioGroup
            name="rating"
            options={['😍', '😀', '🤨', '😨']}
            onChange={setEmoji}
          />
          <Button type="submit" size="sm" variant="outline">
            Send
          </Button>
        </Flex>
      </Stack>
    </chakra.form>
  )
}
