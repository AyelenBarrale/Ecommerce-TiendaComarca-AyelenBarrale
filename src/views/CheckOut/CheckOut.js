import React from "react";

import { useOrdersContext } from "../../Contexts/OrdersContext";

import CheckOutForm from "../../Components/CheckoutForm/CheckoutForm";
import CheckOutConfirm from "../../Components/CheckoutForm/CheckOutConfirm";
import CheckOutId from "../../Components/CheckoutForm/CheckOutId";

const CheckOut = () => {
  const { pasos } = useOrdersContext();

  return (
    <div>
      {pasos === 1 && <CheckOutForm />}
      {pasos === 2 && <CheckOutConfirm />}
      {pasos === 3 && <CheckOutId />}
    </div>
  );
};

export default CheckOut;
