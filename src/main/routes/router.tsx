import React from 'react'

import { makeLogin } from '../factories/pages/login/login-factory'
import { makeSignUp } from '../factories/pages/signup/signup-factory'

// import { getCurrentAccountAdapter, setCurrentAccountAdapter } from '../adapters/current-account-adapter'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Router: React.FC = () => {
  // const state = {
  //   setCurrentAccount: setCurrentAccountAdapter,
  //   getCurrentAccount: getCurrentAccountAdapter
  // }
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={makeLogin} />
          <Route path="/signup" exact component={makeSignUp} />
          {/* <PrivateRoute path="/" exact component={makeSurveyList} />
          <PrivateRoute path="/surveys/:id" component={makeSurveyResult} /> */}
        </Switch>
      </BrowserRouter>
  )
}

export default Router
