import React from "react";
import "../CheckoutForm/CheckoutForm.css";

import { useOrdersContext } from "../../Contexts/OrdersContext";

const CheckOutId = () => {
  const { keyId } = useOrdersContext();

  return (
    <div className='checkout-container'>
      <div className='checkout-titles'>
        <h1>Código de pedido: {keyId} </h1>
        <p>¡Muchas gracias por tu compra!</p>
      </div>
    </div>
  );
};

export default CheckOutId;
