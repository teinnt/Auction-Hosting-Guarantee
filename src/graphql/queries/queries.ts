import { gql } from '@apollo/client'
import { USER } from '../fragments/auth'
import AUCTION from '../fragments/auction'

const GET_USER = gql`
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
    }
  }
`

const GET_AUCTION = gql`
  query GetAuction($auctionId: String!) {
    auction(auctionId: $auctionId) {
      ...auctionFields
    }
  }
  ${AUCTION}
`

export { GET_USER, GET_AUCTIONS, GET_AUCTION }
