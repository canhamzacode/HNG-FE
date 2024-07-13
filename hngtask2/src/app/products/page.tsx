'use client';

import React, { useEffect, useState } from 'react';
import { IoFilter } from 'react-icons/io5';
import getAllProducts from '@/utils/getAllProducts';
import { ProductType } from '@/types';
import Link from 'next/link';
import { ProductCard } from '@/components';

const AllProducts = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, totalPages } = await getAllProducts(currentPage);
      setProducts(data);
      setTotalPages(totalPages);
    };

    fetchProducts();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="tablet:mt-[120px] mt-[60px] container tablet:pl-20 md:p-10 p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-semibold">All Products</h3>
        <button className="flex items-center justify-center gap-3 w-[120px] h-[48px] rounded-xl border">
          <p>Filter</p>
          <IoFilter />
        </button>
      </div>
      <div className="w-full grid tablet:grid-cols-3 md:grid-cols-2 grid-cols-1 tablet:gap-8 gap-4 mt-[44px]">
        {products.map((data) => (
          <ProductCard
            key={data.id}
            id={data.id}
            title={data.title}
            price={data.price}
            description={data.description}
            image={data.image}
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 w-full h-[72px] rounded-xl border mt-[32px]">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
