import React from 'react'

import SignUp from '@/application/pages/signup/signup'

import { makeRemoteAddAccount } from '../../usecases/auth/remote-add-account-factory'
import { makeSignUpValidation } from './signup-validation-factory'

export const makeSignUp = <SignUp addAccount={makeRemoteAddAccount()} validation={makeSignUpValidation()} />
