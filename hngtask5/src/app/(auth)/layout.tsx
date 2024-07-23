import Image from 'next/image';
import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <div className="w-full min-h-screen flex items-center justify-center py-10">
    <div className="w-full max-w-[574px] grid gap-[51px]">
      <div className="w-full flex items-center justify-center">
        <Image src="/logo-long.svg" width={182} height={40} alt="logo" />
      </div>
      {children}
    </div>
  </div>
);

export default AuthLayout;
