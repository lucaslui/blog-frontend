import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ArticleCard from '../article-card/article-card'

import Styles from './articles-grid.scss'

type Props = {
  url: string
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
    <div className={Styles.articlesGrid}>
      {
        articles.map(article => {
          return (
            <Link key={article.id} to={`/main/article?articleId=${article.id}`}>
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

export default ArticlesGrid
