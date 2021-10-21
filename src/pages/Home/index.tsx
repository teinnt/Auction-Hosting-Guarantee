import React from 'react'
import { useHistory } from 'react-router-dom'
import { Text, Box, Button } from '@chakra-ui/react'

enum PageToGo {
  LOGIN = 'login',
  REGISTER = 'register',
  LOBBY = 'lobby',
  TRACKING = 'track-item',
}

function Home(): JSX.Element {
  const history = useHistory()

  const goToPage = (pageName: PageToGo) => {
    history.push(pageName)
  }

  return (
    <div>
      <Text textAlign="center" m="10" fontSize="5xl">
        AUCTION HOSTING AND GUARANTEE
      </Text>

      <Box p={4} display="flex" flexDirection="column" alignItems="center" gridGap="5">
        <Button w="48" colorScheme="blue" onClick={() => goToPage(PageToGo.LOGIN)}>
          Login
        </Button>
        <Button w="48" colorScheme="blue" onClick={() => goToPage(PageToGo.REGISTER)}>
          Register
        </Button>
        <Button w="48" colorScheme="blue" onClick={() => goToPage(PageToGo.LOBBY)}>
          Lobby
        </Button>
        <Button w="48" colorScheme="blue" onClick={() => goToPage(PageToGo.TRACKING)}>
          Track your item
        </Button>
      </Box>
    </div>
  )
}

export default Home
