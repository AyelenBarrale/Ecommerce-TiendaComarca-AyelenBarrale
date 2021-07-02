import React from 'react';
import './../ItemDetail/ItemDetail.css';

const ItemDetail = ({id, img, nombre, descripcion, precio}) => {
    return (
        <div className="item-container" key={id}>
            <img className="item-img" src={img} alt={nombre} />
            <div className="itemBody-detail">
                <h1 className="itemTitle">{nombre}</h1>
                <p>{descripcion}</p>
                <p><strong>Precio: ${precio}</strong></p>
                <button className="itemBtn">Comprar</button>
            </div>
        </div>
    )
}

export default ItemDetail;
