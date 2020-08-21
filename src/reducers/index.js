import { combineReducers } from 'redux'

const loadingError = (state = false, action) => {
  switch (action.type) {
    case 'LOADING_ERROR':
      return action.hasErrored;
    default:
      return state;
  }
}

const loadingInProgress = (state = false, action) => {
  switch (action.type) {
    case 'LOADING_IN_PROGRESS':
      return action.isLoading;
    default:
      return state;
  }
}

const loadingSearch = (state = [], action) => {
  switch (action.type) {
    case 'LOADING_SUCCESS':
      return action.articles
    case 'CLEAR_REPOS':
      return []
    default:
      return state
  }
}

const loadingCategory = (state = [], action) => {
  switch (action.type) {
    case 'LOADING_CATEGORY':
      return action.articles
    default:
      return state
  }
}

export default combineReducers({
  loadingSearch,
  loadingCategory,
  loadingError,
  loadingInProgress
})