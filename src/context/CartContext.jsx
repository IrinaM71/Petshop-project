import { createContext, useEffect, useState } from "react";


export const BASE_URL = "http://localhost:3333/categories/all";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

 useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
 }, [cart]);

  const addToCart =  (product) => {
    setCart((prev) => {
        const exists = prev.find((item) => item.id === product.id);
        if (exists) {
            return prev.map((item) => 
                item.id === product.id ? {...item, quantity, item.quantity + 1} : item
            );
        }
        return [...prev, {...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
