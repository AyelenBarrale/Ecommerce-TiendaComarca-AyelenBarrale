/* eslint-disable max-len */
import React from 'react';
import ItemCount from './../../Components/ItemCount/ItemCount';
import './../ItemDetail/ItemDetail.css';

import {useCartContext} from './../../Contexts/CartContext';
import {Link} from 'react-router-dom';

const ItemDetail = ({product}) => {
  const {cart, addToCart, realStock} = useCartContext();

  const onAdd = (qty) => addToCart(product, qty);
  const stock = realStock(product);
  // console.log(cart)

  return (
    <div className="item-container" key={product.id}>
      <img className="item-img" src={product.img} alt={product.nombre} />
      <div className="itemBody-detail">
        <h1 className="itemTitle">{product.nombre}</h1>
        <p>{product.descripcion}</p>
        <p><strong>Precio: ${product.precio}</strong></p>
        <div className="container-btnsDetail">
          {stock > 0 ?
                        <>
                          <p>Stock: {stock} </p>
                          <ItemCount onAdd={onAdd} product={product} />
                        </> : <p className="noStock">SIN STOCK</p>
          }
          <Link to="/cart">
            {cart.length !== 0 && <button className="detail-buy" >Finalizar Compra</button>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
