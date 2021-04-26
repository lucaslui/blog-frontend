import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import parse from 'html-react-parser'

import axios from 'axios'

import Styles from './article.scss'

const Article: React.FC = () => {
  const [article, setArticle] = useState({
    title: '',
    description: '',
    content: '',
    imageUrl: '',
    userId: '',
    categoryId: '',
    createdAt: ''
  })

  const location = useLocation()

  useEffect(() => {
    fetchData()
      .then((data) => setArticle(data))
      .catch((error) => console.log(error))
  }, [location])

  const fetchData = async (): Promise<any> => {
    const result = await axios(
      `https://espaco-de-conhecimento-backend.herokuapp.com/api/articles${location.search}`
    )
    return result.data[0]
  }

  return (
    <div className={Styles.article}>
      <div className={Styles.articleHeader}>
        <h1> {article.title} </h1>
        <img src={article.imageUrl} alt="Imagem de capa do artigo"/>
        <h2> {article.description} </h2>
      </div>
      <div className={Styles.articleContent}>
        {parse(article.content)}
      </div>
    </div >
  )
}

export default Article
