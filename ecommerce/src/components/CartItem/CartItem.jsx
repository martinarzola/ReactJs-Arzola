import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ id }) => {
  const { cart, removeItem } = useContext(CartContext);

  const cartItem = cart.find((product) => product.id === id);

  if (!cartItem) {
    return (
      <div className='CartItem'>
        <p className='notFound'>Producto no encontrado en el carrito.</p>
      </div>
    );
  }

  const { name, price, quantity } = cartItem;

  return (
    <div className='CartItem'>
      <header className='Header'>
        <h2 className='ItemHeader'>{name}</h2>
      </header>
      <section>
        <p className='Info'>Precio: ${price}</p>
        <p className='Info'>Cantidad: {quantity}</p>
      </section>
      <footer className='ItemFooter'>
        <button onClick={() => removeItem(id)}>Eliminar del carrito</button>
        <Link to={`/item/${id}`} className='Option'>
          Ver detalles
        </Link>
      </footer>
    </div>
  );
};

export default CartItem;
