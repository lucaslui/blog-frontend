import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Styles from './header-styles.scss'

import LogoImage from '../../assets/imgs/logo.svg'
import DefaultUserImage from '../../assets/imgs/user.svg'
import AccountContext from '@/presentation/contexts/account-context'

type Props = {
  sidebarOpened: boolean
  toggleSidebar: any
}

const Header: React.FC<Props> = (props: Props) => {
  const { getCurrentAccount } = useContext(AccountContext)

  return (
    <header className={Styles.header}>
      <Link to='/' className={Styles.logo}>
        <img src={LogoImage} alt="logo" />
        <div>
          <h1> Espaço de Conhecimento em IoT </h1>
          <h2>
            Tendo como objetivo o ensino de Internet das Coisas de forma
            simples, prática e objetiva.
          </h2>
        </div>
      </Link>
      <div className={Styles.spacer}/>
      { getCurrentAccount()?.accessToken ? <Settings/> : <SignIn/>}
    </header>
  )
}

export default Header

const Settings: React.FC = () => {
  const [dropmenu, setDropmenu] = useState(false)
  const history = useHistory()

  const toggleDropmenu = (): void => {
    setDropmenu(!dropmenu)
    history.replace('/profile')
  }

  return (
    <div className={Styles.settings}>
        <div>
          <span> Nome </span>
          <i className="fas fa-bell"></i>
        </div>
        <div className={Styles.dropdown} onClick={toggleDropmenu}>
          <img src={DefaultUserImage} alt="default-photo" />
          {dropmenu ? <i className="fas fa-sort-up" /> : <i className="fas fa-sort-down" /> }
        </div>
      </div>
  )
}

const SignIn: React.FC = () => {
  return (
    <Link to='/profile' className={Styles.signin}>
      <i className="fas fa-sign-in-alt"></i>
      <span> Entrar </span>
    </Link>
  )
}
