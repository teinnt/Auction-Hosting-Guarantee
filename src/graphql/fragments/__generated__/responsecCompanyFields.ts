/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: responsecCompanyFields
// ====================================================

export interface responsecCompanyFields_data {
  __typename: 'Company'
  id: string
  companyName: string
}

export interface responsecCompanyFields_error {
  __typename: 'ErrorModel'
  message: string
  code: string
}

export interface responsecCompanyFields {
  __typename: 'ResponseOfCompany'
  data: responsecCompanyFields_data | null
  error: responsecCompanyFields_error | null
}
