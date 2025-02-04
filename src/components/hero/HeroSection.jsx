import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import movieService from '../../service/movieServie';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import Spinner from '../spinner/Spinner';
import Button from '../UI/Button/Button';
import PlayIcon from '../../assets/play.svg';

const HeroSection = () => {
  const { t , i18n } = useTranslation();
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bgImage, setBgImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    movieService
      .fetchAllMovies(i18n.language)
      .then(res => {
        setFilms(res.results.slice(0, 5));
        setBgImage(res.results[0].backdrop_path);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [i18n.language]);

  if (loading) {
    return <Spinner />;
  }

  let imgUrl = 'https://image.tmdb.org/t/p/original/';

  return (
    <div
      className='max-w-[1300px] mx-auto bg-cover bg-center bg-no-repeat transition-opacity duration-500'
      style={{ backgroundImage: `url(${imgUrl}${bgImage})` }}
    >
      <div className='h-[700px] text-white'>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            type: 'bullets',
          }}
          mousewheel={true}
          keyboard={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className='mySwiper h-full bg-gradient-to-t from-[#040404] to-transparent'
          onSlideChange={swiper => {
            setBgImage(films[swiper.activeIndex]?.backdrop_path);
          }}
        >
          {films.map(item => {
            return (
              <SwiperSlide className='md:pt-[150px] pt-[50px]' key={item.id}>
                <div className='app-container'>
                  <h3 className='text-[40px] font-medium mb-[15px]'>
                    {item.title}
                  </h3>
                  <p className='w-[500px] font-medium line-clamp-3 mb-[30px] text-[18px]'>
                    {item.overview}
                  </p>
                  <Button
                    onClick={() => {
                      navigate(`movie-detail/${item.id}`);
                    }}
                    className={'py-[14px] px-[20px]'}
                  >
                    <span className='flex items-center gap-[10px]'>
                      <span className="w-[80px] h-[30px] font-Montserrat text-[16px] font-medium">{t('see')}</span>
                      <img src={PlayIcon} alt='' />
                    </span>
                  </Button>
                </div>
              </SwiperSlide>
            );
          })}
          <div className='custom-pagination pb-[100px] pl-[60px]'></div>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
