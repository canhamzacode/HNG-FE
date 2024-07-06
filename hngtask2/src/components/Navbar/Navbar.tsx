import React from 'react';
import { FaBars, FaUser } from 'react-icons/fa';
import { Urbanist } from 'next/font/google';
import { CiSearch } from 'react-icons/ci';
import { IoMdCart } from 'react-icons/io';

const urbanist = Urbanist({ subsets: ['latin'] });

const Navbar = () => {
  return (
    <div className="container h-[96px] tablet:px-20 px-10">
      <div className="w-full flex items-center justify-between h-full gap-3">
        <div className="flex items-center gap-9">
          <button>
            <FaBars size={20} />
          </button>
          <p className={`tablet:flex hidden ${urbanist.className} font-black text-2xl`}>
            Dynamic <span className="font-medium">fashion</span>
          </p>
          <p className={`tablet:hidden flex ${urbanist.className} font-black text-2xl`}>
            D <span className="font-medium">f</span>
          </p>
        </div>
        <div className="flex items-center tablet:w-[440px] w-auto p-4 rounded-md gap-3 border">
          <CiSearch size={20} />
          <input
            type="text"
            className="w-full border-none outline-none h-[24px] bg-transparent"
            placeholder="Search products e.g Textured shirts"
          />
        </div>
        <div className="flex items-center justify-between tablet:gap-11 gap-6">
          <p>Contact us</p>
          <div className="flex items-center tablet:gap-8 gap-4">
            <button className="w-[52px] h-[52px] bg-black rounded-[50%] text-white flex items-center justify-center">
              <FaUser size={20} />
            </button>
            <button className="w-[52px] h-[52px] bg-white rounded-[50%] border-2 border-black flex items-center justify-center relative">
              <IoMdCart size={22} />
              <span className="absolute right-[12px] top-3 text-xs w-3 h-3 rounded-[50%] bg-black text-white">
                4
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
