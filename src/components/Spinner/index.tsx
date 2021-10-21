import React from 'react'
import { Center, Spinner as ChakraSpinner } from '@chakra-ui/react'

const Spinner = (): JSX.Element => (
  <Center>
    <ChakraSpinner
      marginTop="40vh"
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  </Center>
)

export default Spinner
