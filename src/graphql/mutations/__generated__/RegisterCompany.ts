/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterCompany
// ====================================================

export interface RegisterCompany_registerCompany_data {
  __typename: 'JsonWebToken'
  id: string | null
  token: string | null
  expires: any
  userName: string | null
}

export interface RegisterCompany_registerCompany_error {
  __typename: 'ErrorModel'
  message: string
  code: string
}

export interface RegisterCompany_registerCompany {
  __typename: 'ResponseOfJsonWebToken'
  data: RegisterCompany_registerCompany_data | null
  error: RegisterCompany_registerCompany_error | null
}

export interface RegisterCompany {
  registerCompany: RegisterCompany_registerCompany
}

export interface RegisterCompanyVariables {
  companyName: string
  isin: string
  houseNumber: string
  streetAddress: string
  walletAddress: string
  city: string
  zipCode: string
  state: string
  country: string
  email: string
  password: string
  representativeName: string
  representativeEmail: string
  representativeIdUrl: string
  representativePhoneNumber: string
  contactNumber: string
  launchOn: any
}
