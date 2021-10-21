import { gql } from '@apollo/client'
import { USER } from '../fragments/auth'
import AUCTION from '../fragments/auction'

const GET_USERS = gql`
  query GetUsers {
    users {
      ...userFields
    }
  }
  ${USER}
`

const GET_ME = gql`
  query GetMe {
    self {
      ...userFields
    }
  }
  ${USER}
`

const GET_AUCTION = gql`
  query GetAuction($auctionId: String!) {
    auction(auctionId: $auctionId) {
      ...auctionFields
    }
  }
  ${AUCTION}
`

const GET_AUCTIONS = gql`
  query GetAuctions {
    auctions {
      id
      name
      endTime
      startTime
    }
  }
`

const GET_AVAILABLE_AUCTIONS = gql`
  query GetAvailableAuctions {
    availableAuctions {
      id
      name
      endTime
    }
  }
`

export { GET_USERS, GET_ME, GET_AUCTIONS, GET_AUCTION, GET_AVAILABLE_AUCTIONS }
