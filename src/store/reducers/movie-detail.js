const initialState = {
  data: null,
  isLoading: true,
}

const moviesByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIES_BY_ID':
      state.data = action.data
      state.isLoading = false
      return { ...state }
    default:
      return { ...state }
  }
}

export default moviesByIdReducer
