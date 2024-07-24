import Image from 'next/image';
import React from 'react';
import { useActiveTab } from '@/hooks';
import { IoIosLink } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { Button } from '../Button';

const Navbar = () => {
  const { setActiveTab, activeTab } = useActiveTab();

  return (
    <div className="container">
      <div className="w-full flex items-center justify-between">
        <div>
          <Image src="/logo-long.svg" alt="logo" width={146} height={32} />
        </div>
        <div className="flex items-center gap-4">
          <Button
            state={activeTab === 'links' ? 'active' : 'default'}
            text=""
            type="secondary"
            className="flex gap-3 w-[122px] hover:text-purpleHover"
            onClick={() => setActiveTab('links')}
          >
            <IoIosLink size={25} />
            <p>Links</p>
          </Button>
          <Button
            text=""
            state={activeTab === 'profile' ? 'active' : 'default'}
            type="secondary"
            className="flex gap-3 w-[187px]  text-grey hover:text-purpleHover"
            onClick={() => setActiveTab('profile')}
          >
            <CgProfile size={25} />
            <p>Profile Details</p>
          </Button>
        </div>
        <div>
          <Button state="active" text="" type="secondary" className="flex gap-3 w-[114px]">
            <p>Preview</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
