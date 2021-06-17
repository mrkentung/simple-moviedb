const initialState = {
    data: [],
    totalResult: null,
    isLoading: true,
    response: null
  }
  
  const moviesBySearchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_LIST_MOVIES_BY_SEARCH':
        state.data = state.data.concat(action.data.Search)
        state.totalResult = parseInt(action.data.totalResults)
        state.isLoading = false
        state.response = action.data.Response
        return { ...state }
      case 'CLEAR_MOVIES_BY_SEARCH':
        state.data = []
        state.totalResult = null
        state.isLoading = false
        state.response = null
        return { ...state }
      default:
        return { ...state }
    }
  }
  
  export default moviesBySearchReducer
  