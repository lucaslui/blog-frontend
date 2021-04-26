import React, { useEffect, useState } from 'react'
import Styles from './home.scss'

// import { Carousel } from 'react-responsive-carousel'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// import 'react-responsive-carousel/lib/styles/carousel.min.css'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import ArticleCard from '@/presentation/components/article-card/article-card'

const Home: React.FC = () => {
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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      // partialVisibilityGutter: 30,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      // partialVisibilityGutter: 30,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      // partialVisibilityGutter: 30,
      slidesToSlide: 1
    }
  }

  return (
    <div className={Styles.home}>
      <div className={Styles.homeNews}>
        <div className={Styles.lastNews}>
          <h3> Ultimas Notícias </h3>
          <hr/>
          <Carousel
            autoPlay
            responsive={responsive}
            arrows
            autoPlaySpeed={2000}
            centerMode={true}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            showDots={false}
            renderDotsOutside={false}
            sliderClass=""
            swipeable
            >
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
          </Carousel>
        </div>
        <div className={Styles.lastTutorials}>
          <h3> Ultimos Tutoriais </h3>
          <hr/>
          <Carousel
            autoPlay
            responsive={responsive}
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={2000}
            centerMode={true}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            showDots={false}
            renderDotsOutside={false}
            sliderClass=""
            swipeable
          >
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
          </Carousel>
        </div>
        <div className={Styles.lastProjects}>
          <h3> Ultimos Projetos </h3>
          <hr/>
          <Carousel
            autoPlay
            responsive={responsive}
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={2000}
            centerMode={true}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            showDots={false}
            renderDotsOutside={false}
            sliderClass=""
            swipeable
          >
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
          </Carousel>
        </div>
      </div>
      <div className={Styles.statistics}>
        <h3> Estatísticas </h3>
        <p> adsdasdas </p>
      </div>
    </div>
  )
}

export default Home
