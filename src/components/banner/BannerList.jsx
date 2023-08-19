import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import { fetcher } from 'src/apiConfig/config'
import Banner from './Banner'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
const BannerList = () => {
  const [banners, setBanners] = useState([])
  const { data } = useSWR('https://api.themoviedb.org/3/movie/upcoming?api_key=5e6b78a5f9690b9cb75bb71bb40ab0b4', fetcher)
  useEffect(() => {
    if (data && data.results) setBanners(data?.results)
  }, [data])
  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <Swiper slidesPerView={'auto'} modules={[Autoplay, Pagination]} pagination={{ clickable: true }} autoplay={{ delay: 3000, disableOnInteraction: false }}>
        {banners.length > 0 &&
          banners.map((item) => (
            <SwiperSlide key={item.id}>
              <Banner banner={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  )
}

export default BannerList
