import { Urbanist } from 'next/font/google';
import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { MdFacebook } from 'react-icons/md';

const urbanist = Urbanist({ subsets: ['latin'] });
const footerData = [
  'About us',
  'Customer Reviews',
  'FAQ’s',
  'Products',
  'Contact us',
  'Chat Support'
];

const Footer = () => {
  return (
    <div className="w-full mt-8 md:py-[130px] py-[60px] bg-primary text-white">
      {/* <div className="tablet:px-20 px-10 container grid tablet:grid-cols-[200px,1fr,300px] gap-8"> */}
      <div className="tablet:px-20 sm:px-10 px-5 container flex md:flex-row flex-col md:items-center items-start justify-between gap-8">
        <div className="flex items-center">
          <p className={`${urbanist.className} font-black text-2xl`}>
            Dynamic <span className="font-medium">fashion</span>
          </p>
        </div>
        <div className="grid tablet:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-[48px] md:gap-y-[36px] gap-5">
          {footerData.map((data) => (
            <p key={data}>{data}</p>
          ))}
        </div>
        <div className="flex items-center tablet:justify-end justify-start gap-4">
          <MdFacebook size={25} />
          <FaTiktok size={25} />
          <FaInstagram size={25} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
