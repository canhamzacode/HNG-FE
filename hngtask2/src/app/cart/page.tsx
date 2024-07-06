import { CartCard } from '@/components';
import React from 'react';
import { CiCreditCard1 } from 'react-icons/ci';

const cartItems = [
  {
    title: 'Textured knit T-shirt',
    price: '$25,000',
    quantity: 4
  },
  {
    title: 'Textured knit T-shirt',
    price: '$25,000',
    quantity: 4
  },
  {
    title: 'Textured knit T-shirt',
    price: '$25,000',
    quantity: 4
  },
  {
    title: 'Textured knit T-shirt',
    price: '$25,000',
    quantity: 4
  }
];

const Cart = () => {
  return (
    <div className="container tablet:px-20 px-10">
      <div className="mt-[88px]">
        <h3 className="text-[32px] font-medium">Cart 4 items added</h3>
      </div>
      <div className="grid tablet:grid-cols-[1fr,425px] grid-cols-1 gap-[37px] mt-11">
        <div className="w-full grid gap-11">
          {cartItems.map((item, index) => (
            <CartCard key={index} title={item.title} price={item.price} quantity={item.quantity} />
          ))}
        </div>
        <div className="w-full">
          <div className="w-full text-white bg-black py-[48px] px-[20px] rounded-[8px] flex flex-col gap-[40px]  text-2xl">
            <h3 className="text-[32px]">Summary</h3>
            <div className="grid gap-7">
              <div className="flex justify-between items-center">
                <p>Sub Total</p>
                <p className="font-medium">$100,000</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Delivery fee</p>
                <p className="font-medium">Free</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Tax</p>
                <p className="font-medium">$2.00</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-[56px]">
              <p>Total</p>
              <p className="font-medium">$102,000</p>
            </div>
            <button className="mt-[213px] h-[56px] flex items-center justify-center gap-3 bg-[#555454] rounded-[8px]">
              <CiCreditCard1 size={30} />
              <p className="text-2xl">Pay $102,000</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
