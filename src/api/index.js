import Axios from 'axios'

const url = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY

export const fetchMovies = async (params) => {
  try {
    const res = await Axios({
      method: 'GET',
      url: `${url}?apiKey=${apiKey}&s=${params.search}&page=${params.page}`,
    })

    if (res.status !== 200) {
      return {
        data: null,
        status: res.status,
        statusText: res.statusText,
      }
    }

    return {
      data: res.data,
      status: res.status,
      statusText: res.statusText,
    }
  } catch (error) {
    return {
      data: null,
      status: error.status,
      statusText: error.statusText,
    }
  }
}

export const fetchMovieById = async (params) => {
  try {
    const res = await Axios({
      method: 'GET',
      url: `${url}?apiKey=${apiKey}&i=${params.id}`,
    })
    if (res.status !== 200) {
      return {
        data: null,
        status: res.status,
        statusText: res.statusText,
      }
    }
    return {
      data: res.data,
      status: res.status,
      statusText: res.statusText,
    }
  } catch (error) {
    return {
      data: null,
      status: error.status,
      statusText: error.statusText,
    }
  }
}
