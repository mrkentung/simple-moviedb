import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../layout'
import Section from '../../components/Section'
import { useSelector, useDispatch } from 'react-redux'
import { getDetailMovie } from '../../store/actions'

const Detail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const moviesById = useSelector((state) => state.moviesById)

  useEffect(() => {
    dispatch(getDetailMovie({ id: id }))
  }, [dispatch, id])

  console.log(moviesById)

  return (
    <Layout>
      <Section title="Detail Movie" backButton={true}>
        {moviesById && moviesById.data ? (
          <div className="h-auto">
            <div className="rounded mb-5">
              <img
                className="rounded mb-4 w-full"
                alt={moviesById.data.Title}
                src={moviesById.data.Poster}
              />
              <h2 className="text-xl font-semibold mb-2">
                {moviesById.data.Title}
              </h2>
            </div>
            <div className="flex justify-between text-sm mb-2 p-2">
              <p>Director</p>
              <p>{moviesById.data.Director}</p>
            </div>
            <div className="flex justify-between text-sm bg-gray-100 p-2">
              <p>Genres</p>
              <p>{moviesById.data.Genre}</p>
            </div>
            <div className="flex justify-between text-sm p-2">
              <p>Year</p>
              <p>{moviesById.data.Year}</p>
            </div>
            <div className="flex justify-between text-sm bg-gray-100 p-2">
              <p>Released</p>
              <p>{moviesById.data.Released}</p>
            </div>
            <div className="flex justify-between text-sm p-2">
              <p>Language</p>
              <p>{moviesById.data.Language}</p>
            </div>
            <div className="flex justify-between text-sm bg-gray-100 p-2">
              <p>IMDB Rating</p>
              <p>{moviesById.data.imdbRating}</p>
            </div>
            <div className="flex justify-between text-sm p-2 mb-4">
              <p>IMDB Votes</p>
              <p>{moviesById.data.imdbVotes}</p>
            </div>
            <div className="flex flex-col p-2">
              <p className="font-semibold mb-4">Plot</p>
              <p>{moviesById.data.Plot}</p>
            </div>
          </div>
        ) : (
          <p>Detail not found</p>
        )}
      </Section>
    </Layout>
  )
}

export default Detail
