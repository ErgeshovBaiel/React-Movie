import { useState, useEffect, useContext } from 'react';
import movieService from '../../service/movieServie';
import Spinner from '../spinner/Spinner';
import { GENRES_CONTEXT } from '../../components/context/GenreContext';
import Button from '../UI/Button/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import './UpComing.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'


const UpComing = () => {
  const { t , i18n } = useTranslation();
  const navigate = useNavigate()
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { genres } = useContext(GENRES_CONTEXT);

  useEffect(() => {
    setLoading(true);
    movieService
      .fetchMovieUpComing(i18n.language)
      .then((res) => setMovie(res.results.slice(0,5)))
      .catch((err) => console.error('Error fetching movies:', err))
      .finally(() => setLoading(false));
  }, [i18n.language]);

  if (loading) {
    return <Spinner />;
  }

  const imgUrl = 'https://image.tmdb.org/t/p/original/';

  return (
    <div className="mt-[30px]">
      <div className="h-[500px] app-container relative">
        <div className="custom-pagination2 absolute pr-[150px] bottom-[40px] z-10 flex flex-col gap-[10px]"></div>

        <Swiper
          direction={'vertical'}
          pagination={{
            el: '.custom-pagination2',
            clickable: true,
            renderBullet: (index, className) => {
              return `<div class="${className}"></div>`;
            },
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          className="mySwiper h-[500px]"
        >
          {movie.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                onClick={() => {
                  navigate(`/movie-detail/${item.id}`)
                }}
                className="movie-container w-[880px] h-[560px] ml-[190px]  bg-[#1a1a1a] text-white">
                <div className="flex">
                  <div className="ml-[-82px]">
                    <img
                      className="w-[300px] h-[400px] rounded-[10px] mt-[55px] object-cover"
                      src={imgUrl + item.poster_path}
                      alt={item.title}
                    />
                  </div>
                  <div className="w-[442px] h-[260px] ml-[95px] pt-[110px]">
                    <h2 className="font-[Montserrat] text-[36px] font-semibold mb-[15px]">
                      {item.title}
                      <span className="ml-[30px] text-[24px] font-medium">
                        {item.release_date.slice(0, 4)}
                      </span>
                    </h2>
                    <p className="flex gap-[20px] mb-[24px] font-[Montserrat] text-[16px]">
                      {genres
                        .filter((genre) => item.genre_ids.includes(genre.id))
                        .map((g) => (
                          <span className="text-[#EF4234]" key={g.id}>
                            {g.name}
                          </span>
                        ))}
                    </p>
                    <p className="line-clamp-3 text-[16px] mb-[30px]">
                      {item.overview}
                    </p>
                    <Button className="py-[5px] cursor-pointer px-[20px] font-[Montserrat] text-[16px] font-medium">
                    {t('see')}
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UpComing;

