import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { AddEvent, Main } from './Pages'
import Layout from './Components/Layout/Layout'

const Routes = ({}) => {
  return (
    <Layout>
      <Switch>
        <Route path="/add-event" component={AddEvent} />
        <Route exact path="/" component={Main} />
      </Switch>
    </Layout>
  )
}

export default Routes
