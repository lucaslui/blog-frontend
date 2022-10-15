import React from 'react'

import AccountContext from '../contexts/account-context'

import { AccountModel } from '@/entities/account'

type ProviderProps = {
  children: any
}

const AccountProvider: React.FC<ProviderProps> = ({ children }: ProviderProps) => {
  const setCurrentAccount = (account: AccountModel): void => {
    localStorage.setItem('account', JSON.stringify(account))
  }

  const getCurrentAccount = (): AccountModel => {
    const account = localStorage.getItem('account')
    return JSON.parse(account)
  }

  return (
    <AccountContext.Provider value={{ setCurrentAccount, getCurrentAccount }}>
      {children}
      </AccountContext.Provider>
  )
}

export default AccountProvider
