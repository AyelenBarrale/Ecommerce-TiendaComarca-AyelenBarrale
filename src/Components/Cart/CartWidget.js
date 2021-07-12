import React from 'react';
import { useCartContext } from '../../Contexts/CartContext';

import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { reduceQuantity } = useCartContext();

    return (
        <>
            <Link to="/cart">
                <button id="cart-button" className="cart-button"><span id="contadorCarrito">{reduceQuantity}</span><i className="fas fa-shopping-cart"></i></button>
            </Link>
        </>
    )
}

export default CartWidget;
