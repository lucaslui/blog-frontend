import React from 'react'

import Styles from './category-card.scss'

type Props = {
  imageUrl: string
  name: string
  description: string
}

const CategoryCard: React.FC<Props> = (props: Props) => {
  return (
    <div className={Styles.categoryCard}>
      <img src={props.imageUrl} alt='Imagem da Categoria'/>
      <div className={Styles.categoryFoot}>
        <span> {props.name}</span>
      </div>
    </div>
  )
}

export default CategoryCard
