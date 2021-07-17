import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';

import {db} from './../../firebase';

/* import axios from 'axios'; */

import {useParams} from 'react-router-dom';

function ItemListContainer() {
  const [items, setItems] = useState([]);

  const {categoryName} = useParams();

  useEffect(() => {
    db.collection('productos').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id});
      });
      if (!categoryName) return setItems(docs);
      if (categoryName === 'all') return setItems(docs);
      const catItems = docs.filter((item) => item.categoria === categoryName);
      setItems(catItems);
    });
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
