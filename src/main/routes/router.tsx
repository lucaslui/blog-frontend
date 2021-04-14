import React from 'react'

import { makeLogin } from '../factories/pages/login/login-factory'
import { makeSignUp } from '../factories/pages/signup/signup-factory'

// import { getCurrentAccountAdapter, setCurrentAccountAdapter } from '../adapters/current-account-adapter'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '@/presentation/pages/home/home'
import Profile from '@/presentation/pages/profile/profile'

const Router: React.FC = () => {
  // const state = {
  //   setCurrentAccount: setCurrentAccountAdapter,
  //   getCurrentAccount: getCurrentAccountAdapter
  // }
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={makeLogin} />
          <Route path="/signup" component={makeSignUp} />
          <Route path="/profile" component={Profile} />
          {/* <PrivateRoute path="/" exact component={makeSurveyList} />
          <PrivateRoute path="/surveys/:id" component={makeSurveyResult} /> */}
        </Switch>
      </BrowserRouter>
  )
}

export default Router
