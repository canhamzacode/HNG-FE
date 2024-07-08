'use client';

import React, { useState } from 'react';
import { FaBars, FaUser } from 'react-icons/fa';
import { Urbanist } from 'next/font/google';
import { CiSearch } from 'react-icons/ci';
import { IoMdCart } from 'react-icons/io';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import './navbar.css';
import useCart from '@/hooks/useCart';

const urbanist = Urbanist({ subsets: ['latin'] });

type MenuItem = {
  name: string;
  path: string;
  exists?: boolean;
};

const menuItems: MenuItem[] = [
  { name: 'Home', path: '/', exists: true },
  { name: 'Products', path: '/products', exists: false },
  { name: 'Cart', path: '/cart', exists: true },
  { name: 'Favourites', path: '/favourites', exists: false },
  { name: 'Contact us', path: '/contact', exists: false },
  { name: 'Chat support', path: '/chat-support', exists: false }
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cartItems } = useCart();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = (to: string) => {
    router.push(to);
  };

  return (
    <div className="bg-headerBg relative">
      <div className="container h-[96px] tablet:px-20 sm:px-10 px-5">
        <div className="w-full flex items-center justify-between h-full gap-3">
          <div className="flex items-center md:gap-9 gap-4">
            <button onClick={toggleMenu}>
              <FaBars size={20} />
            </button>
            <Link
              href="/"
              className={`${urbanist.className} text-primary/90 font-black md:text-2xl text-xl`}
            >
              Dynamic fashion
            </Link>
          </div>
          <div className="md:flex hidden items-center tablet:w-[340px] w-auto p-4 rounded-md gap-3 border">
            <CiSearch size={20} />
            <input
              type="text"
              className="w-full border-none outline-none h-[24px] bg-transparent"
              placeholder="Search products e.g Textured shirts"
            />
          </div>
          <div className="flex items-center justify-between tablet:gap-11 gap-6">
            <div className="flex items-center tablet:gap-8 gap-4">
              <button
                onClick={() => navigate('/')}
                className="w-[52px] h-[52px] bg-black rounded-[50%] text-white flex items-center justify-center"
              >
                <FaUser size={20} />
              </button>
              <button
                onClick={() => navigate('/cart')}
                className="w-[52px] h-[52px] bg-white rounded-[50%] border-2 border-black flex items-center justify-center relative"
              >
                <IoMdCart size={22} />
                <span className="absolute right-[10px] top-3 text-xs w-4 h-4 rounded-[50%] bg-[#860D0D] text-white">
                  {cartItems.length}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute z-30 w-[297px] px-5 pt-20 bg-white rounded-[8px] pb-[133px] menue">
          <ul className="flex flex-col gap-8 ">
            {menuItems.map((item) => (
              <li
                onClick={toggleMenu}
                key={item.path}
                className={
                  item.exists && pathname === item.path
                    ? 'text-primary pl-3 border-l-4 border-l-primary'
                    : ''
                }
              >
                {item.exists ? (
                  <Link href={item.path}>
                    {item.name}
                    {item.name === 'Cart' && <span className="text-primary ml-2">4 items</span>}
                  </Link>
                ) : (
                  <span>{item.name}</span>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-[58px] flex gap-3 items-center">
            <button className="w-[52px] h-[52px] bg-black rounded-[50%] text-white flex items-center justify-center">
              <FaUser size={20} />
            </button>
            <p>Sign in</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
