/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginCompany
// ====================================================

export interface LoginCompany_loginCompany_data {
  __typename: "JsonWebToken";
  id: string | null;
  token: string | null;
  expires: any;
  userName: string | null;
}

export interface LoginCompany_loginCompany_error {
  __typename: "ErrorModel";
  message: string;
  code: string;
}

export interface LoginCompany_loginCompany {
  __typename: "ResponseOfJsonWebToken";
  data: LoginCompany_loginCompany_data | null;
  error: LoginCompany_loginCompany_error | null;
}

export interface LoginCompany {
  loginCompany: LoginCompany_loginCompany;
}

export interface LoginCompanyVariables {
  email: string;
  password: string;
}
