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

const GET_AUCTIONS = gql`
  query GetAuctions {
    auctions {
      id
      name
      endTime
    }
  }
`

const GET_ME = gql`
  query getMe {
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

export { GET_USERS, GET_ME, GET_AUCTIONS, GET_AUCTION }
