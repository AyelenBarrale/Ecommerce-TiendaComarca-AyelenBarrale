import React from "react";
import "../CheckoutForm/CheckoutForm.css";
import { useCartContext } from "../../Contexts/CartContext";
import { useOrdersContext } from "../../Contexts/OrdersContext";


const CheckOutConfirm = () => {
  const { cart, reduceCart } = useCartContext();
  const { addOrden } = useOrdersContext();

  return (
    <div className='checkout-container'>
      <div className='checkout-titles'>
        <h2>Sólo queda un paso</h2>
        <p>Confirmá tu pedido y tu orden será enviada</p>
      </div>
      <div className='resumen-container'>
        <h4>Resumen de compra</h4>
        {cart.map((item) => (
          <div className='products-container' key={item.id}>
            <p className='product-name'>{item.nombre} </p>
            <p className='product-quantity'>({item.quantity}) unidades</p>
          </div>
        ))}
      </div>
      <h4>Total a pagar: ${reduceCart} </h4>
      <div className='form-container'>
          <button className='form-button' onClick={addOrden}>
            Confirmar compra
          </button>
      </div>
    </div>
  );
};

export default CheckOutConfirm;
