import React from 'react';
import { ProductCard } from '../ProductCard';
import { productData } from '@/constants/data';
import { IoFilter } from 'react-icons/io5';
import { FaAngleDown } from 'react-icons/fa';

const AllProducts = () => {
  return (
    <div className="tablet:mt-[120px] mt-[60px] container tablet:pl-20 p-10">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-semibold">All Products</h3>
        <button className="flex items-center justify-center gap-3 w-[120px] h-[48px] rounded-xl border">
          <p>Filter</p>
          <IoFilter />
        </button>
      </div>
      <div className="w-full grid tablet:grid-cols-3 md:grid-cols-2 grid-cols-1 tablet:gap-8 gap-4 mt-[44px]">
        {productData.map((data) => (
          <ProductCard
            key={data.id}
            title={data.title}
            price={data.price}
            description={data.description}
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 w-full h-[72px] rounded-xl border mt-[32px]">
        <p>See more</p>
        <FaAngleDown />
      </div>
    </div>
  );
};

export default AllProducts;
