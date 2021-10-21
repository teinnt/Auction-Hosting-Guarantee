import { gql } from '@apollo/client'
import { AUTH_RESPONSE } from '../fragments/auth'

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(input: { email: $email, password: $password }) {
      ...responseAuthFields
    }
  }
  ${AUTH_RESPONSE}
`

const REGISTER_USER = gql`
  mutation RegisterUser($email: String!, $password: String!, $userName: String!) {
    registerUser(input: { email: $email, password: $password, userName: $userName }) {
      ...responseAuthFields
    }
  }
  ${AUTH_RESPONSE}
`

const BECOME_SELLER = gql`
  mutation BecomeSeller(
    $city: String!
    $phoneNumber: String!
    $walletAddress: String!
    $houseNumber: String!
    $street: String!
    $state: String!
    $country: String!
    $zipCode: String!
    $imageURL: String!
  ) {
    becomeSeller(
      input: {
        city: $city
        country: $country
        houseNumber: $houseNumber
        imageURL: $imageURL
        phoneNumber: $phoneNumber
        state: $state
        street: $street
        walletAddress: $walletAddress
        zipCode: $zipCode
      }
    ) {
      email
      phoneNumber
      walletAddress
      address {
        houseNumber
        streetAddress
        city
        country
      }
    }
  }
`

const LOGIN_COMAPANY = gql`
  mutation LoginCompany($email: String!, $password: String!) {
    loginCompany(input: { email: $email, password: $password }) {
      ...responseAuthFields
    }
  }
  ${AUTH_RESPONSE}
`

const REGISTER_COMPANY = gql`
  mutation RegisterCompany(
    $companyName: String!
    $isin: String!
    $houseNumber: String!
    $streetAddress: String!
    $walletAddress: String!
    $city: String!
    $zipCode: String!
    $state: String!
    $country: String!
    $email: String!
    $password: String!
    $representativeName: String!
    $representativeEmail: String!
    $representativeIdUrl: String!
    $representativePhoneNumber: String!
    $contactNumber: String!
    $launchOn: DateTime!
  ) {
    registerCompany(
      input: {
        companyName: $companyName
        isin: $isin
        houseNumber: $houseNumber
        streetAddress: $streetAddress
        walletAddress: $walletAddress
        city: $city
        zipCode: $zipCode
        state: $state
        country: $country
        email: $email
        password: $password
        representativeName: $representativeName
        representativeEmail: $representativeEmail
        representativeIdUrl: $representativeIdUrl
        representativePhoneNumber: $representativePhoneNumber
        contactNumber: $contactNumber
        launchOn: $launchOn
      }
    ) {
      ...responseAuthFields
    }
  }
  ${AUTH_RESPONSE}
`

export { REGISTER_USER, REGISTER_COMPANY, LOGIN_USER, LOGIN_COMAPANY, BECOME_SELLER }
