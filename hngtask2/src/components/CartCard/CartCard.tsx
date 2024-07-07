'use client';

import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { TiMinus } from 'react-icons/ti';

interface CartCardType {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

const CartCard = ({ id, title, price, quantity }: CartCardType) => {
  const [itemQuantity, setItemQuantity] = useState(0 | quantity);

  const handleIncrement = () => {
    setItemQuantity(itemQuantity + 1);
  };

  const handleDecrement = () => {
    setItemQuantity(itemQuantity - 1);
  };

  // const handleRemove = () => {
  //   removeItemFromCart(id);
  // };

  return (
    <div className="w-full border border-[#0000001A] p-[20px] rounded-[8px] flex items-center justify-between bg-white/10">
      <div className="w-full max-w-[569px] flex items-center gap-[40px]">
        <div className="w-[200px] h-[200px] border"></div>
        <div>
          <h3 className="md:text-[28px] text-[24px]">{title}</h3>
          <p className="md:text-[24px] text-[20px]">{price}</p>
          <div className="mt-6 gap-6 flex items-center">
            <button
              onClick={handleDecrement}
              className="w-[56px] h-[56px] rounded-[16px] text-white bg-primary flex items-center justify-center"
            >
              <TiMinus size={20} />
            </button>
            <p className="md:text-2xl text-xl">{quantity}</p>
            <button
              onClick={handleIncrement}
              className="w-[56px] h-[56px] rounded-[16px] text-white bg-primary flex items-center justify-center"
            >
              <FaPlus size={20} />
            </button>
          </div>
        </div>
      </div>
      <button
        className="w-[56px] h-[56px] rounded-[50%] border border-[#D30303] text-[#D30303] flex items-center justify-center"
        // onClick={handleRemove}
      >
        <RxCross2 size={20} />
      </button>
    </div>
  );
};

export default CartCard;
