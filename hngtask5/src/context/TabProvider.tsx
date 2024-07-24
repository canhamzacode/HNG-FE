'use client';

import React, { createContext, ReactNode, useMemo, useState } from 'react';

interface TabContextType {
  activeTab: 'links' | 'profile';
  setActiveTab: React.Dispatch<React.SetStateAction<'links' | 'profile'>>;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

interface TabProviderProps {
  children: ReactNode;
}

export const TabProvider = ({ children }: TabProviderProps) => {
  const [activeTab, setActiveTab] = useState<'links' | 'profile'>('links');

  const tabValue = useMemo(() => ({ activeTab, setActiveTab }), [activeTab, setActiveTab]);

  return <TabContext.Provider value={tabValue}>{children}</TabContext.Provider>;
};

export default TabContext;
