import {
  Box,
  Button,
  Flex,
  LightMode,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { InputField } from './InputField'

export const SigninForm = () => {
  return (
    <form
      onSubmit={(e) => {
        // add submit logic here
        e.preventDefault()
      }}
    >
      <Stack spacing="8">
        <InputField label="Email" type="email" />
        <Box>
          <InputField label="Password" type="password" />
          <Box
            display="inline-block"
            as="a"
            href="#"
            color={mode('blue.600', 'blue.300')}
            fontWeight="semibold"
            fontSize="sm"
            mt="3"
          >
            Forgot password?
          </Box>
        </Box>
      </Stack>
      <Flex
        spacing="4"
        direction={{
          base: 'column-reverse',
          md: 'row',
        }}
        mt="6"
        align="center"
        justify="space-between"
      >
        <Text color={mode('gray.600', 'gray.400')} fontSize="sm" fontWeight="semibold">
          New user?{' '}
          <Box as="a" href="#" color={mode('blue.600', 'blue.300')}>
            Create account
          </Box>
        </Text>
        <LightMode>
          <Button
            mb={{
              base: '4',
              md: '0',
            }}
            w={{
              base: 'full',
              md: 'auto',
            }}
            type="submit"
            colorScheme="blue"
            size="lg"
            fontSize="md"
            fontWeight="bold"
          >
            Sign in
          </Button>
        </LightMode>
      </Flex>
    </form>
  )
}
