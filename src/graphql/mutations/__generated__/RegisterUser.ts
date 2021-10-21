/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterUser
// ====================================================

export interface RegisterUser_registerUser_data {
  __typename: "JsonWebToken";
  id: string | null;
  token: string | null;
  expires: any;
  userName: string | null;
}

export interface RegisterUser_registerUser_error {
  __typename: "ErrorModel";
  message: string;
  code: string;
}

export interface RegisterUser_registerUser {
  __typename: "ResponseOfJsonWebToken";
  data: RegisterUser_registerUser_data | null;
  error: RegisterUser_registerUser_error | null;
}

export interface RegisterUser {
  registerUser: RegisterUser_registerUser;
}

export interface RegisterUserVariables {
  email: string;
  password: string;
  userName: string;
}
