
import { useEffect, useState } from "react"
import movieService from "../../service/movieServie"
import Spinner from "../spinner/Spinner"
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from "swiper/modules";



const CategorySection = () => {
    const {  t , i18n } = useTranslation();
    const [category, setCategory] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        movieService.fetchMovieGenreList(i18n.language)
            .then(({ genres }) => {
                setCategory(genres)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [i18n.language])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="pb-[150px] text-white">
            <div className="app-container">
                <h3 className="w-[550px] h-[29px] font-[Montserrat] font-semibold text-xl">{t('film')}</h3>
                <p className="w-[421px] h-[52px] font-[Montserrat] font-normal text-base text-[#979797] mt-4">{t('film-P')}</p>
                <div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={90}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {category.map(item => {
                            return <SwiperSlide key={item.id}>
                              <div className="pt-[60px]">
                              <div className="app-container">
                                <div className="w-[310px] text-white  flex pl-[90px] items-start justify-center flex-col h-[170px] rounded-[10px] bg-[#1A1A1A]">
                                    <h3 className="text-[20px]">{item.name}</h3>
                                    <p className="text-[#EF4234]">{item.id} k+ {t('genres')}</p>
                                </div>
                              </div>
                              </div>
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default CategorySection

