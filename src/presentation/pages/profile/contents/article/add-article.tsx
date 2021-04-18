import React, { useState } from 'react'
import Styles from './add-article.scss'
import { Editor } from '@tinymce/tinymce-react'
import DropdownTreeSelect from 'react-dropdown-tree-select'

import 'react-dropdown-tree-select/dist/styles.css'

import { Button, FormStatus, InputGroup, PageTitle, TextAreaGroup } from '@/presentation/components'

const AddArticle: React.FC = () => {
  const [state, setState] = useState({
    isLoading: false,
    isFormInvalid: true
  })

  const [errors] = useState({
    titleError: '',
    descriptionError: '',
    contentError: '',
    imageUrlError: '',
    mainError: ''
  })

  const [article, setArticle] = useState({
    title: '',
    description: '',
    content: '',
    imageUrl: '',
    categoryId: ''
  })

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const handleChangeTextArea = (event: React.FocusEvent<HTMLTextAreaElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const handleEditorChange = (content): void => {
    setArticle({ ...article, content })
    console.log(article.content)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    return null
  }

  const data = [{
    label: 'Internet das Coisas',
    value: 'searchme',
    children: [
      {
        label: 'Perceptores',
        value: 'searchmetoo',
        children: [
          {
            label: 'RFID',
            value: 'anonymous'
          }
        ]
      }, {
        label: 'Borda',
        value: 'searchmetoo'
      }, {
        label: 'Nuvem',
        value: 'searchmetoo'
      }

    ]
  }, {
    label: 'Sistemas Embarcados',
    value: '2',
    children: [
      {
        label: 'Eletrônica Digital',
        value: '2',
        children: [
          {
            label: 'Linguagem C/C++',
            value: '2'
          }
        ]
      }
    ]
  }]

  const onChange = (currentNode, selectedNodes): void => {
    console.log('onChange::', currentNode, selectedNodes)
  }

  const onAction = (node, action): void => {
    console.log('onAction::', action, node)
  }

  const onNodeToggle = (currentNode): void => {
    console.log('onNodeToggle::', currentNode)
  }

  return (
    <>
      <PageTitle title='Adicionar Artigo'/>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <div className={Styles.row}>
          <InputGroup onChange={handleChange} title={errors.titleError} type="text" name="title" span="Título do Artigo (máx: 100 caracteres):" placeholder="Digite o título do artigo" />
        </div>
        <div className={Styles.row}>
          <TextAreaGroup className={Styles.bigInput} onChange={handleChangeTextArea} title={errors.imageUrlError} name="description" span="Resumo do Artigo (máx: 200 caracteres):" placeholder="Digite um resumo do artigo"/>
        </div>
        <div className={Styles.row}>
          <InputGroup onChange={handleChange} title={errors.imageUrlError} type="text" name="imageUrl" span="Imagem de Capa (.jpg/.jpeg/.png):" placeholder="Digite o link de uma imagem para utilizar como capa para o artigo" />
        </div>
        <div className={Styles.categorySelect}>
          <label> Categorias do Artigo: </label>
          <DropdownTreeSelect
            data={data}
            texts={{ placeholder: 'Seleciona as categorias...', noMatches: 'Nenhuma categoria foi encontrada.' }}
            keepTreeOnSearch={true}
            keepChildrenOnSearch={true}
            onChange={onChange}
            onAction={onAction}
            onNodeToggle={onNodeToggle} />
        </div>
        <div className={Styles.editorWrap}>
          <span>Conteúdo: </span>
          <Editor
            value={article.content}
            onEditorChange={handleEditorChange}
            apiKey="l495arr170j5145uahyi08uteva47d4zgqgha0ex0cya9g6e"
            // initialValue="<p>Escreva aqui o conteúdo do artigo</p>"
            init={{
              skin: 'oxide-dark',
              content_css: 'dark',
              resize: true,
              height: 500,
              menubar: true,
              image_caption: true,
              a11y_advanced_options: true,
              plugins: [
                'advlist autolink lists link image imagetools charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
                'autosave fullpage emoticons hr'
              ],
              toolbar: 'undo redo | bold italic underline strikethrough | fontselect | fontsizeselect | formatselect | forecolor backcolor removeformat | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent | charmap emoticons | image media table | codesample link anchor| hr | fullpage | help',
              toolbar_sticky: true,
              toolbar_mode: 'sliding',
              image_title: true,
              automatic_uploads: true,
              file_picker_types: 'file image media',
              file_picker_callback: function (cb, value, meta) {
                const input = document.createElement('input')
                input.setAttribute('type', 'file')
                input.setAttribute('accept', 'image/*')

                /*
                  Note: In modern browsers input[type="file"] is functional without
                  even adding it to the DOM, but that might not be the case in some older
                  or quirky browsers like IE, so you might want to add it to the DOM
                  just in case, and visually hide it. And do not forget do remove it
                  once you do not need it anymore.
                */

                input.onchange = function () {
                  // const file = this.files[0]

                  const reader = new FileReader()
                  reader.onload = function () {
                    /*
                      Note: Now we need to register the blob in TinyMCEs image blob
                      registry. In the next release this part hopefully won't be
                      necessary, as we are looking to handle it internally.
                    */
                    // const id = `blobid ${(new Date()).getTime()}`
                    // const blobCache = activeEditor.editorUpload.blobCache
                    // const base64 = reader.result.split(',')[1]
                    // const blobInfo = blobCache.create(id, file, base64)
                    // blobCache.add(blobInfo)

                    /* call the callback and populate the Title field with the file name */
                    // cb(blobInfo.blobUri(), { title: file.name })
                  }
                  // reader.readAsDataURL(file)
                }

                input.click()
              },
              content_style: 'body { background-color: #373e48; color: #cdd9e5; font-family: "Poppins", sans-serif; font-size:16px }'
            }} />
        </div>
        <div className={Styles.row}>
          <FormStatus isLoading={state.isLoading} mainError={errors.mainError} />
          <Button disabled={state.isFormInvalid} type="submit"> Adicionar </Button>
        </div>
      </form>
    </>
  )
}

export default AddArticle
