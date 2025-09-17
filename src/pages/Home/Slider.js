import React from 'react';
import './Slider.scss';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import SlideItem  from './SlideItem.js';
import {slide} from '../../components/icons/data/Datas.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';


function Slider() {
  return (
    <article className='Slides'>
      <div className='inner'>
        <div className='bgImg'></div>
        <h2 >GOODS</h2>
      </div>

      <Swiper 
        className='goodsSwiper'
        modules={[ Pagination, Autoplay, EffectCoverflow]} 
        centeredSlides={true}
        speed={800}
        pagination={{ clickable : true}}
        grabCursor={true}  
        simulateTouch={true}
        loop={true}
        slidesPerView={3}
        breakpoints={{
          0:{
            spaceBetween:30,
            slidesPerView:1,
          },
          768:{
            spaceBetween:30,
            slidesPerView:1,
          },
          1200:{
            spaceBetween:120,
            slidesPerView:3,
          },
        }}
        autoplay={{
          delay:4000,
          disableOnInteraction:false,
          pauseOnMouseEnter:true
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch:-100,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
      >
      { slide.map((item) => (
        <SwiperSlide key={item.id} className='SwiperSlide'>
          <SlideItem  item={item} />
        </SwiperSlide>
      ))}
      </Swiper>
    </article>
  )
}

export default Slider;