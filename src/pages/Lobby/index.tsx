import React from 'react'
import { useQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import { Text, Center, Box, Button, Grid } from '@chakra-ui/react'

import { Spinner } from '../../components'
import { GET_AUCTIONS } from '../../graphql/queries/queries'
import { GetAuctions, GetAuctions_auctions } from '../../graphql/queries/__generated__/GetAuctions'

function Lobby(): JSX.Element {
  const { loading, data } = useQuery<GetAuctions>(GET_AUCTIONS)

  const history = useHistory()

  const goToRoom = (id: string) => {
    history.push(`/lobby/room/${id}`)
  }

  const renderButtonRoom = (room: GetAuctions_auctions) => (
    <Button onClick={() => goToRoom(`${room.id}`)} m={4} boxSize="56">
      {room.name}
    </Button>
  )

  if (loading) {
    return <Spinner />
  }

  return (
    <Box>
      <Center>
        <>
          <Text m="10" textAlign="center" fontSize="5xl">
            Auction rooms
          </Text>

          <Text fontSize="md">10:00 AM</Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={10}>
            {data?.auctions?.map((room) => renderButtonRoom(room))}
          </Grid>
        </>
      </Center>
    </Box>
  )
}

export default Lobby
