import React from 'react';
import { Redirect } from 'react-router-dom';
import { useCartContext } from '../../Contexts/CartContext';

import './../Cart/Cart.css';

const Cart = () => {

    const { cart, clearCart, reduceCart } = useCartContext();

    if(!cart.length) return <Redirect to='/' />;

    const compraFinal = () => {
        alert(`¡Gracias por tu compra!`)
    }


    return (
        <div className="cart-box" >
            {cart.map((item) => (
                <div className="cart-container" key={item.id}>
                    <img className="imgcart" src={item.img} alt={item.nombre} />
                    <p className="item-description">Producto: {item.nombre} </p>
                    <p className="item-description">Cantidad: {item.quantity}</p>
                    <button id="deleteItem" ><i className="fas fa-times-circle"></i></button>
                </div>
            ))}
            <h3 className="total-text">Total: ${reduceCart} </h3>
            <div className="cart-buttons">
                <button className="btn-cart buy" onClick={compraFinal} >Finalizar Compra</button>
                <button className="btn-cart empty" onClick={clearCart} >Vaciar</button>
            </div>
        </div>
    )
}

export default Cart;
