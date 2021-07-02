import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ItemDetail from './../../views/ItemDetail/ItemDetail';
import './../ItemDetailContainer/ItemDetailContainer.css'

import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState();

    useEffect(() => {
        (async () => {
            const { data } = await axios.get("https://60d24fa0858b410017b2d8d9.mockapi.io/api/v1/productos")
            const foundItem = data.find(item => item.id === +id);
            setItem(foundItem);
        }) ();
    }, [id]);



    return (
        <div className="itemDetail-container">
            <ItemDetail {...item} />
        </div>
    )
}

export default ItemDetailContainer;
