import React from 'react'

import Styles from './tutorials.scss'

import { Outlet } from 'react-router-dom'

const Tutorials: React.FC = () => {
  return (
    <div className={Styles.tutorials}>
      <Outlet/>
    </div>
  )
}

export default Tutorials
