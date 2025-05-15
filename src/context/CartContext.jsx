/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

// --- Cart Context ---
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => { const localData = localStorage.getItem('cart'); return localData ? JSON.parse(localData) : []; });
  useEffect(() => { localStorage.setItem('cart', JSON.stringify(cartItems)); }, [cartItems]);

  const addToCart = (product, quantity = 1, selectedColor, selectedSize) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id && item.selectedColor === selectedColor && item.selectedSize === selectedSize);
      if (existingItem) {
        return prevItems.map(item => item.id === product.id && item.selectedColor === selectedColor && item.selectedSize === selectedSize ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prevItems, { ...product, quantity, selectedColor, selectedSize, cartItemId: `${product.id}-${selectedColor}-${selectedSize}` }]; // Unique ID for cart item
    });
  };
  const removeFromCart = (cartItemId) => { setCartItems(prevItems => prevItems.filter(item => item.cartItemId !== cartItemId)); };
  const updateQuantity = (cartItemId, quantity) => { setCartItems(prevItems => prevItems.map(item => item.cartItemId === cartItemId ? { ...item, quantity: Math.max(1, quantity) } : item)); };
  const clearCart = () => { setCartItems([]); };
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartSubtotal = cartTotal; // Assuming no complex calculations for subtotal yet
  const shippingCost = 0; // Placeholder

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartSubtotal, shippingCost }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);