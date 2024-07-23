import React, { useState } from 'react';
import './input.css';
import { InputProps } from '@/types';

const Input = ({ label, placeholder, icon, type, register, errors, name }: InputProps) => {
  const [isActive, setIsActive] = useState(false);
  const error = errors[name]?.message;

  const handleFocus = () => setIsActive(true);
  const handleBlur = () => setIsActive(false);

  return (
    <div className="w-full grid gap-1">
      <label htmlFor="input-field" className={`${error ? 'text-red' : ''}`}>
        {label}
      </label>
      <div
        className={`w-full flex items-center gap-4 p-4 rounded-lg border ${error ? 'border-red' : ''}  ${
          isActive ? 'border-purple bg-purple-50 border-shadow' : 'border-gray-300 bg-transparent'
        }`}
      >
        <div className="flex items-center justify-center">{icon}</div>
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          className="bg-transparent outline-none border-none w-full"
          onFocus={handleFocus}
          {...register(name)}
          onBlur={handleBlur}
        />
        {error && <p className="text-red capitalize text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default Input;
