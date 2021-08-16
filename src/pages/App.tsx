import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { AuctionHost, Buyer, Home, Lobby, NotFound } from '.'

function App(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth/host" component={AuctionHost} />
      <Route exact path="/auth/buyer" component={Buyer} />
      <Route exact path="/lobby" component={Lobby} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default withRouter(App)
