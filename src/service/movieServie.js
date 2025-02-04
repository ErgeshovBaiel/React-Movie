import axios from '../axios'

class MovieService {
  async fetchAllMovies (lng ) {
    try {
      const { data, status } = await axios.get('discover/movie?language=' + lng)
      if (status !== 200) {
        throw new Error('Failed fetching movie data')
      }
      return data
    } catch (err) {
      console.log(err)
    }
  }

  async fetchMovieById (id , lng) {
    try {
      const { data, status } = await axios.get(`/movie/${id}?language=` + lng)
      if (status !== 200) {
        throw new Error('Failed fetching movie info')
      }
      return data
    } catch (err) {
      console.log(err)
    }
  }
  async fetchMovieByName (movieName) {
    try {
      const { data, status } = await axios.get(`search/movie`, {
        params: {
          query: movieName,
          language: 'ru'
        }
      })
      if (!status === 200) {
        throw new Error('Error movie fetching movie genre list')
      }
      console.log(data)
      return data
    } catch (err) {
      console.error(err)
    }
  }

  async fetchMovieGenreList (lng) {
    try {
      const { data, status } = await axios.get('genre/movie/list?language=' + lng)
      if (status !== 200) {
        throw new Error('Failed fetching movie genre list')
      }
      return data
    } catch (error) {
      console.log(error)
    }
  }
  // Новинки
  async fetchNewMovie (lng) {
    try {
      const { data, status } = await axios.get(`trending/movie/week`, {
        params: {
          language: lng
        }
      })
      if (!status === 200) {
        throw new Error('Error movie fetching movie genre list')
      }
      console.log(data)
      return data
    } catch (err) {
      console.error(err)
    }
  }
  //Популярное
  async fetchPopularMovies (lng) {
    try {
      const { data, status } = await axios.get(`movie/popular`, {
        params: {
          language: lng
        }
      })
      if (!status === 200) {
        throw new Error('Error movie fetching  popular movie  list')
      }
      console.log(data)
      return data
    } catch (err) {
      console.error(err)
    }
  }
  //Смотрят сейчас
  async fetchMovieNowWatching (lng) {
    try {
      const { data, status } = await axios.get(`movie/now_playing`, {
        params: {
          language: lng
        }
      })
      if (!status === 200) {
        throw new Error('Error movie fetching  popular movie  list')
      }
      console.log(data)
      return data
    } catch (err) {
      console.error(err)
    }
  }
  // recomendate

  //Топ 10
  async fetchMovieTopRated (lng) {
    try {
      const { data, status } = await axios.get(`movie/top_rated`, {
        params: {
          language: lng
        }
      })
      if (!status === 200) {
        throw new Error('Error movie fetching  popular movie  list')
      }
      console.log(data)
      return data
    } catch (err) {
      console.error(err)
    }
  }
  //Скоро на Cinemax
  async fetchMovieUpComing (lng) {
    try {
      const { data, status } = await axios.get(`movie/upcoming`, {
        params: {
          language: lng
        }
      })
      if (!status === 200) {
        throw new Error('Error movie fetching  popular movie  list')
      }
      console.log(data)
      return data
    } catch (err) {
      console.error(err)
    }
  }

  async fetchMovieTrailers(id){
    try {
                const {data, status} = await axios.get(`movie/${id}/videos`,{
                    params: {
                        language: 'en'
                    }
                })
                if(!status === 200) {
                    throw new Error("Error movie fetching  popular movie  list")
                }
                console.log(data)
                return data
            } catch (err) {
                console.error(err)
            }
        }
    
}

const movieService = new MovieService()
export default movieService
