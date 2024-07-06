'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './swipperwrapper.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

type SwipperWrapperTypes = {
  children: React.ReactNode;
};

const SwipperWrapper = ({ children }: SwipperWrapperTypes) => {
  return (
    <div className="mt-[44px] relative overflow-hidden">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        pagination={{ clickable: true }}
        modules={[Navigation]}
        style={{ overflow: 'hidden' }}
        className="mySwiper overflow-hidden"
        breakpoints={{
          320: {
            slidesPerView: 1
          },
          640: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        }}
      >
        {children}
      </Swiper>
      <div className="swiper-button-prev">
        <FaAngleLeft />
      </div>
      <div className="swiper-button-next">
        <FaAngleRight />
      </div>
    </div>
  );
};

export default SwipperWrapper;
