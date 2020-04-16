import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from './Pages/Main'
import AddEvent from './Pages/AddEvent'
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
