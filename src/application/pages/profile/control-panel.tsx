import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Styles from './control-panel.scss'

import { Footer, Header, PrivateRoute, Sidebar } from '@/application/components'

const ControlPanel: React.FC = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false)

  const toggleSidebar = (): void => setSidebarOpened(!sidebarOpened)

  const navbarItems = [
    {
      name: 'Editar Perfil',
      path: 'edit-profile',
      icon: <i className="fas fa-user" />
    },
    {
      name: 'Controle de Artigos',
      path: 'article-management',
      icon: <i className="fas fa-sticky-note" />,
      children: [
        { name: 'Adicionar', path: 'add-article' },
        { name: 'Editar', path: 'edit-article' },
        { name: 'Listar', path: 'load-articles' },
        { name: 'Deletar', path: 'delete-article' }
      ]
    },
    {
      name: 'Controle de Categorias',
      path: 'category-management',
      icon: <i className="fas fa-stream" />,
      children: [
        { name: 'Adicionar', path: 'add-category' },
        { name: 'Editar', path: 'edit-category' },
        { name: 'Listar', path: 'load-categories' },
        { name: 'Deletar', path: 'delete-category' }
      ]
    },
    {
      name: 'Configuração de Conta',
      path: 'account-settings',
      icon: <i className="fas fa-cog" />
    }
  ]

  return (
    <PrivateRoute>
        <div className={Styles.controlPanel}>
        <Header toggleSidebar={toggleSidebar} sidebarOpened={sidebarOpened} />
        <div className={Styles.content}>
            <Sidebar items={navbarItems} toggleSidebar={toggleSidebar} sidebarOpened={sidebarOpened} />
            <div className={Styles.panel}>
                <Outlet/>
            </div>
        </div>
        <Footer />
        </div>
    </PrivateRoute>
  )
}

export default ControlPanel
