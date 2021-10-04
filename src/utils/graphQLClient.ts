import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { sessions } from '.'

const httpLink = createHttpLink({
  uri: 'http://localhost:63145/graphql',
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
