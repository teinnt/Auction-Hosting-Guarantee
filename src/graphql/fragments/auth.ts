import { gql } from '@apollo/client'

const USER = gql`
  fragment userFields on User {
    id
    userName
  }
`

const COMPANY = gql`
  fragment companyFields on Company {
    id
    companyName
  }
`

const JWT = gql`
  fragment jwtFields on JsonWebToken {
    id
    token
    expires
    userName
  }
`

const ERROR = gql`
  fragment errorFields on ErrorModel {
    message
    code
  }
`

const AUTH_RESPONSE = gql`
  fragment responseAuthFields on ResponseOfJsonWebToken {
    data {
      ...jwtFields
    }
    error {
      ...errorFields
    }
  }
  ${JWT}
  ${ERROR}
`

const USER_RESPONSE = gql`
  fragment responseUserFields on ResponseOfUser {
    data {
      ...userFields
    }
    error {
      ...errorFields
    }
  }
  ${USER}
  ${ERROR}
`

const COMPANY_RESPONSE = gql`
  fragment responsecCompanyFields on ResponseOfCompany {
    data {
      ...companyFields
    }
    error {
      ...errorFields
    }
  }
  ${COMPANY}
  ${ERROR}
`

export { AUTH_RESPONSE, USER_RESPONSE, COMPANY_RESPONSE, USER, COMPANY, JWT, ERROR }
