import React from 'react'

import RunningAuction from './RunningAuction'
import AwaitingAuction from './AwaitingAuction'
import useAuctionHub from '../../hooks/useAuctionHub'
import { Spinner } from '../../components'

function AuctionRoom(): JSX.Element {
  const { loading, round, hubConnection, auctionId, auction } = useAuctionHub()

  if (loading) {
    return <Spinner />
  }

  if (!hubConnection) {
    return <AwaitingAuction auction={auction} />
  }

  return <RunningAuction round={round} auctionId={auctionId} hubConnection={hubConnection} />
}

export default AuctionRoom
