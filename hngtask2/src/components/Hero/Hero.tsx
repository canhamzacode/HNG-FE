import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="w-full min-h-[304px] grid tablet:grid-cols-[1fr,0.5fr] grid-cols-1 gap-5">
      <div className="md:bg-custom-gradient bg-primary py-16 tablet:py-0 container overflow-hidden flex items-center relative justify-between tablet:px-20 sm:px-10 px-5">
        <div className="text-white flex flex-col gap-5 max-w-[449px] z-20 ">
          <h1 className="md:text-3xl text-2xl font-medium w-full">
            Everything T-shirt ( m & f ), you can get all of them here
          </h1>
          <p>
            Long sleeves, Turtle necks, Plains, loose, Vintage, oversized... We have them all,
            dynamically for you
          </p>
        </div>
        <div className="md:flex hidden  absolute right-[-30px] bottom-0">
          <Image
            src="/heroImg.png"
            alt="hero image"
            className=""
            objectFit="cover"
            width={360}
            height={285}
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <Image
          src="/advertBanner.png"
          alt="hero image"
          className="h-full w-full max-h-[285px] max-w-[360px]"
          objectFit="cover"
          width={360}
          height={285}
        />
      </div>
    </div>
  );
};

export default Hero;
