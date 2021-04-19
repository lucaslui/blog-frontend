import React, { useEffect, useState } from 'react'
import Styles from './tutorials.scss'

import { Footer, Header } from '@/presentation/components'
import { Link, NavLink, Redirect, Route, Switch, useLocation, useRouteMatch } from 'react-router-dom'
import CategoryCard from '@/presentation/components/category-card/category-card'
import axios from 'axios'
import ArticleCard from '@/presentation/components/article-card/article-card'

const Tutorials: React.FC = () => {
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

  const { path, url } = useRouteMatch()

  return (
    <div className={Styles.tutorials}>
      <Header toggleSidebar={toggleSidebar} sidebarOpened={sidebarOpened} />
      <NavBar />
      <div className={Styles.content}>
        <Switch>
          <Route path={path} exact component={() => <Redirect to={`${url}/categories`} />} />
          <Route path={`${path}/categories`} component={() => <CategoriesGrid url={url} />} />
          <Route path={`${path}/articles`} component={() => <ArticlesGrid url={url} />} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default Tutorials

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

type Props = {
  url: string
}

const CategoriesGrid: React.FC<Props> = (props: Props) => {
  const [categories, setCategories] = useState([{
    id: '',
    name: '',
    description: '',
    imageUrl: '',
    categoryParentId: '',
    children: []
  }])

  const location = useLocation()

  useEffect((): void => {
    fetchData()
      .then((data) => setCategories(data))
      .catch((error) => console.log(error))
  }, [location])

  const fetchData = async (): Promise<any> => {
    const result = await axios(
      `https://espaco-de-conhecimento-backend.herokuapp.com/api/categories/tree${location.search}`
    )
    return result.data
  }

  return (
    <div className="categories-grid">
      {
        categories.map((category, index) => {
          return (
            <Link to={(Array.isArray(category.children) && category.children.length) ? `${props.url}/categories?categoryId=${category.id}` : `${props.url}/articles?categoryId=${category.id}`} key={index} >
              <CategoryCard
                name={category.name}
                description={category.description}
                imageUrl={category.imageUrl} />
            </Link>
          )
        })
      }
    </div>
  )
}

const ArticlesGrid: React.FC<Props> = (props: Props) => {
  const [articles, setArticles] = useState([{
    id: '',
    title: '',
    description: '',
    content: '',
    imageUrl: '',
    userId: '',
    categoryId: '',
    createdAt: ''
  }])

  const location = useLocation()

  useEffect(() => {
    fetchData()
      .then((data) => setArticles(data))
      .catch((error) => console.log(error))
  }, [location])

  const fetchData = async (): Promise<any> => {
    const result = await axios(
      `https://espaco-de-conhecimento-backend.herokuapp.com/api/articles${location.search}`
    )
    return result.data
  }

  return (
    <div className="articles-grid">
      {
        articles.map(article => {
          return (
            <Link key={article.id} to={`/article?articleId=${article.id}`}>
              <ArticleCard
                title={article.title}
                description={article.description}
                content={article.content}
                imageUrl={article.imageUrl}
                userId={article.userId}
                categoryId={article.categoryId}
                createdAt={article.createdAt} />
            </Link>
          )
        })
      }
    </div>
  )
}
