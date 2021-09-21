import gql from 'graphql-tag'

const GET_USER = gql`
  query GetUsers {
    users {
      id
      userName
    }
  }
`

export default GET_USER
