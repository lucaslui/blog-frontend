import React from 'react'
import { NavLink } from 'react-router-dom'

import Styles from './navbar-styles.scss'

type Props = {
  sidebarOpened: boolean
  toggleSidebar: any
}

const Navbar: React.FC<Props> = (props: Props) => {
  return (
    <nav className={Styles.navbar}>
        <NavLink to="/articles" activeClassName={Styles.selected}>
          <i className="fas fa-home" />
          <span> Início </span>
        </NavLink>
        <NavLink to="/categories" activeClassName={Styles.selected}>
          <i className="fas fa-book" />
          <span> Categorias </span>
        </NavLink>
        <NavLink to="/projects" activeClassName={Styles.selected}>
          <i className="fas fa-chart-bar" />
          <span> Projetos </span>
        </NavLink>
        <div className={Styles.about} data-status={props.sidebarOpened ? 'selected' : ''}>
          <button onClick={props.toggleSidebar}>
            <i className="fas fa-question-circle" />
            <span> Sobre </span>
          </button>
        </div>
        <div className={Styles.spacer}/>
        <div className={Styles.mobile}>
          <button>
            <i className="fas fa-search" />
          </button>
        </div>
        <div className={Styles.search}>
          <i className="fas fa-search"></i>
          <input type="search" id="header-search" name="search" />
        </div>
      </nav>
  )
}

export default Navbar
