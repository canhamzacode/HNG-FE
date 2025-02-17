'use client';

import useCart from '@/hooks/useCart';
import Image from 'next/image';
import React from 'react';
import { FaAngleRight, FaHeart, FaPlus } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';
import { TiMinus } from 'react-icons/ti';
import './productcard.css';

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

const ProductCard = ({ id, title, price, description, image }: ProductCardProps) => {
  const {
    addItemToCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    isItemInCart,
    getItemQuantity
  } = useCart();
  const itemInCart = isItemInCart(id);
  const quantity = getItemQuantity(id);

  const handleAddToCart = () => {
    addItemToCart({ id, title, price, description, quantity: 1, image: image });
  };

  return (
    <div className="w-full rounded-b-[8px] border">
      <div className="relative h-[276px] rounded-[4px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${image}`}
          className="w-full h-full"
          alt={title}
          width={400}
          height={276}
        />
        <button className="absolute w-[48px] h-[48px] bg-primary favorite-shadow rounded-[50%] right-[19px] top-[20px] flex items-center justify-center text-white">
          <FaHeart size={25} />
        </button>
      </div>
      <div className="px-[18px] py-5 grid gap-6">
        <div>
          <h4 className="md:text-3xl text-2xl font-semibold truncate-2-lines">{title}</h4>
          <h5 className="md:text-2xl text-xl font-semibold mt-1">${price}</h5>
          <div className="flex items-center gap-4  mt-3">
            <p className="font-medium text-base">
              {description.length > 100
                ? `${description.slice(0, 100)}...`
                : description ||
                  'This is a short explanation that discusses about the product in this...'}
            </p>
            <button>
              <FaAngleRight size={20} />
            </button>
          </div>
        </div>
        {itemInCart ? (
          <div className="flex items-center gap-4">
            <button
              onClick={() => decreaseItemQuantity(id)}
              className="w-[56px] h-[56px] rounded-[16px] text-white bg-primary flex items-center justify-center"
            >
              <TiMinus size={20} />
            </button>
            <p className="text-2xl">{quantity}</p>
            <button
              onClick={() => increaseItemQuantity(id)}
              className="w-[56px] h-[56px] rounded-[16px] text-white bg-primary flex items-center justify-center"
            >
              <FaPlus size={20} />
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="h-[56px] bg-primary text-white flex items-center justify-center gap-4 rounded-lg"
          >
            <IoMdCart size={22} />
            <p>Add to cart</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
