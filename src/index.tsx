import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import './index.css'

import App from './pages/App'
import { client } from './utils'
import ThemeProvider from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <ApolloProvider client={client}>
        <HashRouter>
          <App />
        </HashRouter>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
