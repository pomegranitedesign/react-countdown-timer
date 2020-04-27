import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'

import Routes from './Routes'
import rootReducer from './redux/reducers'
import './index.css'

const store = createStore(rootReducer)

render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
