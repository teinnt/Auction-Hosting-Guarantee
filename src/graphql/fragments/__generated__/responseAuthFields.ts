/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: responseAuthFields
// ====================================================

export interface responseAuthFields_data {
  __typename: "JsonWebToken";
  id: string | null;
  token: string | null;
  expires: any;
  userName: string | null;
}

export interface responseAuthFields_error {
  __typename: "ErrorModel";
  message: string;
  code: string;
}

export interface responseAuthFields {
  __typename: "ResponseOfJsonWebToken";
  data: responseAuthFields_data | null;
  error: responseAuthFields_error | null;
}
