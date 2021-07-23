import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Contexts/CartContext";
import { useOrdersContext } from "../../Contexts/OrdersContext";

import "./../Cart/Cart.css";

const Cart = () => {
  const { cart, clearCart, reduceCart, removeItem } = useCartContext();
  const { setPasos } = useOrdersContext();

  const remove = (id) => {
    removeItem(id);
  };

  if (!cart.length) {
    return (
      <div className='cart-empty-box'>
        <h3 className='cart-empty-title'> No hay productos en tu carrito </h3>
        <Link to='/' className='btn-cart buy'>
          Comienza tu compra
        </Link>
      </div>
    );
  }

  return (
    <div className='cart-box'>
      {cart.map((item) => (
        <div className='cart-container' key={item.id}>
          <img className='imgcart' src={item.img} alt={item.nombre} />
          <p className='item-description'>Producto: {item.nombre} </p>
          <p className='item-description'>Cantidad: {item.quantity}</p>
          <button id='deleteItem' onClick={() => remove(item.id)}>
            <i className='fas fa-times-circle'></i>
          </button>
        </div>
      ))}
      <h3 className='total-text'>Total: ${reduceCart} </h3>
      <div className='cart-buttons'>
        <Link
          to='/checkout'
          className='btn-cart buy'
          onClick={() => setPasos(1)}
        >
          Finalizar Compra
        </Link>
        <button className='btn-cart empty' onClick={clearCart}>
          Vaciar
        </button>
      </div>
    </div>
  );
};

export default Cart;
