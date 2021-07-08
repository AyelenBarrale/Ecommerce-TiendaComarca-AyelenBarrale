import React from 'react';
import ItemCount from './../../Components/ItemCount/ItemCount';
import './../ItemDetail/ItemDetail.css';

import { useCartContext } from './../../Contexts/CartContext';

const ItemDetail = ({product}) => {

    const { cart, addToCart } = useCartContext();
    
    const onAdd = (qty) => addToCart(product, qty);
    console.log(cart)
    
    return (
        <div className="item-container" key={product.id}>
            <img className="item-img" src={product.img} alt={product.nombre} />
            <div className="itemBody-detail">
                <h1 className="itemTitle">{product.nombre}</h1>
                <p>{product.descripcion}</p>
                <p><strong>Precio: ${product.precio}</strong></p>
                <div className="container-btnsDetail">
                    {product.stock > 0 && <ItemCount onAdd={onAdd} stock={product.stock} /> }
                    {product.stock <= 0 && <p className="noStock">SIN STOCK</p> }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
