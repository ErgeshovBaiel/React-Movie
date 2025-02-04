import { useState, createContext, useEffect } from 'react'
import movieService from '../../service/movieServie'
import { useTranslation } from 'react-i18next';


export const GENRES_CONTEXT = createContext({})

const GenreContext = ({ children }) => {
  const { t , i18n } = useTranslation()
  const [genres, setGenres] = useState([])

  useEffect(() => {
    movieService.fetchMovieGenreList(i18n.language).then(res => setGenres(res.genres))
  }, [i18n.language])

  const value = {
    genres // HomePage(UpComing), MovieDetail
  }
  return (
    <GENRES_CONTEXT.Provider value={value}>{children}</GENRES_CONTEXT.Provider>
  )
}

export default GenreContext
