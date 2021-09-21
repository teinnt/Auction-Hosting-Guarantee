import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://localhost:63145/graphql/',
})

export default client
