import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

import Styles from './categories-grid.scss'

import { CategoryModel } from '@/entities/category'

import CategoryCard from '@/application/components/category-card/category-card'

const CategoriesGrid: React.FC = () => {
  const [categories, setCategories] = useState<CategoryModel[]>([])

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
            <Link to={(Array.isArray(category.children) && category.children.length) ? `?categoryId=${category.id}` : `?categoryId=${category.id}`} key={index} >
              <CategoryCard name={category.name} description={category.description} imageUrl={category.imageUrl} />
            </Link>
          )
        })
      }
    </div>
  )
}

export default CategoriesGrid
