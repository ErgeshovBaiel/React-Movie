import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import movieService from '../../service/movieServie';
import { useNavigate } from 'react-router-dom';

const MovieFilter = () => {
  const {  t , i18n } = useTranslation();
  const navigate = useNavigate();
  const [activeBtn, setActiveBtn] = useState(null);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const filterNames = [
    t("New"),
    t("Popular"),
    t("Watch Now"),
    t("Recommendations"),
    t("Top 10"),
    t("Coming soon on Cinemax")
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    fetchMovies(filterNames[0]);
    setActiveBtn(filterNames[0]);
  }, [i18n.language]);

  const fetchMovies = (item) => {
    setIsLoading(true);

    if (item === t('New')) {
      movieService.fetchNewMovie(i18n.language).then(res => {
        setMovies(res.results);
        setIsLoading(false);
      });
    } else if (item === t('Popular')) {
      movieService.fetchPopularMovies(i18n.language).then(res => {
        setMovies(res.results);
        setIsLoading(false);
      });
    } else if (item === t('Watch Now')) {
      movieService.fetchMovieNowWatching(i18n.language).then(res => {
        setMovies(res.results);
        setIsLoading(false);
      });
    } else if (item === t('Top 10')) {
      movieService.fetchMovieTopRated(i18n.language).then(res => {
        setMovies(res.results);
        setIsLoading(false);
      });
    } else if (item === t('Coming soon on Cinemax')) {
      movieService.fetchMovieUpComing(i18n.language).then(res => {
        setMovies(res.results);
        setIsLoading(false);
      });
    }
  };

  const handleOnClick = (item) => {
    setActiveBtn(item);
    fetchMovies(item);
  };

  const formatVoteAverage = (voteAverage) => {
    return voteAverage.toFixed(1);
  };

  return (
    <div className='pb-[80px]'>
      <div className='app-container flex gap-[75px] items-center px-[75px] rounded-[10px] bg-[#1A1A1A] text-white'>
        {filterNames.map((item, index) => {
          const activeClass = item === activeBtn ? 'border-b border-[red]' : '';
          return (
            <p
              onClick={() => handleOnClick(item)}
              className={`${activeClass} cursor-pointer py-[22px]`}
              key={index}
            >
              {item}
            </p>
          );
        })}
      </div>

      <div className='app-container pt-20 relative'>
        {isLoading ? (
          <h3 className='text-white'>Loading...</h3>
        ) : (
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next'
            }}
            spaceBetween={40}
            slidesPerView={windowWidth < 640 ? 1 : windowWidth < 1024 ? 2 : 4}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
          >
            {movies.map(film => {
              const imgUrl = 'https://image.tmdb.org/t/p/original/';
              return (
                <SwiperSlide key={film.id}>
                  <div
                    onClick={() => {
                      navigate(`/movie-detail/${film.id}`);
                    }}
                    className='flex flex-col items-center justify-center'
                  >
                    <button className='absolute text-white mb-[372px] rounded-bl-[5px] mr-32 rounded-br-[5px] w-[35px] h-[35px] bg-[#EF4234]'>
                      {formatVoteAverage(film.vote_average)}
                    </button>

                    <img
                      className='rounded-[10px] cursor-pointer'
                      width='225'
                      height='300'
                      src={imgUrl + film.poster_path}
                      alt={film.title}
                    />
                    <h2 className='text-white mt-5 text-[17px] font-medium'>
                      {film.title}
                    </h2>
                    <h3 className='text-white'>
                      {film.release_date.slice(0, 4)}
                    </h3>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}

        <div className='swiper-button-prev'></div>
        <div className='swiper-button-next'></div>
      </div>
    </div>
  );
};

export default MovieFilter;