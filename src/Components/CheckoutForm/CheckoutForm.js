import React, { useState } from "react";
import "../CheckoutForm/CheckoutForm.css";

import { useOrdersContext } from "../../Contexts/OrdersContext";

import { Link } from "react-router-dom";

const CheckoutForm = () => {
  const { addOrdenInfo } = useOrdersContext();

  const initialState = {
    nombre: "",
    telefono: "",
    email: "",
  };

  const [values, setValues] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    addOrdenInfo(values);
    setValues({ ...initialState });
  };

  return (
    <div className='checkout-container'>
      <div className='checkout-titles'>
        <h2>A un click de tu compra</h2>
        <p>Completá los datos solicitados y luego confirmá tu pedido</p>
      </div>
      <form className='form-container' onSubmit={handleOnSubmit}>
        <div>
          <input
            className='input-field'
            type='text'
            placeholder='Nombre y Apellido'
            onChange={handleOnChange}
            name='nombre'
            value={values.nombre}
          />
        </div>
        <div>
          <input
            className='input-field'
            type='text'
            placeholder='Teléfono'
            onChange={handleOnChange}
            name='telefono'
            value={values.telefono}
          />
        </div>
        <div>
          <input
            className='input-field'
            type='text'
            placeholder='E mail'
            onChange={handleOnChange}
            name='email'
            value={values.email}
          />
        </div>
        <button type='submit' className='form-button'>
          Continuar
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
