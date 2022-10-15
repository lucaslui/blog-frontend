import React from 'react'

import Styles from './page-title-styles.scss'

type Props = {
  title?: string
  subtitle?: string
}

const PageTitle: React.FC<Props> = (props: Props) => {
  return (
    <div className={Styles.pageTitle}>
      <h1> {props.title} </h1>
      <h2> {props.subtitle} </h2>
    </div>
  )
}

export default PageTitle
