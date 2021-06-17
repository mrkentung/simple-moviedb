const initialState = {
    data: [],
    totalResult: null,
    isLoading: true,
}
  
const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LIST_MOVIES':
            state.data = state.data.concat(action.data.Search)
            state.totalResult = parseInt(action.data.totalResults)
            state.isLoading = false
            return { ...state }
        default:
            return { ...state }
    }
}

export default moviesReducer
  