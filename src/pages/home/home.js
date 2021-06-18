import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import {
  getMovieLists,
  getListMoviesBySearch,
} from '../../store/actions'
import Layout from '../../layout'
import ListMovies from './listMovies'
import ModalPoster from '../../components/Modal-Poster'

const Home = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const [moviePoster, setMoviePoster] = useState()
  const [pageMoviesSearch, setPageMoviesSearch] = useState(1)
  const [isLoadingSearch, setIsLoadingSearch] = useState(false)
  const [keyword, setKeyword] = useState()
  const movies = useSelector((state) => state.movies)
  const moviesBySearch = useSelector((state) => state.moviesBySearch)
  let [showPoster, setShowPoster] = useState(false)

  useEffect(() => {
    dispatch(getMovieLists({ search: 'batman', page: 1 }))
  }, [dispatch])

  useEffect(() => {
    if (keyword) {
      dispatch(
        getListMoviesBySearch({ type: 'CLEAR_MOVIES_BY_SEARCH' }),
      )
      setIsLoadingSearch(true)
      const delayBounce = setTimeout(() => {
        if (keyword.length >= 3) {
          dispatch(
            getListMoviesBySearch({ search: keyword, page: 1 }),
          )
        } else {
          dispatch(
            getListMoviesBySearch({ type: 'CLEAR_MOVIES_BY_SEARCH' }),
          )
        }
        setIsLoadingSearch(false)
      }, 2000)
      return () => clearTimeout(delayBounce)
    } else {
      dispatch(
        getListMoviesBySearch({ type: 'CLEAR_MOVIES_BY_SEARCH' }),
      )
    }
  }, [keyword, dispatch])

  const handleScroll = (e, type) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop ===
      e.target.clientHeight
    if (bottom) {
      if (type === 'movies') {
        if (movies.data.length < movies.totalResult) {
          dispatch(
            getMovieLists({ search: 'batman', page: page + 1 }),
          )
          setPage((page) => page + 1)
        }
      } else {
        if (moviesBySearch.data.length < moviesBySearch.totalResult) {
          dispatch(
            getListMoviesBySearch({
              search: keyword,
              page: pageMoviesSearch + 1,
            }),
          )
          setPageMoviesSearch(
            (pageMoviesSearch) => pageMoviesSearch + 1,
          )
        }
      }
    }
  }

  const handleClickImage = (val) => {
    setShowPoster((showPoster) => !showPoster)
    setMoviePoster(movies.data[val].Poster)
  }

  const handleClickTitle = (val) => {
    history.push({
      pathname: `/movie/${val}`,
    })
  }

  return (
    <Layout handleScroll={(e) => handleScroll(e, 'movies')}>
      <ListMovies
        list={movies}
        handleClickTitle={(val) => handleClickTitle(val)}
        handleClickImage={(val) => handleClickImage(val)}
        searchSuggestions={moviesBySearch}
        searchOnChange={(e) => setKeyword(e.target.value)}
        isLoadingSearch={isLoadingSearch}
      />
      <ModalPoster
        isOpen={showPoster}
        imgUrl={moviePoster}
        handleClose={() => setShowPoster((showPoster) => !showPoster)}
      />
    </Layout>
  )
}

export default Home
