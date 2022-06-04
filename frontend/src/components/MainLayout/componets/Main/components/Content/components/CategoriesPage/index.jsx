import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { 
  addCategory, 
  getCategories, 
  deleteCategory 
} from 'redux/categoryManagement/actions'
import CashIcon from '../../../Sidebar/components/Nav/NavigationIcones/CashIcon'
import CategoryField from './CategoryField'
import style from './index.module.sass'

const CategoriesPage = () => {

  const dispatch = useDispatch()

  const {token, categoryList} = useSelector(state => ({
    token: state.auth.token,
    categoryList: state.categoryManagement.categoryList,
  }))

  const addNewCategory = () => {
    // eslint-disable-next-line
    const categoryTitle = prompt('Введите название категории')
    if (!categoryTitle) {
      return
    }
    addCategory(categoryTitle, token)
  }

  const onClickDelete = (categoryID) => {
    deleteCategory(categoryID)
  }

  useEffect(() => {
    dispatch(getCategories())
  }, [categoryList, dispatch])

  return (
    <section className={style.container}>
      <main className={style.main}>
        {categoryList.map(category => 
          <CategoryField 
            title={category.title} 
            key={category.id + category.title} 
            onClickDelete={() => onClickDelete(category.id)}
            icon={<CashIcon />} />
        )}
        <CategoryField 
          hasDeleteIcon={false}
          onClick={addNewCategory}
        />
      </main>
    </section>
  )
}

export default CategoriesPage
