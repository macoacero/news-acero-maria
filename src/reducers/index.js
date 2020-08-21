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

const articlesByWord = (state = [], action) => {
  debugger
  switch (action.type) {
    case 'LOADING_SEARCH':
      return action.articles
    case 'CLEAR_ARTICLES':
      return []
    default:
      return state
  }
}

const articleByCategory = (state = [], action) => {
  switch (action.type) {
    case 'LOADING_CATEGORY':
      return action.articles
    default:
      return state
  }
}

export default combineReducers({
  articlesByWord,
  articleByCategory,
  loadingError,
  loadingInProgress
})
