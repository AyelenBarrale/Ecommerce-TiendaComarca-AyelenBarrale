/* eslint-disable max-len */
import React, {useState} from 'react';
import './../ItemCount/ItemCount.css';
import {useCartContext} from './../../Contexts/CartContext';

const ItemCount = ({onAdd, product}) => {
  const {realStock} = useCartContext();
  const stock = realStock(product);
  const [toAdd, setToAdd] = useState(stock ? 1 : 0);

  return (
    <div className='buttons-container'>
      <div className='buttons-block'>
        <button className='item-button sumar' onClick={() => setToAdd(toAdd === stock ? toAdd : toAdd + 1)} > + </button>
        <p className='cantidad-num'> {toAdd} </p>
        <button className='item-button restar' onClick={() => setToAdd(toAdd > 1 ? toAdd - 1 : toAdd)} > - </button>
      </div>
      <div className='añadirCart-btn'>
        <button className='item-button'onClick={() => onAdd(toAdd)} > Añadir al Carrito </button>
      </div>
    </div>
  );
};

export default ItemCount;

