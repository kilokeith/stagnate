import { Route, Switch } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import Router from './Router'
import routes from '../routes'

const Err404 = () => {
  return (
    <div>404</div>
  )
}

const Root = ({path, assets, webpackStats}) => {
  return (
    <Provider store={store}>
      <Router path={path}>
        <Switch>
          {
            Object.entries(routes)
              .map(([path, Component]) =>
                <Route exact path={path} component={Component} />
              )
          }
          <Route component={Err404} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default Root

