import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import * as sessions from './sessions'

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL || '',
})

const authLink = setContext((_, { headers }) => {
  const token = sessions.retrieveToken()

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const graphQLClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default graphQLClient
