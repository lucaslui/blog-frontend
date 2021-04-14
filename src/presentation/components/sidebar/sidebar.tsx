import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Styles from './sidebar-styles.scss'

import DefaultUserImage from '../../assets/imgs/user.svg'

type Props = {
  items?: any
  sidebarOpened?: boolean
  toggleSidebar?: any
  url?: any
}

const Sidebar: React.FC<Props> = (props: Props) => {
  return (
    <div className={Styles.sidebar} data-status={props.sidebarOpened ? 'open' : 'closed'}>
      <button className={Styles.toggle} onClick={props.toggleSidebar}>
        <i className="fas fa-angle-double-left" />
      </button>
      <div className={Styles.profile}>
        <img src={DefaultUserImage} alt="default-photo" />
        <span> Nome do Usuário </span>
        <Link to="/perfil" rel="author" className={Styles.link}>Alterar Foto</Link>
      </div>
      <hr />
      <nav className={Styles.menu}>
        { props.items.map((item, index) => <SubMenu url={props.url} items={item} key={index} />) }

      </nav>
      <div className="spacer"></div>
      <div className={Styles.logout}>
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
      <NavLink
        className={Styles.item}
        to={!props.items.children && `${props.url}${props.items.path}`}
        onClick={props.items.children && showchildren}
        activeClassName="selected">
        <div className={Styles.label}>
          {props.items.icon}
          <span className="sidebar-label">{props.items.name}</span>
        </div>
        <div>
          {props.items.children && children ? <i className="fas fa-sort-up" /> : props.items.children ? <i className="fas fa-sort-down" /> : null }
        </div>
      </NavLink>
      {children &&
        props.items.children.map((item, index) => {
          return (
            <NavLink className={Styles.subitem} to={(Array.isArray(item.children) && item.children.length) ? `/categories?itemId=${item.id}` : `/articles?itemId=${item.id}`} key={index} activeClassName="selected">
              {item.icon}
              <span className="sidebar-label">{item.name}</span>
            </NavLink>
          )
        })}
    </>
  )
}
