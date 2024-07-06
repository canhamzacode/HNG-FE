'use client';

import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { TiMinus } from 'react-icons/ti';

interface CarrCardType {
  title: string;
  price: string;
  quantity: number;
}

const CartCard = ({ title, price, quantity }: CarrCardType) => {
  const [amount, setAmount] = useState(quantity | 1);

  const handleIncrement = () => {
    setAmount(amount + 1);
  };

  const handleDecrement = () => {
    setAmount(amount <= 1 ? 1 : amount - 1);
  };

  return (
    <div className="w-full border border-[#0000001A] p-[20px] rounded-[8px] flex items-center justify-between bg-slate-200">
      <div className="w-full max-w-[569px] flex items-center gap-[40px]">
        <div className="w-[200px] h-[200px] bg-[#828282]"></div>
        <div>
          <h3 className="text-[28px]">{title}</h3>
          <p className="text-[24px]">{price}</p>
          <div className="mt-6 gap-6 flex items-center">
            <button
              onClick={handleIncrement}
              className="w-[56px] h-[56px] rounded-[16px] text-white bg-[#3B2B2B] flex items-center justify-center"
            >
              <FaPlus size={20} />
            </button>
            <p className="text-2xl">{amount}</p>
            <button
              onClick={handleDecrement}
              className="w-[56px] h-[56px] rounded-[16px] text-white bg-[#3B2B2B] flex items-center justify-center"
            >
              <TiMinus size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="w-[56px] h-[56px] rounded-[50%] border border-black flex items-center justify-center">
        <RxCross2 size={20} />
      </div>
    </div>
  );
};

export default CartCard;
