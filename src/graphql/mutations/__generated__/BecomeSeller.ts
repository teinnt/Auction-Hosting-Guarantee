/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: BecomeSeller
// ====================================================

export interface BecomeSeller_becomeSeller_address {
  __typename: "Address";
  houseNumber: string | null;
  streetAddress: string | null;
  city: string | null;
  country: string | null;
}

export interface BecomeSeller_becomeSeller {
  __typename: "User";
  email: string | null;
  phoneNumber: string | null;
  walletAddress: string | null;
  address: BecomeSeller_becomeSeller_address | null;
}

export interface BecomeSeller {
  becomeSeller: BecomeSeller_becomeSeller;
}

export interface BecomeSellerVariables {
  city: string;
  phoneNumber: string;
  walletAddress: string;
  houseNumber: string;
  street: string;
  state: string;
  country: string;
  zipCode: string;
  imageURL: string;
}
