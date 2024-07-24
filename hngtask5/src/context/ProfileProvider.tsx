'use client';

import React, { createContext, useMemo, useState, ReactNode } from 'react';

interface Profile {
  profilePicture: string | null;
  firstName: string;
  lastName: string;
  email: string;
}

interface ProfileContextType {
  profile: Profile;
  updateProfile: (updatedProfile: Partial<Profile>) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

interface ProfileProviderProps {
  children: ReactNode;
}

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
  const [profile, setProfile] = useState<Profile>({
    profilePicture: null,
    firstName: '',
    lastName: '',
    email: ''
  });

  const updateProfile = (updatedProfile: Partial<Profile>) => {
    setProfile((prevProfile) => ({ ...prevProfile, ...updatedProfile }));
  };

  const profileValue = useMemo(() => ({ profile, updateProfile }), [profile]);

  return <ProfileContext.Provider value={profileValue}>{children}</ProfileContext.Provider>;
};

export default ProfileContext;
