'use client';

import React from 'react';

import { Navbar, LinkTab } from '@/components';
import { useActiveTab } from '@/hooks';
import { ProfileTab } from '@/components/ProfileTab';

const Home = () => {
  const { activeTab } = useActiveTab();

  return (
    <div>
      <Navbar />
      {activeTab === 'links' ? <LinkTab /> : <ProfileTab />}
    </div>
  );
};

export default Home;
