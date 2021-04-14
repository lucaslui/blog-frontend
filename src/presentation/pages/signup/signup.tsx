import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Styles from './signup-styles.scss'
import { LoginHeader, Footer, Input, FormStatus, Logo, Button } from '@/presentation/components'
import { Validation } from '@/presentation/protocols/validation'
import { SaveAccessToken } from '@/domain/usecases/auth/save-access-token'
import { AddAccount } from '@/domain/usecases/auth/add-account'

type Props = {
  validation: Validation
  addAccount: AddAccount
  saveAccessToken: SaveAccessToken
}

const SignUp: React.FC<Props> = ({ validation, addAccount, saveAccessToken }: Props) => {
  const history = useHistory()

  const [state, setState] = useState({
    isLoading: false,
    isFormInvalid: true,
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    nameError: '',
    emailError: '',
    passwordError: '',
    passwordConfirmationError: '',
    mainError: ''
  })

  useEffect(() => validate('name'), [state.name])
  useEffect(() => validate('email'), [state.email])
  useEffect(() => validate('password'), [state.password])
  useEffect(() => validate('passwordConfirmation'), [state.passwordConfirmation])

  const validate = (field: string): void => {
    const { name, email, password, passwordConfirmation } = state
    const formData = { name, email, password, passwordConfirmation }
    setState(oldState => ({ ...oldState, [`${field}Error`]: validation.validate(field, formData) }))
    setState(oldState => ({ ...oldState, isFormInvalid: !!oldState.nameError || !!oldState.emailError || !!oldState.passwordError || !!oldState.passwordConfirmationError }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (!state.isLoading && !state.isFormInvalid) {
        setState(oldState => ({
          ...oldState,
          isLoading: true
        }))
        const account = await addAccount.add({
          name: state.name,
          email: state.email,
          password: state.password,
          passwordConfirmation: state.passwordConfirmation
        })
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
    <div className={Styles.signup}>
      <LoginHeader/>
      <form onSubmit={handleSubmit} className={Styles.form}>
        <Logo/>
         <hr />
         <div className={Styles.signupGroup}>
          <h2>Criar Conta</h2>
          <Input onChange={handleChange} title={state.nameError} type="text" name="name" placeholder="Digite seu nome"/>
          <Input onChange={handleChange} title={state.emailError} type="email" name="email" placeholder="Digite seu e-mail"/>
          <Input onChange={handleChange} title={state.passwordError} type="password" name="password" placeholder="Digite sua senha"/>
          <Input onChange={handleChange} title={state.passwordConfirmationError} type="password" name="passwordConfirmation" placeholder="Digite sua senha novamente"/>
          <Button disabled={state.isFormInvalid} type="submit" value="Criar"> Criar </Button>
          <Link to="/login" className={Styles.link}> Já tem cadastro? clique aqui </Link>
          <FormStatus isLoading={state.isLoading} mainError={state.mainError}/>
         </div>
      </form>
      <Footer/>
    </div>
  )
}

export default SignUp
