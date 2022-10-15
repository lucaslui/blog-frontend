import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import AccountProvider from '@/application/providers/account-provider'

import Main from '@/application/pages/main/main'
import ControlPanel from '@/application/pages/profile/control-panel'

import Home from '@/application/contents/home/home'
import News from '@/application/contents/news/news'
import Projects from '@/application/contents/projects/projects'
import Tutorials from '@/application/contents/tutorials/tutorials'
import AccountSettings from '@/application/contents/account/settings'
import AddArticle from '@/application/contents/management-article/add-article'
import DeleteArticle from '@/application/contents/management-article/delete-article'
import AddCategory from '@/application/contents/category/add-category'
import EditProfile from '@/application/contents/edit-profile/edit-profile'
import Dashboard from '@/application/contents/panel/panel'
import ArticlesGrid from '@/application/contents/articles-grid/articles-grid'
import CategoriesGrid from '@/application/contents/categories-grid/categories.grid'
import Article from '@/application/contents/article/article'

import { makeSignUp } from './factories/pages/signup/signup-factory'
import { makeLogin } from './factories/pages/login/login-factory'

const Router: React.FC = () => {
  return (
    <AccountProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Navigate to="home" replace />} />
                    <Route path='home' element={<Home/>} />
                    <Route path='news' element={<News/>} />
                    <Route path='tutorials' element={<Tutorials/>}>
                        <Route path='categories' element={<CategoriesGrid/>} />
                        <Route path='articles' element={<ArticlesGrid/>} />
                    </Route>
                    <Route path='projects' element={<Projects/>} />
                    <Route path='article' element={<Article/>} />
                </Route>
                <Route path="/login" element={makeLogin} />
                <Route path="/signup" element={makeSignUp} />
                <Route path="/profile" element={<ControlPanel/>} >
                    <Route index element={<Navigate to="dashboard" replace />} />
                    <Route path='dashboard' element={<Dashboard/>} />
                    <Route path='edit-profile' element={<EditProfile/>} />
                    <Route path='add-article' element={<AddArticle/>} />
                    <Route path='edit-article' element={<AddArticle/>} />
                    <Route path='load-articles' element={<AddArticle/>} />
                    <Route path='delete-article' element={<DeleteArticle/>} />
                    <Route path='add-category' element={<AddCategory/>} />
                    <Route path='edit-category' element={<AddCategory/>} />
                    <Route path='load-categories' element={<AddCategory/>} />
                    <Route path='delete-category' element={<AddCategory/>} />
                    <Route path='account-settings' element={<AccountSettings/>} />
                </Route>
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </BrowserRouter>
    </AccountProvider>
  )
}

export default Router
