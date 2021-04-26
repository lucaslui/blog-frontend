import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import CategoryCard from '../category-card/category-card'

import Styles from './categories-grid.scss'

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
    <div className={Styles.categoriesGrid}>
      {
        categories.map((category, index) => {
          return (
            <Link to={(Array.isArray(category.children) && category.children.length)
              ? `${props.url}/categories?categoryId=${category.id}`
              : `${props.url}/articles?categoryId=${category.id}`} key={index} >
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

export default CategoriesGrid
