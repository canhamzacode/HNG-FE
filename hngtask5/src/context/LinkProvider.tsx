'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';

interface Link {
  id: string;
  url: string;
  platform: {
    name: string;
    icon: JSX.Element | null;
    previewColor: string;
  };
}

interface LinkContextType {
  links: Link[];
  addLink: (link: Link) => void;
  updateLink: (id: string, updatedLink: Partial<Link>) => void;
  removeLink: (id: string) => void; // Added removeLink method
}

const LinkContext = createContext<LinkContextType | undefined>(undefined);

export const LinkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [links, setLinks] = useState<Link[]>([]);

  const addLink = (link: Link) => {
    setLinks([...links, link]);
  };

  const updateLink = (id: string, updatedLink: Partial<Link>) => {
    setLinks(links.map((link) => (link.id === id ? { ...link, ...updatedLink } : link)));
  };

  const removeLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  return useMemo(
    () => (
      <LinkContext.Provider value={{ links, addLink, updateLink, removeLink }}>
        {children}
      </LinkContext.Provider>
    ),
    [links]
  );
};

export const useLinkContext = () => {
  const context = useContext(LinkContext);
  if (!context) {
    throw new Error('useLinkContext must be used within a LinkProvider');
  }
  return context;
};
