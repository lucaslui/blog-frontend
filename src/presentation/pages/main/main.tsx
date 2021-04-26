import React, { useState } from 'react'
import { NavLink, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'

import Styles from './main.scss'

import { Footer, Header } from '@/presentation/components'
import Tutorials from './contents/tutorials/tutorials'
import Home from './contents/home/home'
import News from './contents/news/news'
import Projects from './contents/projects/projects'
import Article from '@/presentation/components/article/article'

const Main: React.FC = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false)

  const toggleSidebar = (): void => setSidebarOpened(!sidebarOpened)

  const { path, url } = useRouteMatch()

  return (
    <div className={Styles.main}>
      <Header toggleSidebar={toggleSidebar} sidebarOpened={sidebarOpened} />
      <NavBar />
      <div className={Styles.content}>
        <Switch>
          <Route path={path} exact component={() => <Redirect to={`${url}/home`} />} />
          <Route path={`${path}/home`} component={Home} />
          <Route path={`${path}/news`} component={News} />
          <Route path={`${path}/tutorials`} component={Tutorials} />
          <Route path={`${path}/projects`} component={Projects} />
          <Route path={`${path}/article`} exact component={() => <Article/>} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default Main

const NavBar: React.FC = () => {
  const { url } = useRouteMatch()

  return (
    <nav className="navbar">
      <NavLink to={`${url}/home`} activeClassName="selected">
        <i className="fas fa-home" />
        <span> Início </span>
      </NavLink>
      <NavLink to={`${url}/news`} activeClassName="selected">
        <i className="fas fa-bookmark" />
        <span> Notícias </span>
      </NavLink>
      <NavLink to={`${url}/tutorials/categories`} activeClassName="selected">
        <i className="fas fa-book" />
        <span> Tutoriais </span>
      </NavLink>
      <NavLink to={`${url}/projects`} activeClassName="selected">
        <i className="fas fa-chart-bar" />
        <span> Projetos </span>
      </NavLink>
    </nav>
  )
}
