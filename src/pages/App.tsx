import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import { ProtectedRoute } from '../components'
import { Login, Register, Home, Lobby, NotFound, UserDetails, AuctionRoom } from '.'

function App(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={Lobby} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <ProtectedRoute exact path="/lobby" component={Lobby} />
      <ProtectedRoute exact path="/me" component={UserDetails} />
      <ProtectedRoute exact path="/lobby/room/:id" component={AuctionRoom} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default withRouter(App)
