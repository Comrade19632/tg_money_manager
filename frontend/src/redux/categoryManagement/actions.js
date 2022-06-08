import axios from 'axios'
import { toast } from 'react-toastify'

import { toastOnError } from 'utils/Utils'
import { SET_CATEGORIES } from './constants'

const URL = 'accountant/categories/'

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  categories,
})

export const getCategories = () => (dispatch) => {
  axios
    .get(URL)
    .then(response => dispatch(
      setCategories(response.data)))
    .catch(error => toastOnError(error.detail))
}

export const addCategory = (categoryTitle) => {
  const data = {
    'title': categoryTitle,
  }

  axios
    .post(URL, data,{json: data})
    .then(response => toast.success(
      `Категория "${response.data.title}"" успешно добавлена!`
    ))
    .catch(err => toastOnError(err))
}

export const deleteCategory = (categoryId) => {
  axios
    .delete(URL + categoryId)
    .then(response => {
      // eslint-disable-next-line
      console.log(response)
      toast.success('Категория успешно удалена')})
    .catch(error => toastOnError(error))
}
