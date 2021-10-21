/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: responseUserFields
// ====================================================

export interface responseUserFields_data_address {
  __typename: "Address";
  houseNumber: string | null;
  streetAddress: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  zipCode: string | null;
}

export interface responseUserFields_data {
  __typename: "User";
  id: string | null;
  userName: string | null;
  email: string | null;
  phoneNumber: string | null;
  walletAddress: string | null;
  address: responseUserFields_data_address | null;
}

export interface responseUserFields_error {
  __typename: "ErrorModel";
  message: string;
  code: string;
}

export interface responseUserFields {
  __typename: "ResponseOfUser";
  data: responseUserFields_data | null;
  error: responseUserFields_error | null;
}
