import React from 'react'
import { useHistory } from 'react-router-dom'
import { Text, Box, Button } from '@chakra-ui/react'

enum PageToGo {
  AUTH_HOST = '/auth/host',
  AUTH_BUYER = '/auth/buyer',
  LOBBY = '/lobby',
}

function Home(): JSX.Element {
  const history = useHistory()

  const goToPage = (pageName: PageToGo) => {
    history.push(pageName)
  }

  return (
    <div>
      <Text fontSize="6xl">AUCKLAND HOSTING AND GUARANTEE</Text>

      <Box p={4} display={{ md: 'flex' }}>
        <Button colorScheme="blue" onClick={() => goToPage(PageToGo.AUTH_HOST)}>
          I am an auction host
        </Button>
        <Button colorScheme="blue" onClick={() => goToPage(PageToGo.AUTH_BUYER)}>
          I am a buyer
        </Button>
        <Button colorScheme="blue" onClick={() => goToPage(PageToGo.LOBBY)}>
          Just let me in
        </Button>
      </Box>
    </div>
  )
}

export default Home
