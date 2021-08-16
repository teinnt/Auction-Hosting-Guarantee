import React from 'react'
import { Text, Box, Button } from '@chakra-ui/react'

const rooms = [1, 2, 3, 4]

const renderRoom = () =>
  rooms.map((room) => (
    <Button m={4} boxSize="xs">
      {room}
    </Button>
  ))

function Lobby() {
  return (
    <div>
      <Text fontSize="6xl">Auction rooms</Text>
      <Box p={4} display={{ md: 'flex' }}>
        {renderRoom()}
      </Box>
    </div>
  )
}

export default Lobby
