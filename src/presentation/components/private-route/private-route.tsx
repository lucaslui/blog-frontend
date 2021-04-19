import AccountContext from '@/presentation/contexts/account-context'
import React, { useContext } from 'react'
import { RouteProps } from 'react-router'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
  const { getCurrentAccount } = useContext(AccountContext)
  return getCurrentAccount()?.accessToken
    ? <Route {...props} />
    : <Route {...props} component={() => <Redirect to="/login" />} />
}

export default PrivateRoute
