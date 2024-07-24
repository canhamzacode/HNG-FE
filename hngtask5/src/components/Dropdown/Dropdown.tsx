import React from 'react';
import { PlatformProps } from '@/types';
import { platforms } from './data';
import './dropdown.css';

interface DropdownProps {
  selectedPlatform: PlatformProps;
  isOpen: boolean;
  handleSelect: (platform: PlatformProps) => void;
  setIsOpen: (isOpen: boolean) => void;
}

const Dropdown = ({ selectedPlatform, isOpen, handleSelect, setIsOpen }: DropdownProps) => (
  <div className="relative">
    <p className="mb-2">Platform</p>
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex items-center border p-2 rounded-lg w-full bg-white"
    >
      {selectedPlatform.icon}
      <span className="ml-2">{selectedPlatform.name}</span>
      <span className="ml-auto">▼</span>
    </button>
    {isOpen && (
      <div className="absolute top-full left-0 w-full border bg-white rounded-lg mt-1 z-10">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            onClick={() => handleSelect(platform)}
            className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
          >
            {platform.icon}
            <span className="ml-2">{platform.name}</span>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default Dropdown;
