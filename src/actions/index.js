import moment from 'moment';

export const loadingError = bool => (
  {
    type: 'LOADING_ERROR',
    hasErrored: bool
  }
)

export const loadingInProgress = bool => (
  {
    type: 'LOADING_IN_PROGRESS',
    isLoading: bool
  }
)

export const loadingSearch = articlesByWord => (
  {
    type: 'LOADING_SEARCH',
    articlesByWord
  }
)

export const loadingCategory = articlesByCategory => (
  {
    type: 'LOADING_CATEGORY',
    articlesByCategory
  }
)

export const clearRepos = () => (
  {
    type: 'CLEAR_ARTICLES'
  }
)

export const getSearch = word => {
  return dispatch => {
    dispatch(clearRepos())

    dispatch(loadingError(false))

    dispatch(loadingInProgress(true))

    fetch(`https://api.canillitapp.com/search/${word}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(loadingInProgress(false))

        return response
      })
      .then((response) => response.json())
      .then((articlesByWord) => dispatch(loadingSearch(articlesByWord.slice(0,10))))
      .catch(() => dispatch(loadingError(true)))
  }
}

export const getCategory = categoryId => {
  return dispatch => {

    dispatch(loadingError(false))

    dispatch(loadingInProgress(true))

    const today = moment().locale("es").format("YYYY-MM-DD");

    let url = "";

    if(categoryId !== 0) {
      url = `https://api.canillitapp.com/news/category/${categoryId}`;
    } else if(categoryId === 0 || categoryId ===null) {
      url = `https://api.canillitapp.com/latest/${today}`
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(loadingInProgress(false))
        
        return response
      })
      
      .then((response) => response.json())
      .then((articlesByCategory) => {
        return dispatch(loadingCategory(articlesByCategory.slice(0,10))
        )})
      .catch(() => dispatch(loadingError(true)))
  }
}



