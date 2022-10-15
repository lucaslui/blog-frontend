import React from 'react'

import Styles from './card.scss'

type Props = {
  titulo: string
  children: React.FC
}

const Card: React.FC<Props> = (props: Props) => {
  return (
    <div className={Styles.card}>
      <div className="content">
        {props.children}
      </div>
      <div className="title">{props.titulo}</div>
    </div>
  )
}

export default Card
