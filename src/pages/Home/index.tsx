import React from 'react'
import { useHistory } from 'react-router-dom'
import { Text, Box, Button } from '@chakra-ui/react'

enum PageToGo {
  LOGIN = 'login',
  REGISTER = 'register',
}

function Home(): JSX.Element {
  const history = useHistory()

  const goToPage = (pageName: PageToGo) => {
    history.push(pageName)
  }

  return (
    <div>
      <Text fontSize="5xl">AUCTION HOSTING AND GUARANTEE</Text>

      <Box p={4} display={{ md: 'flex' }}>
        <Button colorScheme="blue" onClick={() => goToPage(PageToGo.LOGIN)}>
          Login
        </Button>
        <Button colorScheme="blue" onClick={() => goToPage(PageToGo.REGISTER)}>
          Register
        </Button>
      </Box>
    </div>
  )
}

export default Home
