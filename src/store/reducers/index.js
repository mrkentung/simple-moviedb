import moviesReducer from './movies'
import moviesByIdReducer from './movie-detail'
import moviesBySearchReducer from './movie-search'
import { combineReducers } from 'redux'

const combinedReducers = combineReducers({
  movies: moviesReducer,
  moviesById: moviesByIdReducer,
  moviesBySearch: moviesBySearchReducer,
})

export default combinedReducers
