import React, { useState } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Styles from './control-panel.scss'

import { Footer, Header, Sidebar } from '@/presentation/components'

import Panel from './contents/panel/panel'
import EditProfile from './contents/edit-profile/edit-profile'
import AddArticle from './contents/article/add-article'
import AddCategory from './contents/category/add-category'
import AccountSettings from './contents/account/settings'
import DeleteArticle from './contents/article/delete-article'

const ControlPanel: React.FC = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false)

  const toggleSidebar = (): void => setSidebarOpened(!sidebarOpened)

  const { path, url } = useRouteMatch()

  const navbarItems = [
    {
      name: 'Editar Perfil',
      path: '/edit-profile',
      icon: <i className="fas fa-user" />
    },
    {
      name: 'Controle de Artigos',
      path: '/article-management',
      icon: <i className="fas fa-sticky-note" />,
      children: [
        { name: 'Adicionar', path: '/add-article' },
        { name: 'Editar', path: '/edit-article' },
        { name: 'Listar', path: '/load-articles' },
        { name: 'Deletar', path: '/delete-article' }
      ]
    },
    {
      name: 'Controle de Categorias',
      path: '/category-management',
      icon: <i className="fas fa-stream" />,
      children: [
        { name: 'Adicionar', path: '/add-category' },
        { name: 'Editar', path: '/edit-category' },
        { name: 'Listar', path: '/load-categories' },
        { name: 'Deletar', path: '/delete-category' }
      ]
    },
    {
      name: 'Configuração de Conta',
      path: '/account-settings',
      icon: <i className="fas fa-cog" />
    }
  ]

  return (
    <div className={Styles.controlPanel}>
      <Header toggleSidebar={toggleSidebar} sidebarOpened={sidebarOpened} />
      <div className={Styles.content}>
        <Sidebar url={url} items={navbarItems} toggleSidebar={toggleSidebar} sidebarOpened={sidebarOpened} />
        <div className={Styles.panel}>
          <Switch>
            <Route path={path} exact component={Panel} />
            <Route path={`${path}/edit-profile`} component={EditProfile} />
            <Route path={`${path}/add-article`} component={AddArticle} />
            <Route path={`${path}/edit-article`} component={AddArticle} />
            <Route path={`${path}/load-articles`} component={AddArticle} />
            <Route path={`${path}/delete-article`} component={DeleteArticle} />
            <Route path={`${path}/add-category`} component={AddCategory} />
            <Route path={`${path}/edit-category`} component={AddCategory} />
            <Route path={`${path}/load-categories`} component={AddCategory} />
            <Route path={`${path}/delete-category`} component={AddCategory} />
            <Route path={`${path}/account-settings`} component={AccountSettings} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ControlPanel
