import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Styles from './login-styles.scss'
import { LoginHeader, Footer, Input, FormStatus, Logo, Button } from '@/presentation/components'
import { Validation } from '@/presentation/protocols/validation'
import { Authentication } from '@/domain/usecases/auth/authentication'
import { SaveAccessToken } from '@/domain/usecases/auth/save-access-token'

type Props = {
  validation: Validation
  authentication: Authentication
  saveAccessToken: SaveAccessToken
}

const Login: React.FC<Props> = ({ validation, authentication, saveAccessToken }: Props) => {
  const history = useHistory()

  const [state, setState] = useState({
    isLoading: false,
    isFormInvalid: true,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => validate('email'), [state.email])
  useEffect(() => validate('password'), [state.password])

  const validate = (field: string): void => {
    const { email, password } = state
    const formData = { email, password }
    setState(oldState => ({ ...oldState, [`${field}Error`]: validation.validate(field, formData) }))
    setState(oldState => ({ ...oldState, isFormInvalid: !!oldState.emailError || !!oldState.passwordError }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (!state.isLoading && !state.isFormInvalid) {
        setState(oldState => ({
          ...oldState,
          isLoading: true
        }))
        const account = await authentication.auth({ email: state.email, password: state.password })
        if (account?.accessToken) {
          await saveAccessToken.save(account.accessToken)
          history.replace('/')
        }
      }
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        mainError: error.message
      })
    }
  }

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className={Styles.login}>
      <LoginHeader/>
        <form onSubmit={handleSubmit} className={Styles.form}>
          <Logo/>
          <hr />
          <h2>Login</h2>
          <Input onChange={handleChange} title={state.emailError} type="email" name="email" placeholder="Digite seu e-mail"/>
          <Input onChange={handleChange} title={state.passwordError} type="password" name="password" placeholder="Digite sua senha"/>
          <Button disabled={state.isFormInvalid} type="submit"> Entrar </Button>
          <Link to="/signup" className={Styles.link}>Não tem cadastro? Cadastre-se aqui</Link>
          <FormStatus isLoading={state.isLoading} mainError={state.mainError}/>
        </form>
      <Footer/>
    </div>
  )
}

export default Login
