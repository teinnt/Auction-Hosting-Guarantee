/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddItemToAuction
// ====================================================

export interface AddItemToAuction_addItemToAuction {
  __typename: 'Auction'
  id: string | null
  name: string | null
}

export interface AddItemToAuction {
  addItemToAuction: AddItemToAuction_addItemToAuction
}

export interface AddItemToAuctionVariables {
  name: string
  price: number
  auctionID: string
  description: string
  imageURL: string
  location: string
  ownerWalletAddress: string
  trackID: string
}
