/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAuctions
// ====================================================

export interface GetAuctions_auctions {
  __typename: 'Auction'
  id: string | null
  name: string | null
  endTime: any
}

export interface GetAuctions {
  auctions: GetAuctions_auctions[]
}
