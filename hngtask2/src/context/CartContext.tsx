'use client';

import React, { createContext, useState, ReactNode, useEffect } from 'react';

type CartItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  quantity: number;
  image: string;
};

type CartContextType = {
  cartItems: CartItem[];
  totalPrice: number;
  addItemToCart: (item: CartItem) => void;
  increaseItemQuantity: (itemId: number) => void;
  decreaseItemQuantity: (itemId: number) => void;
  removeItemFromCart: (itemId: number) => void;
  isItemInCart: (itemId: number) => boolean;
  getItemQuantity: (itemId: number) => number;
};

const CartContext = createContext<CartContextType>({
  cartItems: [],
  totalPrice: 0,
  addItemToCart: () => {},
  increaseItemQuantity: () => {},
  decreaseItemQuantity: () => {},
  removeItemFromCart: () => {},
  isItemInCart: () => false,
  getItemQuantity: () => 0
});

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const addItemToCart = (newItem: CartItem) => {
    const existingItem = cartItems.find((item) => item.id === newItem.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...newItem, quantity: 1 }]);
    }
    calculateTotalPrice();
  };

  const increaseItemQuantity = (itemId: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    calculateTotalPrice();
  };

  const decreaseItemQuantity = (itemId: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
    calculateTotalPrice();
  };

  const removeItemFromCart = (itemId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
    calculateTotalPrice();
  };

  const isItemInCart = (itemId: number) => {
    return cartItems.some((item) => item.id === itemId);
  };

  const getItemQuantity = (itemId: number) => {
    const item = cartItems.find((item) => item.id === itemId);
    return item ? item.quantity : 0;
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const contextValue = {
    cartItems,
    totalPrice,
    addItemToCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItemFromCart,
    isItemInCart,
    getItemQuantity
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartContext;
