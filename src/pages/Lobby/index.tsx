import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import { Text, Center, Box, Button, Spinner } from '@chakra-ui/react'

import { GET_AUCTIONS } from '../../graphql/queries/queries'
import { GetAuctions } from '../../graphql/queries/__generated__/GetAuctions'

function Lobby() {
  const { loading, error, data } = useQuery<GetAuctions>(GET_AUCTIONS)

  const history = useHistory()

  const goToRoom = (id: string) => {
    history.push(`/lobby/room/${id}`)
  }

  const renderRooms = () => (
    <>
      <Text fontSize="md">10:00 AM</Text>
      <Box direction="column">
        {data?.auctions?.map((room) => (
          <Button onClick={() => goToRoom(`${room.id}`)} m={4} boxSize="56">
            {room.name}
          </Button>
        ))}
      </Box>
    </>
  )

  if (loading) {
    return (
      <Center>
        <Spinner marginTop="40vh" thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
      </Center>
    )
  }

  return (
    <Box>
      <Center>
        <div>
          <Text m="10" textAlign="center" fontSize="5xl">
            Auction rooms
          </Text>

          {renderRooms()}
        </div>
      </Center>
    </Box>
  )
}

export default Lobby
