import { gql } from '@apollo/client'

const GET_USER = gql`
  query GetUsers {
    users {
      id
      userName
    }
  }
`

export default GET_USER
