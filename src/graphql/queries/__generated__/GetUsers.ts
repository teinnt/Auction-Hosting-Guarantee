/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUsers
// ====================================================

export interface GetUsers_users {
  __typename: 'User'
  id: string | null
  userName: string | null
  phoneNumber: string | null
}

export interface GetUsers {
  users: GetUsers_users[]
}
