import React, { useState } from 'react'
import Styles from './profile-styles.scss'

import { Switch, Route, useRouteMatch } from 'react-router-dom'

import { Button, Footer, FormStatus, Header, Input, Sidebar } from '@/presentation/components'
import PageTitle from '@/presentation/components/page-title/page-title'

const Profile: React.FC = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false)

  const toggleSidebar = (): void => setSidebarOpened(!sidebarOpened)

  const { path, url } = useRouteMatch()

  const navbarItems = [
    {
      name: 'Editar Perfil',
      path: '/editProfile',
      icon: <i className="fas fa-user" />
    },
    {
      name: 'Controle de Artigos',
      path: '/article-management',
      icon: <i className="fas fa-sticky-note" />,
      children: [
        { name: 'Adicionar' },
        { name: 'Editar' },
        { name: 'Listar' },
        { name: 'Deletar' }
      ]
    },
    {
      name: 'Controle de Categorias',
      path: '/category-management',
      icon: <i className="fas fa-stream" />,
      children: [
        { name: 'Adicionar' },
        { name: 'Editar' },
        { name: 'Listar' },
        { name: 'Deletar' }
      ]
    },
    {
      name: 'Configuração de Conta',
      path: '/account-settings',
      icon: <i className="fas fa-cog" />
    }
  ]

  return (
    <div className={Styles.profile}>
      <Header toggleSidebar={toggleSidebar} sidebarOpened={sidebarOpened} />
      <Sidebar url={url} items={navbarItems} toggleSidebar={toggleSidebar} sidebarOpened={sidebarOpened} />
      <div className={Styles.content}>
        <Switch>
          <Route path={path} exact component={Panel} />
          <Route path={`${path}/editProfile`} component={EditProfile} />
          <Route path={`${path}/article-management`} component={ArticleManagement} />
          <Route path={`${path}/category-management`} component={CategoryManagement} />
          <Route path={`${path}/account-settings`} component={AccountSettings} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default Profile

const Panel: React.FC = () => {
  return (
    <h3>teste </h3>
  )
}

const EditProfile: React.FC = () => {
  const [state, setState] = useState({
    isLoading: false,
    isFormInvalid: true,
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    nameError: '',
    emailError: '',
    passwordError: '',
    passwordConfirmationError: '',
    mainError: ''
  })

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    return null
  }

  return (
    <div className={Styles.panel}>
      <PageTitle title='Editar Perfil' subtitle='Contém o conjunto de informações do autor'/>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <div className={Styles.row}>
          <div className={`${Styles.inputGroup} ${Styles.mr}`}>
            <span> Nome: </span>
            <Input onChange={handleChange} title={state.nameError} type="text" name="name" placeholder="Digite seu nome" />
          </div>
          <div className={`${Styles.inputGroup} ${Styles.mr}`}>
            <span> Apelido: </span>
            <Input onChange={handleChange} title={state.nameError} type="text" name="nickname" placeholder="Digite seu Apelido" />
          </div>
          <div className={`${Styles.inputGroup}`}>
            <span> Profissão: </span>
            <Input onChange={handleChange} title={state.nameError} type="text" name="occupation" placeholder="Digite sua Profissão" />
          </div>
        </div>
        <div className={Styles.row}>
          <div className={`${Styles.inputGroup} ${Styles.mr}`}>
            <span> Email: </span>
            <Input onChange={handleChange} title={state.nameError} type="text" name="email" placeholder="Digite seu Email" />
          </div>
          <div className={`${Styles.inputGroup} ${Styles.mr}`}>
            <span> Telefone: </span>
            <Input onChange={handleChange} title={state.nameError} type="text" name="contact" placeholder="Digite seu Telefone" />
          </div>
          <div className={`${Styles.inputGroup}`}>
            <span> Endereço: </span>
            <Input onChange={handleChange} title={state.nameError} type="text" name="region" placeholder="Digite seu Endereço" />
          </div>
        </div>
        <div className={Styles.row}>
          <div className={Styles.inputGroup}>
            <span> Página Profissional: </span>
            <Input onChange={handleChange} title={state.nameError} type="text" name="website" placeholder="Digite o endereço da sua página profissional"/>
          </div>
        </div>
        <div className={Styles.row}>
          <div className={`${Styles.inputGroup}`}>
            <span> Interesses: </span>
            <Input onChange={handleChange} title={state.nameError} type="text" name="interests" placeholder="Digite áreas e tecnologias em que tem interesse" />
          </div>
        </div>
        <div className={Styles.row}>
          <div className={Styles.inputGroup}>
            <span> Sobre: </span>
            <Input onChange={handleChange} title={state.nameError} type="text" name="about" placeholder="Digite um pouco sobre você" />
          </div>
        </div>
        <div className={Styles.row}>
          <FormStatus isLoading={state.isLoading} mainError={state.mainError} />
          <Button disabled={state.isFormInvalid} type="submit" value="Criar"> Editar </Button>
        </div>
      </form>
    </div>
  )
}

const ArticleManagement: React.FC = () => {
  return (
    <h3>teste </h3>
  )
}

const CategoryManagement: React.FC = () => {
  return (
    <h3>teste </h3>
  )
}

const AccountSettings: React.FC = () => {
  return (
    <h3>teste </h3>
  )
}
