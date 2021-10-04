/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginUser
// ====================================================

export interface LoginUser_loginUser_data {
  __typename: 'JsonWebToken'
  id: string | null
  token: string | null
  expires: any
  userName: string | null
}

export interface LoginUser_loginUser_error {
  __typename: 'ErrorModel'
  message: string
  code: string
}

export interface LoginUser_loginUser {
  __typename: 'ResponseOfJsonWebToken'
  data: LoginUser_loginUser_data | null
  error: LoginUser_loginUser_error | null
}

export interface LoginUser {
  loginUser: LoginUser_loginUser
}

export interface LoginUserVariables {
  email: string
  password: string
}
