/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: auctionFields
// ====================================================

export interface auctionFields_rounds_currentBid {
  __typename: 'Bid'
  bidderId: string | null
  amount: number
}

export interface auctionFields_rounds_item {
  __typename: 'Item'
  id: string | null
  name: string | null
  trackId: string | null
  description: string | null
  highestPrice: number
}

export interface auctionFields_rounds_seller {
  __typename: 'User'
  email: string | null
}

export interface auctionFields_rounds {
  __typename: 'AuctionRound'
  id: string | null
  currentBid: auctionFields_rounds_currentBid | null
  item: auctionFields_rounds_item | null
  roundNumber: number
  seller: auctionFields_rounds_seller | null
}

export interface auctionFields {
  __typename: 'Auction'
  id: string | null
  name: string | null
  startTime: any
  endTime: any
  isFinished: boolean
  currentRound: number
  rounds: (auctionFields_rounds | null)[] | null
}
