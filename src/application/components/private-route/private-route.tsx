import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'

import AccountContext from '@/application/contexts/account-context'

type Props = {
  children: any
}

const PrivateRoute: React.FC = (props: Props) => {
  const { getCurrentAccount } = useContext(AccountContext)
  return getCurrentAccount()?.accessToken ? props.children : <Navigate to="/login" replace/>
}

export default PrivateRoute
