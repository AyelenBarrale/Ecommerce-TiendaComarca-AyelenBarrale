import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';

import axios from 'axios';

import { useParams } from 'react-router-dom';


function ItemListContainer() {
    const [items, setItems] = useState([]);

    const { categoryName } = useParams();

    useEffect(() => {
        (async() => {
            const { data } = await axios.get("https://60d24fa0858b410017b2d8d9.mockapi.io/api/v1/productos")
            if(!categoryName) return setItems(data);
            if(categoryName === "all") return setItems(data);
            const catItems = data.filter(item => item.categoria === categoryName);
            setItems(catItems)
        })();
    }, [categoryName]);

    return (
        <div>
                <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
