import movieServie from '../../service/movieServie'
import { useQuery } from '@tanstack/react-query'
import Spinner from '../spinner/Spinner'
import VideoCard from '../../components/video-card/VideoCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useTranslation } from 'react-i18next';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'

const VideoSection = ({ id }) => {
  const { t } = useTranslation();
  const { data, isLoading } = useQuery({
    queryKey: ['videolar'],
    queryFn: () => movieServie.fetchMovieTrailers(id),
    select: data => data.results
  })

  if (isLoading) {
    return <Spinner />
  }

  console.log(data)

  return (
    <div className='app-container text-white pt-[120px]'>
      <h3 className="w-[131px] h-[29px] font-[Montserrat] text-[24px] font-semibold ml-[30px]">{t('The trailer')}</h3>
      <div className='h-[350px]'>
        <Swiper
          cssMode={true}
          navigation={false}
          pagination={false}
          mousewheel={true}
          keyboard={true}
          slidesPerView={3}
          spaceBetween={20}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className='mySwiper'
        >
          {data.map((video, index) => {
            return (
              <SwiperSlide key={video.id || index}>
                <div className=' flex gap-[30px] rounded-[20px]'>
                  <VideoCard key={video.id || index} videoKey={video.key} />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default VideoSection