/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAuction
// ====================================================

export interface GetAuction_auction_rounds_currentBid {
  __typename: "Bid";
  bidderId: string | null;
  amount: number;
}

export interface GetAuction_auction_rounds_item {
  __typename: "Item";
  id: string | null;
  name: string | null;
  description: string | null;
}

export interface GetAuction_auction_rounds {
  __typename: "AuctionRound";
  id: string | null;
  currentBid: GetAuction_auction_rounds_currentBid | null;
  item: GetAuction_auction_rounds_item | null;
}

export interface GetAuction_auction {
  __typename: "Auction";
  id: string | null;
  name: string | null;
  startTime: any;
  endTime: any;
  isFinished: boolean;
  currentRound: number;
  rounds: (GetAuction_auction_rounds | null)[] | null;
}

export interface GetAuction {
  auction: GetAuction_auction;
}

export interface GetAuctionVariables {
  auctionId: string;
}
