'use client';

import { auth } from '@/config';
import { useGetUserById } from '@/hooks';
import { DocumentData } from 'firebase/firestore';
import React, { ReactNode, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const AuthContext = React.createContext({});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user] = useAuthState(auth);
  const userId = user?.uid;
  const [userInfo, setUserInfo] = useState<DocumentData | null>(null);

  const userData = useGetUserById(userId as string);

  useEffect(() => {
    setUserInfo(userData);
  }, [userId]);

  const handleLogout = () => {
    auth.signOut();
  };

  const setMyUserDb = (data: DocumentData | null) => {
    setUserInfo(data);
  };

  const authContextValue = React.useMemo(
    () => ({
      user: userInfo,
      logout: handleLogout,
      setMyUserDb
    }),
    [userInfo]
  );

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export default AuthContext;
