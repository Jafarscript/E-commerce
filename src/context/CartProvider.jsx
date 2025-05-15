import { useReducer, useEffect, useState } from "react";
import CartContext from "./CartContext";
import cartReducer from "../reducers/cartReducer";

export const CartProvider = ({ children }) => {
  const [initialStateLoaded, setInitialStateLoaded] = useState(false);
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    const localCartData = localStorage.getItem("cart");
    if (localCartData) {
      const parsedCart = JSON.parse(localCartData);
      if (parsedCart?.items) {
        parsedCart.items.forEach(item => {
          dispatch({ type: "ADD_ITEM", payload: { product: item, quantity: item.quantity } });
        });
      }
    }
    setInitialStateLoaded(true);
  }, []);

  useEffect(() => {
    if (initialStateLoaded) {
      localStorage.setItem("cart", JSON.stringify(state));
    }
  }, [state, initialStateLoaded]);

  const addToCart = (product, quantity = 1) => {
    dispatch({ type: "ADD_ITEM", payload: { product, quantity } });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_ITEM", payload: { productId } });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const cartTotalItems = state.items.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingCost = 0;
  const cartTotal = cartSubtotal + shippingCost;

  return (
    <CartContext.Provider
      value={{
        cartItems: state.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotalItems,
        cartSubtotal,
        shippingCost,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
