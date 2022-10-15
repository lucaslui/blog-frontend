import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Styles from './header-styles.scss'

import LogoImage from '../../assets/imgs/logo.svg'
import DefaultUserImage from '../../assets/imgs/user.svg'
import AccountContext from '@/application/contexts/account-context'

type Props = {
  sidebarOpened: boolean
  toggleSidebar: any
}

const Header: React.FC<Props> = (props: Props) => {
  const { getCurrentAccount } = useContext(AccountContext)

  return (
    <header className={Styles.header}>
      <Logo />
      <div className={Styles.spacer} />
      { getCurrentAccount()?.accessToken ? <Settings /> : <SignIn />}
    </header>
  )
}

export default Header

const Logo: React.FC = () => {
  return (
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
  )
}

const Settings: React.FC = () => {
  const [dropmenu, setDropmenu] = useState(false)
  const navigate = useNavigate()

  const toggleDropmenu = (): void => {
    setDropmenu(!dropmenu)
    navigate('/profile')
  }

  return (
    <div className={Styles.userSettings}>
      <div className={Styles.notifications}>
        <i className="fas fa-bell" />
      </div>
      <div className={Styles.workbench}>
        <i className="fas fa-plus-square"></i>
      </div>
      <div className={Styles.dropdown} onClick={toggleDropmenu}>
        <img src={DefaultUserImage} alt="default-photo" />
        {dropmenu ? <i className="fas fa-sort-up" /> : <i className="fas fa-sort-down" />}
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
