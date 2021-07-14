import React from 'react';
import './../Item/Item.css';
import ItemCount from "./../ItemCount/ItemCount";

import { Link } from 'react-router-dom';
import { useCartContext } from '../../Contexts/CartContext';

//BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';


const Item = ({product}) => {

    const { addToCart, realStock } = useCartContext();
    
    const onAdd = (qty) => addToCart(product, qty);
    const stock = realStock(product);

    return (
        <div>
            <Card style={{ width: '18rem' }} className='item-context'>
                <Link to={`/item/${product.id}`}>
                    <Card.Img variant="top" src= {product.img} alt={product.nombre} />
                </Link>
                <Card.Body className="item-body">
                    <Card.Title> {product.nombre} </Card.Title>
                    <Card.Text> Precio: $ {product.precio} </Card.Text>
                    <div className="container-btnsDetail">
                        {stock > 0 ?
                            <>
                            <p>Stock: {stock} </p>
                            <ItemCount onAdd={onAdd} product={product}/>
                            </> : <p className="noStock">SIN STOCK</p>
                        }
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item;
