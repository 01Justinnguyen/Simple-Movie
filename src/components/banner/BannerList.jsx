import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import { fetcher } from 'src/apiConfig/config'
import Banner from './Banner'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import BannerSkeleton from 'src/components/loading/BannerSkeleton'
const BannerList = () => {
  const [banners, setBanners] = useState([])
  const { data, error } = useSWR('https://api.themoviedb.org/3/movie/upcoming?api_key=5e6b78a5f9690b9cb75bb71bb40ab0b4', fetcher)
  const isLoading = !data && !error
  useEffect(() => {
    if (data && data.results) setBanners(data?.results)
  }, [data])

  return (
    <>
      {isLoading && (
        <section className="banner h-[500px] page-container mb-20 overflow-hidden">
          <Swiper slidesPerView={'auto'} modules={[Autoplay, Pagination]} pagination={{ clickable: true }} autoplay={{ delay: 3000, disableOnInteraction: false }}>
            {new Array(5).fill(0).map((item, idx) => (
              <SwiperSlide key={idx}>
                <BannerSkeleton />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      {!isLoading && (
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
      )}
    </>
  )
}

export default BannerList
