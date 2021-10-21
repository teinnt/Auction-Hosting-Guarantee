/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUsers
// ====================================================

export interface GetUsers_users_address {
  __typename: 'Address'
  houseNumber: string | null
  streetAddress: string | null
  city: string | null
  state: string | null
  country: string | null
  zipCode: string | null
}

export interface GetUsers_users {
  __typename: 'User'
  id: string | null
  userName: string | null
  email: string | null
  phoneNumber: string | null
  walletAddress: string | null
  address: GetUsers_users_address | null
}

export interface GetUsers {
  users: GetUsers_users[]
}
