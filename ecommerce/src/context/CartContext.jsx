import { createContext, useState } from 'react'

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  totalQuantity: 0,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    // Buscar si el producto ya está en el carrito
    const existingProduct = cart.find((product) => product.id === item.id);

    if (existingProduct) {
      // El producto ya está en el carrito, actualiza la cantidad
      const updatedCart = cart.map((product) => {
        if (product.id === item.id) {
          return { ...product, quantity: product.quantity + quantity };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      // El producto no está en el carrito, agrégalo
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };


  let totalQuantity = 0;
  for (const item of cart) {
    totalQuantity += item.quantity;
  }

  let total = 0;
  for (const item of cart) {
    total += item.quantity * item.price;
  }

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
