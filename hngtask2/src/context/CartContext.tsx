'use client';

import { createContext, useState, useContext } from 'react';

interface CartItem {
  id: string; // Unique identifier for the product
  name: string;
  price: number;
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
}

const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {}
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (newItem: CartItem) => {
    setCartItems([...cartItems, newItem]);
  };

  return <CartContext.Provider value={{ cartItems, addToCart }}>{children}</CartContext.Provider>;
};

export default CartContext;
