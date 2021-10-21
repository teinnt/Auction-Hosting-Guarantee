import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { HubConnection } from '@microsoft/signalr'

import { signalR, client, routerUtils, timer } from '../utils'
import {
  GetAuction,
  GetAuction_auction_rounds,
  GetAuction_auction_rounds_currentBid,
} from '../graphql/queries/__generated__/GetAuction'
import { GET_AUCTION } from '../graphql/queries/queries'

function onConnectionError(error: any) {
  if (error && error.message) {
    // TODO: Alert
  }
}

const useAuctionHub = () => {
  const [round, setRound] = useState<GetAuction_auction_rounds | null>()
  const [hubConnection, setHubConnection] = useState<HubConnection>()

  const auctionId = routerUtils.getIdFromUrl()
  const { loading, data } = useQuery<GetAuction>(GET_AUCTION, {
    variables: { auctionId },
  })

  useEffect(() => {
    function bindConnectionAuction(connection: any) {
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
      bindConnectionAuction(connection)
      signalR.startSignalRConnection(connection)

      setHubConnection(connection)
    }

    const startTime = data?.auction.startTime
    if (startTime && !timer.isInFuture(startTime) && !hubConnection) {
      setUpConnection()
    }

    if (data) {
      setRound(data.auction?.rounds && data.auction?.rounds[data.auction?.currentRound])
    }
  }, [auctionId, data, hubConnection, round])

  return { loading, round, hubConnection, auctionId, auction: data?.auction }
}

export default useAuctionHub
