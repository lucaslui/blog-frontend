import ArticlesGrid from '@/presentation/components/articles-grid/articles-grid'
import CategoriesGrid from '@/presentation/components/categories-grid/categories.grid'
import React from 'react'

import Styles from './tutorials.scss'

import { Route, Switch, useRouteMatch } from 'react-router-dom'

const Tutorials: React.FC = () => {
  const { path, url } = useRouteMatch()
  return (
    <div className={Styles.tutorials}>
      <Switch>
        <Route path={`${path}/categories`} component={() => <CategoriesGrid url={url}/>} />
        <Route path={`${path}/articles`} component={() => <ArticlesGrid url={url}/>} />
      </Switch>
    </div>
  )
}

export default Tutorials
