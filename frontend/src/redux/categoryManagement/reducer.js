import  { SET_CATEGORIES } from './constants'

const initialState = {
  categoryList: [{}],
}

const initialAction = ''

const categoryManagementReducer = (state=initialState, action=initialAction) => {
  switch (action.type) {
  case SET_CATEGORIES:
    return {
      ...state,
      categoryList: [...action.categories]
    }
  default:
    return {...state}
  }
}

export default categoryManagementReducer
