import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import { ProtectedRoute } from '../components'
import {
  Login,
  Register,
  Home,
  Lobby,
  NotFound,
  UserDetails,
  AuctionRoom,
  SellerRegister,
  ItemRegister,
  TrackItem,
} from '.'

function App(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/track-item" component={TrackItem} />
      <Route exact path="/become-seller" component={SellerRegister} />
      <ProtectedRoute exact path="/lobby" component={Lobby} />
      <ProtectedRoute exact path="/me" component={UserDetails} />
      <ProtectedRoute exact path="/lobby/room/:id" component={AuctionRoom} />
      <Route exact path="/lobby/room/:id/register-item" component={ItemRegister} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default withRouter(App)
