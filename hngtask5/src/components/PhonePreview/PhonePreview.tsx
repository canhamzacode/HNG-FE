import Image from 'next/image';
import './phonepreview.css';
import React from 'react';
import { useLinkContext } from '@/context/LinkProvider';
import { FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const PhonePreview = () => {
  const { links } = useLinkContext();
  const router = useRouter();

  const handleLinkClick = (link: string) => {
    // window.
    router.push(link);
  };
  return (
    <div className="w-[307px] h-[631px] flex items-center justify-center relative mx-auto overflow-hidden bg-white  ">
      <Image src="/phoneFrame.png" alt="phone frame" width={307} height={631} className="" />
      <div>
        <div className="w-[307px] absolute top-0 bg-transparent left-0 h-[631px] rounded-lg px-[24px] pt-[53px] pb-[43px] overflow-y-auto custom-scrollbar grid gap-8">
          <div className="w-full gap-6 flex flex-col">
            <div className="w-[96px] h-[96px] rounded-[50%] bg-slate-300 mx-auto"></div>
            <div className="flex flex-col gap-3 items-center justify-center w-full ">
              <div className="w-[160px] h-4 bg-slate-300 rounded-md"></div>
              <div className="w-[72px] h-2 bg-slate-300 rounded-md"></div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {links.length > 0 ? (
              links.map((link, index) => (
                <div
                  key={index}
                  className="w-full h-[44px] rounded-md flex justify-between px-4"
                  style={{
                    background: link.platform.previewColor,
                    color: link.platform.previewColor === '#FFFFFF' ? 'black' : ''
                  }}
                  onClick={() => handleLinkClick(link.url)}
                >
                  <div className="flex items-center gap-3 text-white">
                    {link.platform.icon}
                    {link.platform.name}
                  </div>
                  <button className="text-white">
                    <FaArrowRight size={20} />
                  </button>
                </div>
              ))
            ) : (
              <div className="w-full flex flex-col gap-3">
                <div className="w-full h-[44px] bg-slate-200 rounded-md"></div>
                <div className="w-full h-[44px] bg-slate-200 rounded-md"></div>
                <div className="w-full h-[44px] bg-slate-200 rounded-md"></div>
                <div className="w-full h-[44px] bg-slate-200 rounded-md"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhonePreview;
