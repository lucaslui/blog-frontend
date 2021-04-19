import React, { useState } from 'react'
import Styles from './projects.scss'

import { Footer, Header } from '@/presentation/components'
import { NavLink } from 'react-router-dom'

const Projects: React.FC = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false)

  const toggleSidebar = (): void => setSidebarOpened(!sidebarOpened)
  // const [authorProfile] = useState({
  //   nickname: '',
  //   occupation: '',
  //   region: '',
  //   about: '',
  //   interests: '',
  //   contact: '',
  //   website: ''
  // })

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       'https://espaco-de-conhecimento-backend.herokuapp.com/api/users/603a537aa65a6932d7f7cf0e'
  //     )
  //     setAuthorProfile(result.data)
  //   }
  //   fetchData()
  // }, [])

  // const [categories] = useState<CategoryModel[]>([{
  //   id: '',
  //   name: '',
  //   description: '',
  //   imageUrl: '',
  //   categoryParentId: '',
  //   children: []
  // }])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       'https://espaco-de-conhecimento-backend.herokuapp.com/api/categories/tree'
  //     )
  //     setCategories(result.data)
  //   }
  //   fetchData()
  // }, [])
  return (
    <div className={Styles.projects}>
      <Header toggleSidebar={toggleSidebar} sidebarOpened={sidebarOpened} />
      <NavBar />
      <div className={Styles.content}>
        Projetos
      </div>
      <Footer />
    </div>
  )
}

export default Projects

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <NavLink to="/home" activeClassName="selected">
        <i className="fas fa-home" />
        <span> Início </span>
      </NavLink>
      <NavLink to="/news" activeClassName="selected">
        <i className="fas fa-bookmark" />
        <span> Notícias </span>
      </NavLink>
      <NavLink to="/tutorials" activeClassName="selected">
        <i className="fas fa-book" />
        <span> Tutoriais </span>
      </NavLink>
      <NavLink to="/projects" activeClassName="selected">
        <i className="fas fa-chart-bar" />
        <span> Projetos </span>
      </NavLink>
    </nav>
  )
}
