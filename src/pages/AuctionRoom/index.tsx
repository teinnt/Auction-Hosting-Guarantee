import React, { useState, useEffect } from 'react'
import { HubConnection } from '@microsoft/signalr'
import { useQuery } from '@apollo/client'
import { Text, Box, Button, Grid, GridItem, Center, Image, Alert, AlertIcon, Spinner } from '@chakra-ui/react'

import { FormControl } from '../../components'
import { client, icons, mathUtils, routerUtils, sessions, signalR } from '../../utils'
import {
  GetAuction,
  GetAuction_auction_rounds,
  GetAuction_auction_rounds_currentBid,
} from '../../graphql/queries/__generated__/GetAuction'
import { GET_AUCTION } from '../../graphql/queries/queries'

function onConnectionError(error: any) {
  if (error && error.message) {
    // TODO: Alert
  }
}

function AuctionRoom(): JSX.Element {
  const [round, setRound] = useState<GetAuction_auction_rounds | null>()
  const [bidAmount, setBidAmount] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [hubConnection, setHubConnection] = useState<HubConnection>()

  const auctionId = routerUtils.getIdFromUrl()
  const { loading, data } = useQuery<GetAuction>(GET_AUCTION, {
    variables: { auctionId },
  })

  useEffect(() => {
    function bindConnectionMessage(connection: any) {
      const updateBid = (bid: GetAuction_auction_rounds_currentBid) => {
        const currentRound = { ...round }
        currentRound.currentBid = bid
        setRound(() => currentRound as GetAuction_auction_rounds)
        client.reFetchObservableQueries()
      }

      connection.on('addNewBid', updateBid)
      connection.onclose(onConnectionError)
    }

    const setUpConnection = async () => {
      const connection = await signalR.buildAuctionHubConnection(auctionId)
      bindConnectionMessage(connection)
      signalR.startSignalRConnection(connection)

      setHubConnection(connection)
    }

    if (!hubConnection) {
      setUpConnection()
    }

    if (data) {
      setRound(data.auction?.rounds && data.auction?.rounds[data.auction?.currentRound])
    }
  }, [auctionId, data, hubConnection, round])

  const isBidValid = () =>
    bidAmount && mathUtils.isNumeric(bidAmount) && Number(bidAmount) > (round?.currentBid?.amount || 0)

  const handleBid = () => {
    if (isBidValid()) {
      setErrorMessage('')
      hubConnection?.send('addNewBid', auctionId, Number(bidAmount))
    } else {
      setErrorMessage('Please enter a valid amount')
    }
  }

  if (loading && !round) {
    return (
      <Center>
        <Spinner marginTop="40vh" thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
      </Center>
    )
  }

  return (
    <Box>
      <Box>
        <Text m="10" textAlign="center" fontSize="4xl">
          {round?.item?.name}
        </Text>

        <Grid m="10" templateColumns="repeat(2, 1fr)" gap={10}>
          <GridItem borderRadius="20" colSpan={2}>
            <Center>
              <Image marginRight="1" maxHeight="60vh" src={icons.item} alt="Item" />
              <Image maxHeight="60vh" src={icons.item} alt="Item" />
            </Center>
          </GridItem>

          <GridItem colSpan={2} paddingInline="10%">
            <Grid p="10" gap={4}>
              <Text textAlign="center" color="orange.500">
                Time left: 00:10:23&apos;&apos;
              </Text>
              <Text textAlign="center">
                Current bid: <b>{round?.currentBid?.amount || 0} NZD</b>
                {round?.currentBid?.bidderId === sessions.retrieveUsername() ? <>(your bid)</> : null}
              </Text>
              <FormControl value={bidAmount} handleChange={setBidAmount} placeholder="Amount" type="text" />
              {errorMessage ? (
                <Alert status="error">
                  <AlertIcon />
                  {errorMessage}
                </Alert>
              ) : null}
              <Button w="100%" onClick={handleBid}>
                BID
              </Button>
            </Grid>
          </GridItem>

          <GridItem colSpan={2} paddingInline="20%">
            <Text fontWeight="bold" mb="4">
              Description
            </Text>
            <Text>{round?.item?.description}</Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}

export default AuctionRoom
