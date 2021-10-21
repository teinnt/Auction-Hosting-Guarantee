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
  UpdateItem,
} from '.'

function App(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/track-item" component={TrackItem} />
      <ProtectedRoute exact path="/lobby" component={Lobby} />
      <Route exact path="/update-item/:id" component={UpdateItem} />
      <Route exact path="/become-seller" component={SellerRegister} />
      <ProtectedRoute exact path="/lobby/room/:id" component={AuctionRoom} />
      <ProtectedRoute exact path="/confirm-details" component={UserDetails} />
      <Route exact path="/lobby/room/register-item/:id" component={ItemRegister} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default withRouter(App)
