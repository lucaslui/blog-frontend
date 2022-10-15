import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Styles from './article-card.scss'

type Props = {
  title: string
  description: string
  content: string
  imageUrl: string
  userId: string
  categoryId: string
  createdAt: string
}

const ArticleCard: React.FC<Props> = (props: Props) => {
  const [profile, setProfile] = useState({
    nickname: '',
    occupation: '',
    region: '',
    about: '',
    interests: '',
    contact: '',
    website: ''
  })

  useEffect(() => {
    fetchData()
      .then((data) => setProfile(data))
      .catch((error) => console.log(error))
  }, [])

  const fetchData = async (): Promise<any> => {
    const result = await axios(
      'https://espaco-de-conhecimento-backend.herokuapp.com/api/users/603a537aa65a6932d7f7cf0e'
    )
    return result.data
  }

  const getDateFormat = (date): string => {
    const ISODate = new Date(date)
    const month = ISODate.getMonth() + 1
    const monthConverter = month < 10 ? `0${month}` : month
    return `${ISODate.getDate()}-${(monthConverter)}-${ISODate.getFullYear()}`
  }

  return (
    <div className={Styles.articleCard}>
      <img src={props.imageUrl} alt='Imagem do Artigo' />
      <div className="article-content">
        <h4>{props.title}</h4>
        <span>{props.description}</span>
      </div>
      <div className="article-foot">
        <div>
          <i className="far fa-calendar-alt" />
          <span>{getDateFormat(props.createdAt)}</span>
        </div>
        <div>
          <i className="fas fa-user-edit" />
          <span>{profile.nickname}</span>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
