/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: userFields
// ====================================================

export interface userFields_address {
  __typename: "Address";
  houseNumber: string | null;
  streetAddress: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  zipCode: string | null;
}

export interface userFields {
  __typename: "User";
  id: string | null;
  userName: string | null;
  email: string | null;
  phoneNumber: string | null;
  walletAddress: string | null;
  address: userFields_address | null;
}
