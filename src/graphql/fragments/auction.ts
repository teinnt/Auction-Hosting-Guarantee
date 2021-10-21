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
        trackId
        description
        highestPrice
      }
      roundNumber
      seller {
        email
      }
    }
  }
`

export default AUCTION
