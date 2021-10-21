/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAvailableAuctions
// ====================================================

export interface GetAvailableAuctions_availableAuctions {
  __typename: "Auction";
  id: string | null;
  name: string | null;
  endTime: any;
}

export interface GetAvailableAuctions {
  availableAuctions: GetAvailableAuctions_availableAuctions[][];
}
