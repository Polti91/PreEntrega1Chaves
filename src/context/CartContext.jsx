import { useState, createContext } from "react";

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addProduct = (item, qty) => {
    const productExist = cart.find((prod) => prod.item.id === item.id);

    if (!productExist) {
      setCart((prev) => [...prev, { item, qty }]);
    } else {
      const actualCart = cart.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, qty: prod.qty + qty };
        } else {
          return prod;
        }
      });
      setCart(actualCart);
    }
  };

  const deleteProduct = (id) => {
    const actualCart = cart.filter((prod) => prod.id !== id);
    setCart(actualCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, deleteProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
