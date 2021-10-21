/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMe
// ====================================================

export interface GetMe_self_address {
  __typename: "Address";
  houseNumber: string | null;
  streetAddress: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  zipCode: string | null;
}

export interface GetMe_self {
  __typename: "User";
  id: string | null;
  userName: string | null;
  email: string | null;
  phoneNumber: string | null;
  walletAddress: string | null;
  address: GetMe_self_address | null;
}

export interface GetMe {
  self: GetMe_self;
}
