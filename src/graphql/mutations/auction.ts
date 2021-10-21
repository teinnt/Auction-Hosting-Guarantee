import { gql } from '@apollo/client'

const ADD_ITEM = gql`
  mutation AddItemToAuction(
    $name: String!
    $price: Float!
    $auctionID: String!
    $description: String!
    $imageURL: String!
    $location: String!
    $ownerWalletAddress: String!
    $trackID: String!
  ) {
    addItemToAuction(
      input: {
        name: $name
        price: $price
        auctionID: $auctionID
        description: $description
        imageURL: $imageURL
        location: $location
        ownerWalletAddress: $ownerWalletAddress
        trackID: $trackID
      }
    ) {
      id
      name
    }
  }
`

const UPDATE_ITEM_WINNER = gql`
  mutation UpdateItemWinner(
    $auctionId: String!
    $roundNumber: Int!
    $city: String!
    $country: String!
    $phoneNumber: String!
    $walletAddress: String!
    $houseNumber: String!
    $street: String!
    $state: String!
    $zipCode: String!
    $imageURL: String!
  ) {
    updateItemWinner(
      input: {
        auctionId: $auctionId
        roundNumber: $roundNumber
        city: $city
        country: $country
        phoneNumber: $phoneNumber
        walletAddress: $walletAddress
        houseNumber: $houseNumber
        street: $street
        state: $state
        zipCode: $zipCode
        imageURL: $imageURL
      }
    ) {
      item {
        highestPrice
      }
      seller {
        email
      }
    }
  }
`

export { ADD_ITEM, UPDATE_ITEM_WINNER }
