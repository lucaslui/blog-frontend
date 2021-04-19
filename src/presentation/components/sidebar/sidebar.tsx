import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Styles from './sidebar-styles.scss'

import DefaultPhoto from '../../assets/imgs/user.svg'
import AccountContext from '@/presentation/contexts/account-context'

type Props = {
  items?: any
  sidebarOpened?: boolean
  toggleSidebar?: any
  url?: any
}

const Sidebar: React.FC<Props> = (props: Props) => {
  const { setCurrentAccount } = useContext(AccountContext)
  const history = useHistory()

  const logout = (): void => {
    setCurrentAccount(null)
    history.replace('/')
  }

  return (
    <div className={Styles.sidebar} data-status={props.sidebarOpened ? 'open' : 'closed'}>
      <button className={Styles.toggle} onClick={props.toggleSidebar}>
        <i className="fas fa-angle-double-left" />
      </button>
      <div className={Styles.profileData}>
        <img src={DefaultPhoto} alt="photo" />
        <span> Nome do Usuário </span>
        <Link to="/perfil" rel="author" className={Styles.link}>Alterar Foto</Link>
      </div>
      <hr />
      <nav className={Styles.menu}>
        { props.items.map((item, index) => <SubMenu url={props.url} items={item} key={index} />) }
      </nav>
      <div className="spacer"></div>
      <div className={Styles.logout} onClick={logout}>
        <i className="fas fa-sign-out-alt"></i>
        <span> Sair da Conta </span>
      </div>
    </div >
  )
}

export default Sidebar

const SubMenu: React.FC<Props> = (props: Props) => {
  const [children, setChildren] = useState(false)

  const showchildren = (): void => setChildren(!children)

  return (
    <>
      <Link
        className={Styles.item}
        to={!props.items.children && `${props.url}${props.items.path}`}
        onClick={props.items.children && showchildren}>
        <div className={Styles.label}>
          {props.items.icon}
          <span>{props.items.name}</span>
        </div>
        <div>
          {props.items.children && children ? <i className="fas fa-sort-up" /> : props.items.children ? <i className="fas fa-sort-down" /> : null }
        </div>
      </Link>
      {children &&
        props.items.children.map((item, index) => {
          return (
            <Link className={Styles.subitem} to={`${props.url}${item.path}`} key={index}>
              <span>{item.name}</span>
            </Link>
          )
        })}
    </>
  )
}
