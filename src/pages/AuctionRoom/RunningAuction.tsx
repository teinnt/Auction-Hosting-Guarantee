import React, { useState } from 'react'
import {
  Text,
  Box,
  Button,
  Grid,
  GridItem,
  Center,
  Image,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import { HubConnection } from '@microsoft/signalr'

import { FormControl } from '../../components'
import { icons, mathUtils, sessions } from '../../utils'
import { GetAuction_auction_rounds } from '../../graphql/queries/__generated__/GetAuction'

interface RunningAuctionProps {
  round: GetAuction_auction_rounds | null | undefined
  hubConnection: HubConnection | undefined
  auctionId: string
}

function RunningAuction({ round, hubConnection, auctionId }: RunningAuctionProps): JSX.Element {
  const [bidAmount, setBidAmount] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const isBidValid = () =>
    bidAmount &&
    mathUtils.isNumeric(bidAmount) &&
    Number(bidAmount) > (round?.currentBid?.amount || 0)

  const handleBid = () => {
    if (isBidValid()) {
      setErrorMessage('')
      hubConnection?.send('addNewBid', auctionId, Number(bidAmount))
    } else {
      setErrorMessage('Please enter a valid amount')
    }
  }

  const displayCurrentBid = () => {
    const yourBid = round?.currentBid?.bidderId === sessions.retrieveUsername() ? '(your bid)' : ''

    return (
      <Text textAlign="center">
        Current bid: <b>{round?.currentBid?.amount || 0} NZD</b> {yourBid}
      </Text>
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

              {displayCurrentBid()}

              <FormControl
                value={bidAmount}
                handleChange={setBidAmount}
                placeholder="Amount"
                type="text"
              />

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

export default RunningAuction
