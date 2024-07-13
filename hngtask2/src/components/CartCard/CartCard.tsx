'use client';

import useCart from '@/hooks/useCart';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { TiMinus } from 'react-icons/ti';

interface CartCardType {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const CartCard = ({ id, title, price, image }: CartCardType) => {
  const { increaseItemQuantity, decreaseItemQuantity, getItemQuantity, removeItemFromCart } =
    useCart();
  const quantity = getItemQuantity(id);

  return (
    <div className="w-full border border-[#0000001A] p-[20px] rounded-[8px] flex items-center justify-between bg-white/10">
      <div className="w-full max-w-[569px] flex flex-wrap items-center gap-[40px]">
        <div className="tablet:w-[200px] w-[150px] h-[150px] tablet:h-[200px] border">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${image}`}
            className="w-full h-full"
            alt={title}
            width={200}
            height={200}
          />
        </div>
        <div>
          <h3 className="tablet:text-3xl text-xl">{title}</h3>
          <p className="tablet:2xl text-lg">${price}</p>
          <div className="mt-6 gap-6 flex items-center">
            <button
              onClick={() => decreaseItemQuantity(id)}
              className="tablet:w-[56px] tablet:h-[56px] w-[46px] h-[46px] rounded-[16px] text-white bg-primary flex items-center justify-center"
            >
              <TiMinus size={20} />
            </button>
            <p className="md:text-2xl text-xl">{quantity}</p>
            <button
              onClick={() => increaseItemQuantity(id)}
              className="tablet:w-[56px] tablet:h-[56px] w-[46px] h-[46px] rounded-[16px] text-white bg-primary flex items-center justify-center"
            >
              <FaPlus size={20} />
            </button>
          </div>
        </div>
      </div>
      <button
        className="w-[56px] h-[56px] rounded-[50%] border border-[#D30303] text-[#D30303] flex items-center justify-center"
        onClick={() => removeItemFromCart(id)}
      >
        <RxCross2 size={20} />
      </button>
    </div>
  );
};

export default CartCard;
