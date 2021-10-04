import { gql } from '@apollo/client'

const AUCTION = gql`
  fragment auctionFields on Auction {
    id
    name
    startTime
    endTime
    isFinished
    currentRound
    rounds {
      id
      currentBid {
        bidderId
        amount
      }
      item {
        id
        name
        description
      }
    }
  }
`

export default AUCTION
