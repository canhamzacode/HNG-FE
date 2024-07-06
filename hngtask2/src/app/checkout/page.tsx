import React from 'react';

const Checkout = () => {
  return (
    <div className="container tablet:px-20 px-10">
      <div className="mt-[88px]">
        <h3 className="text-[32px] font-medium">Payment</h3>
      </div>
      <div className="w-full rounded-[8px] mt-[44px] p-10 bg-black text-white">
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
      </div>
      <form action="" className="w-full grid gap-[42px] mt-[144px]">
        <div className="grid grid-cols-[738px,1fr] gap-5">
          <div className="grid gap-6">
            <label htmlFor="name" className="text-[24px]">
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
            <label htmlFor="name" className="text-[24px]">
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
            <label htmlFor="name" className="text-[24px]">
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
            <label htmlFor="name" className="text-[24px]">
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
          <button className="max-w-[582px] w-full rounded-lg h-[100px] bg-[#555454] text-white mx-auto">
            <p>Pay $102,000</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
