import React, { useState } from 'react'
import Styles from './home-styles.scss'

import { Footer, Header } from '@/presentation/components'

const Home: React.FC = () => {
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
    <div className={Styles.home}>
      <Header toggleSidebar={toggleSidebar} sidebarOpened={sidebarOpened} />
      <div className={Styles.content}>
        aaaaaaaaaaaa
      </div>
      <Footer />
    </div>
  )
}

export default Home
