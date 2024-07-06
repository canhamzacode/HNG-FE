import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';
import './productcard.css';
import Image from 'next/image';

type ProductCardProps = {
  title: string;
  price: string;
  description: string;
};

const ProductCard = ({ title, price, description }: ProductCardProps) => {
  return (
    <div className="w-full rounded-b-[8px] border ">
      <div className="relative h-[276px] rounded-[4px] bg-[#828282]">
        <button className="absolute w-[48px] h-[48px] bg-[#A39B9B] favorite-shadow rounded-[50%] right-[19px] top-[20px] flex items-center justify-center">
          <Image src="/love.svg" alt="heart" width={20} height={20} />
        </button>
      </div>
      <div className="px-[18px] py-5 grid gap-6">
        <div>
          <h4 className="text-3xl font-semibold">{title}</h4>
          <h5 className="text-2xl font-semibold mt-1">{price}</h5>
          <div className="flex items-center gap-4  mt-3">
            <p className="font-medium text-base">
              {description.length > 100 ? `${description.slice(0, 100)}...` : description}
            </p>
            <button>
              <FaAngleRight size={20} />
            </button>
          </div>
        </div>
        <button className="h-[56px] bg-[#828282] text-white flex items-center justify-center gap-4 rounded-lg">
          <IoMdCart size={22} />
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
