import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Styles from './main.scss'

import { Footer, Header } from '@/application/components'
import NavBar from '@/application/components/navbar/navbar'

const Main: React.FC = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false)

  const toggleSidebar = (): void => setSidebarOpened(!sidebarOpened)

  return (
    <div className={Styles.main}>
      <Header toggleSidebar={toggleSidebar} sidebarOpened={sidebarOpened} />
      <NavBar />
        <div className={Styles.content}>
            <Outlet/>
        </div>
      <Footer />
    </div>
  )
}

export default Main
