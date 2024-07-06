import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-[304px] grid tablet:grid-cols-[926px,1fr] grid-cols-1 gap-5">
      <div className="bg-[#3B2B2B] container flex items-center tablet:px-20 px-10">
        <h1 className="text-3xl font-medium  text-white max-w-[449px] w-full">
          You can now shop for all <br /> your fashion items with <br /> ease
        </h1>
      </div>
      <div className="w-full border-y border-l"></div>
    </div>
  );
};

export default Hero;
