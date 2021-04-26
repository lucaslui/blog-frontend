import React, { useEffect, useState } from 'react'
import ReactTable from 'react-table'

import Styles from './delete-article.scss'
import 'react-table/react-table.css'

import { PageTitle } from '@/presentation/components'
import axios from 'axios'

const DeleteArticle: React.FC = () => {
  // const columns = React.useMemo(
  //   () => [
  //     { Header: 'Column 1', accessor: 'col1' },
  //     { Header: 'Column 2', accessor: 'col2' }
  //   ], []
  // )

  const columns = React.useMemo(
    () => [
      { Header: '#', accessor: 'id' },
      { Header: 'Título', accessor: 'title' },
      { Header: 'Resumo', accessor: 'description' },
      { Header: 'Conteúdo', accessor: 'content' },
      { Header: 'Imagem', accessor: 'imageUrl' },
      { Header: 'Categoria', accessor: 'categoryId' }
    ], []
  )

  const [article, setArticle] = useState([{
    id: '',
    title: '',
    description: '',
    content: '',
    imageUrl: '',
    categoryId: ''
  }])

  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   rows,
  //   prepareRow
  // } = useTable(
  //   { columns, data },
  //   useFilters,
  //   useGroupBy,
  //   useSortBy,
  //   useExpanded,
  //   usePagination)

  useEffect((): void => {
    fetchData()
      .then((data) => setArticle(data))
      .catch((error) => console.log(error))
  }, [])

  const fetchData = async (): Promise<any> => {
    const result = await axios.get('https://espaco-de-conhecimento-backend.herokuapp.com/api/articles')
    return result.data
  }

  return (
    <>
      <PageTitle title='Adicionar Artigo' />
      <div className={Styles.deleteArticle}>
          <ReactTable
          data={article}
          columns={columns}
          showPagination={true}
          showPaginationTop={false}
          showPaginationBottom={true}
          showPageSizeOptions={true}
          pageSizeOptions= {[5, 10, 20, 25, 50, 100]}
          defaultPageSize= {20}
          minRows= {undefined} // controls the minimum number of rows to display - default will be `pageSize`
          // NOTE: if you set minRows to 0 then you get rid of empty padding rows BUT your table formatting will also look strange when there are ZERO rows in the table
          showPageJump= {true}
          collapseOnSortingChange= {true}
          collapseOnPageChange= {true}
          collapseOnDataChange= {true}
          freezeWhenExpanded= {false}
          sortable= {true}
          multiSort= {true}
          resizable= {true}
          filterable= {false}
          defaultSortDesc= {false}
          />
      </div>
    </>

  )
}

export default DeleteArticle
