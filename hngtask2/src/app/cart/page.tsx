'use client';

import { CartCard } from '@/components';
import { productData } from '@/constants/data';
import useCart from '@/hooks/useCart';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { CiCreditCard1 } from 'react-icons/ci';

const Cart = () => {
  const { cartItems, totalPrice } = useCart();
  const [tax, setTax] = useState(0);
  const [allCharges, setAllCharges] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const calculatedTax = (10 / 100) * totalPrice;
    setTax(calculatedTax);
    setAllCharges(totalPrice + calculatedTax);
  }, [totalPrice]);

  const checkout = () => {
    router.push('/checkout');
  };

  return (
    <div className="container tablet:px-20 sm:px-10 px-5">
      <div className="mt-[88px]">
        <h3 className="tablet:text-3xl text-2xl font-medium">
          Cart {cartItems.length} item(s) added
        </h3>
      </div>
      <div className="flex tablet:flex-row flex-col gap-[30px] justify-between mt-11">
        <div>
          <div className="w-full grid gap-11">
            {cartItems.map((item, index) => (
              <CartCard
                id={item.id}
                key={index}
                title={item.title}
                price={item.price}
                quantity={item.quantity as number}
                image={item.image}
              />
            ))}
          </div>
        </div>
        {cartItems.length > 0 && (
          <div className="w-full max-w-[424px]">
            <div className="w-full text-white bg-primary py-[48px] px-[20px] rounded-[8px] flex flex-col gap-[40px] text-2xl">
              <h3 className="text-[32px]">Summary</h3>
              <div className="w-full grid gap-7">
                <div className="w-full flex justify-between items-center">
                  <p>Sub Total</p>
                  <p className="font-medium">${totalPrice}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Delivery fee</p>
                  <p className="font-medium">Free</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Tax</p>
                  <p className="font-medium">${tax.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-[56px]">
                <p>Total</p>
                <p className="font-medium">${allCharges.toFixed(2)}</p>
              </div>
              <button
                onClick={checkout}
                className="mt-[213px] h-[56px] flex items-center justify-center gap-3 bg-white text-primary rounded-[8px]"
              >
                <CiCreditCard1 size={30} />
                <p className="text-base">Pay ${allCharges.toFixed(2)}</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
