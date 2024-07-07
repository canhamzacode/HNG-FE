'use client';

import React from 'react';
import { ProductCard } from '../ProductCard';
import { SwiperSlide } from 'swiper/react';
import { SwipperWrapper } from '../SwipperWrapper';
import { productData } from '@/constants/data';

const TopPick = () => {
  return (
    <div className="tablet:mt-[120px] mt-[60px] container tablet:pl-20 md:p-10 p-5">
      <h3 className="text-3xl font-semibold">Top picks for you</h3>
      <SwipperWrapper>
        {productData.map((data) => (
          <SwiperSlide key={data.id}>
            <ProductCard
              id={data.id}
              title={data.title}
              price={data.price}
              description={data.description}
            />
          </SwiperSlide>
        ))}
      </SwipperWrapper>
    </div>
  );
};

export default TopPick;
