'use client';

import useCart from '@/hooks/useCart';
import React, { useEffect, useState } from 'react';
import { FaCcVisa } from 'react-icons/fa';
import { RiMastercardFill, RiRemixRunFill } from 'react-icons/ri';

const chekoutOptions: React.JSX.Element[] = [
  <FaCcVisa key="visa" size={35} />,
  <RiMastercardFill key="mastercard" size={35} />,
  <RiRemixRunFill key="remix" size={35} />
];

const Checkout = () => {
  const { totalPrice } = useCart();
  const [tax, setTax] = useState(0);
  const [allCharges, setAllCharges] = useState(0);

  useEffect(() => {
    const calculatedTax = (10 / 100) * totalPrice;
    setTax(calculatedTax);
    setAllCharges(totalPrice + calculatedTax);
  }, [totalPrice]);

  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="container tablet:px-20 sm:px-10 px-5">
      <div className="mt-[88px]">
        <h3 className="text-[32px] font-medium">Payment</h3>
      </div>
      <div className="w-full rounded-[8px] mt-[44px] p-10 bg-primary text-white">
        <h3 className="text-[32px]">Summary</h3>
        <div className="grid gap-7">
          <div className="flex justify-between items-center">
            <p>Sub Total</p>
            <p className="font-medium">${totalPrice}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Delivery fee</p>
            <p className="font-medium">Free</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Tax</p>
            <p className="font-medium">${tax}</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-[56px]">
          <p>Total</p>
          <p className="font-medium">${allCharges}</p>
        </div>
      </div>
      <div className="flex flex-wrap md:justify-start justify-center items-center gap-4 mt-[129px]">
        {chekoutOptions.map((data, index) => (
          <button
            onClick={() => updateActiveIndex(index)}
            key={index}
            className={`w-[197px] h-[102px] rounded-lg flex items-center justify-center text-3xl ${activeIndex === index ? 'bg-primary text-white' : ' border'}`}
          >
            {data}
          </button>
        ))}
      </div>
      <form action="" className="w-full grid gap-[42px] mt-[144px]">
        <div className="grid tablet:grid-cols-[538px,1fr] grid-cols-1 gap-5">
          <div className="grid gap-6">
            <label htmlFor="name" className="tablet:text-2xl text-xl">
              Card holder name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full border text-white p-4 rounded-[8px] mt-2"
            />
          </div>
          <div className="grid gap-6">
            <label htmlFor="name" className="tablet:text-2xl text-xl">
              CVV
            </label>
            <input
              type="number"
              id="cvv"
              placeholder="1234"
              className="w-full border text-white p-4 rounded-[8px] mt-2"
            />
          </div>
          <div className="grid gap-6">
            <label htmlFor="name" className="tablet:text-2xl text-xl">
              Card number
            </label>
            <input
              type="number"
              id="cvv"
              placeholder="1234  5678  1111 2222"
              className="w-full border text-white p-4 rounded-[8px] mt-2"
            />
          </div>
          <div className="grid gap-6">
            <label htmlFor="name" className="tablet:text-2xl text-xl">
              Expiry date
            </label>
            <input
              type="number"
              id="expiryDate"
              placeholder="10/12/2025"
              className="w-full border text-white p-4 rounded-[8px] mt-2 placeholder:text-text"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" name="" id="" />
          <p>
            Save my payment details for future purposes. All payment data are secure and encrypted
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <button className="max-w-[582px] w-full rounded-lg h-[100px] bg-primary text-white mx-auto">
            <p>Pay $102,000</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
