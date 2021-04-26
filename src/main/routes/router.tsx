import React from 'react'

import { makeLogin } from '../factories/pages/login/login-factory'
import { makeSignUp } from '../factories/pages/signup/signup-factory'

// import { getCurrentAccountAdapter, setCurrentAccountAdapter } from '../adapters/current-account-adapter'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import ControlPanel from '@/presentation/pages/profile/control-panel'
import AccountContext from '@/presentation/contexts/account-context'
import { getCurrentAccountAdapter, setCurrentAccountAdapter } from '../adapters/current-account-adapter'
import { PrivateRoute } from '@/presentation/components'
import Main from '@/presentation/pages/main/main'

const Router: React.FC = () => {
  const state = {
    setCurrentAccount: setCurrentAccountAdapter,
    getCurrentAccount: getCurrentAccountAdapter
  }
  return (
    <AccountContext.Provider value={state}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/main" />} />
          <Route path="/main" component={Main} />
          <Route path="/login" component={makeLogin} />
          <Route path="/signup" component={makeSignUp} />
          <PrivateRoute path="/profile" component={ControlPanel} />
          {/* <PrivateRoute path="/surveys/:id" component={makeSurveyResult} /> */}
        </Switch>
      </BrowserRouter>
    </AccountContext.Provider>
  )
}

export default Router
