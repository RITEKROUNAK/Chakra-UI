import { Box, Flex, Heading, HStack, Img, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { MdGroup, MdPermPhoneMsg } from 'react-icons/md'

export const App = () => {
  return (
    <Box as="section">
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
        py="12"
      >
        <Flex
          align="center"
          justify="center"
          direction={{
            base: 'column-reverse',
            md: 'row',
          }}
        >
          <Box flex="1" maxW="440px">
            <Heading
              size="2xl"
              fontWeight="extrabold"
              color={useColorModeValue('blue.600', 'blue.300')}
            >
              Ready to break down the walls?
            </Heading>
            <Text
              fontSize="lg"
              fontWeight="medium"
              color={useColorModeValue('gray.600', 'inherit')}
              mt="6"
            >
              Our support gurus are help you achieve design enlightenment. Check our our FAQs, send
              us an email or give us a call.
            </Text>

            <Stack
              mt={{
                base: '8',
                md: '16',
              }}
              spacing="4"
              fontWeight="extrabold"
            >
              <HStack spacing="5" color={useColorModeValue('blue.600', 'blue.300')}>
                <Box fontSize="3xl" as={MdPermPhoneMsg} />
                <Text
                  fontSize={{
                    base: 'xl',
                    md: '2xl',
                  }}
                >
                  1 800 513 4545
                </Text>
              </HStack>
              <HStack spacing="5" color={useColorModeValue('blue.600', 'blue.300')}>
                <Box fontSize="3xl" as={MdGroup} />
                <Text
                  fontSize={{
                    base: 'xl',
                    md: '2xl',
                  }}
                >
                  Free design consultations
                </Text>
              </HStack>
            </Stack>
          </Box>

          <Box
            aria-hidden
            className="spacer"
            flexShrink={0}
            boxSize={{
              base: '10',
              xl: '20',
            }}
          />

          <Box
            flex="1"
            maxW="560px"
            h={{
              base: '400px',
              md: '460px',
            }}
          >
            <Img
              alt="Call center"
              w="full"
              h="full"
              objectFit="cover"
              objectPosition="right"
              src="https://images.unsplash.com/photo-1603714228681-b399854b8f80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FsbCUyMGNlbnRlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
