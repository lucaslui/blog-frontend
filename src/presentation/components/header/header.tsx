import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Styles from './header-styles.scss'

import LogoImage from '../../assets/imgs/logo.svg'
import DefaultUserImage from '../../assets/imgs/user.svg'

type Props = {
  sidebarOpened: boolean
  toggleSidebar: any
}

const Header: React.FC<Props> = (props: Props) => {
  const [token] = useState(false)

  return (
    <header className={Styles.header}>
      <div className={Styles.logo}>
        <img src={LogoImage} alt="logo" />
        <div>
          <h1> Espaço de Conhecimento em IoT </h1>
          <h2>
            Tendo como objetivo o ensino de Internet das Coisas de forma
            simples, prática e objetiva.
          </h2>
        </div>
      </div>
      <div className={Styles.spacer}/>
      { token ? <Settings/> : <SignIn/>}
    </header>
  )
}

export default Header

const Settings: React.FC = () => {
  const [dropmenu, setDropmenu] = useState(false)

  const toggleDropmenu = (): void => {
    setDropmenu(!dropmenu)
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
