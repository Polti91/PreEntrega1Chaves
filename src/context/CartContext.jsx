import { useState, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
  totalQty: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [total, setTotal] = useState(0);

  const [totalQty, setTotalQty] = useState(0);

  const addProduct = (item, qty) => {
    const productExist = cart.find((prod) => prod.item.id === item.id);

    if (!productExist) {
      setCart((prev) => [...prev, { item, qty }]);
      setTotalQty((prev) => prev + qty);
      setTotal((prev) => prev + item.precio * qty);
    } else {
      const actualCart = cart.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, qty: prod.qty + qty };
        } else {
          return prod;
        }
      });
      setCart(actualCart);
      setTotalQty((prev) => prev - qty);
      setTotal((prev) => prev + item.precio * qty);
    }
  };

  const deleteProduct = (id) => {
    const deletedProduct = cart.find((prod) => prod.item.id === id);
    const actualCart = cart.filter((prod) => prod.item.id !== id);
    setCart(actualCart);
    setTotalQty((prev) => prev - deletedProduct.qty);
    setTotal((prev) => prev - (deletedProduct.item.precio * deletedProduct.qty));
  };

  const clearCart = () => {
    setCart([]);
    setTotalQty(0);
    setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{ cart, total, totalQty, addProduct, deleteProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
