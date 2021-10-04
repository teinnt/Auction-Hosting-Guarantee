/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

import AuthContext from '../../context/Auth'

function ProtectedRoute({ children, ...rest }: RouteProps) {
  const { isLoggedIn } = useContext(AuthContext)

  return <>{isLoggedIn ? <Route {...rest} render={() => children} /> : <Redirect to="/login" />}</>
}

export default ProtectedRoute
