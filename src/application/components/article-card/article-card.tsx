import React from 'react'

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
          <span>{'Lucas'}</span>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
