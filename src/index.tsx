import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import './index.css'

import App from './pages/App'
import { client } from './utils'
import ThemeProvider from './theme'
import AuthProvider from './context/Auth/AuthProvider'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <ApolloProvider client={client}>
        <AuthProvider>
          <HashRouter>
            <App />
          </HashRouter>
        </AuthProvider>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
