'use client';

import CartContext from '@/context/CartContext';
import React, { useContext } from 'react';

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default useCart;
