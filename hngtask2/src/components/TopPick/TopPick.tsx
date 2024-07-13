'use client';

import React, { useEffect, useState } from 'react';
import { ProductCard } from '../ProductCard';
import { SwiperSlide } from 'swiper/react';
import { SwipperWrapper } from '../SwipperWrapper';
import { ProductType } from '@/types';
import getAllProducts from '@/utils/getAllProducts';

const TopPick = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await getAllProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="tablet:mt-[120px] mt-[60px] container tablet:pl-20 md:p-10 p-5">
      <h3 className="text-3xl font-semibold">Top picks for you</h3>
      <SwipperWrapper>
        {products.slice(0, 5).map((data) => (
          <SwiperSlide key={data.id}>
            <ProductCard
              id={data.id}
              title={data.title}
              price={data.price}
              description={data.description}
              image={data.image}
            />
          </SwiperSlide>
        ))}
      </SwipperWrapper>
    </div>
  );
};

export default TopPick;
