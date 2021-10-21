/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateItemWinner
// ====================================================

export interface UpdateItemWinner_updateItemWinner_item {
  __typename: 'Item'
  highestPrice: number
}

export interface UpdateItemWinner_updateItemWinner_seller {
  __typename: 'User'
  email: string | null
}

export interface UpdateItemWinner_updateItemWinner {
  __typename: 'AuctionRound'
  item: UpdateItemWinner_updateItemWinner_item | null
  seller: UpdateItemWinner_updateItemWinner_seller | null
}

export interface UpdateItemWinner {
  updateItemWinner: UpdateItemWinner_updateItemWinner
}

export interface UpdateItemWinnerVariables {
  auctionId: string
  roundNumber: number
  city: string
  country: string
  phoneNumber: string
  walletAddress: string
  houseNumber: string
  street: string
  state: string
  zipCode: string
  imageURL: string
}
