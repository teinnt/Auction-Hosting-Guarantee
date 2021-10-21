import React from 'react'
import { useQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import { Text, Box, Button, Grid } from '@chakra-ui/react'

import { Spinner } from '../../components'
import { GET_AVAILABLE_AUCTIONS } from '../../graphql/queries/queries'
import {
  GetAvailableAuctions,
  GetAvailableAuctions_availableAuctions,
} from '../../graphql/queries/__generated__/GetAvailableAuctions'
import { auctionStartTime } from '../../utils/constants'

function Lobby(): JSX.Element {
  const { loading, data } = useQuery<GetAvailableAuctions>(GET_AVAILABLE_AUCTIONS)

  const history = useHistory()

  const goToRoom = (id: string) => {
    history.push(`/lobby/room/${id}`)
  }

  const renderRooms = (rooms: GetAvailableAuctions_availableAuctions[], index: number) => (
    <>
      <Text key={auctionStartTime[index]} fontWeight="bold" ml="24" fontSize="md">
        {auctionStartTime[index]}
      </Text>
      <Grid paddingInline="20" templateColumns="repeat(3, 1fr)" gap={10}>
        {rooms.map((room) => (
          <Button onClick={() => goToRoom(`${room.id}`)} m={4} boxSize="56">
            {room.name}
          </Button>
        ))}
      </Grid>
    </>
  )

  if (loading) {
    return <Spinner />
  }

  return (
    <Box>
      <Text m="10" textAlign="center" fontSize="5xl">
        Auction rooms
      </Text>

      {data?.availableAuctions &&
        data.availableAuctions.map((rooms, index) => {
          if (rooms.length === 0) {
            return null
          }

          return renderRooms(rooms, index)
        })}
    </Box>
  )
}

export default Lobby
