/* import axios from 'axios';  */
import React, {useState, useEffect} from 'react';
import ItemDetail from './../../views/ItemDetail/ItemDetail';
import './../ItemDetailContainer/ItemDetailContainer.css';

import {db} from '../../firebase';

import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    const Producto = db.collection('productos').doc(id);
    Producto.get().then((doc) => {
      if (doc.exists) {
        setItem(doc.data());
      }
    });
  }, [id]);

  return (
    <div className="itemDetail-container">
      <ItemDetail product={item} />
    </div>
  );
};

export default ItemDetailContainer;
