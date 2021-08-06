import React, { useState, useEffect } from "react";
import ItemDetail from "./../../views/ItemDetail/ItemDetail";
import "./../ItemDetailContainer/ItemDetailContainer.css";
import Loader from "../Loader/Loader";

import { db } from "../../firebase";

import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const producto = await db.collection("productos").doc(id).get();
      setItem({ id: producto.id, ...producto.data() });
      setIsLoading(false);
    })();
  }, [id]);

  return (
    <div className='itemDetail-container'>
      {isLoading ? <Loader /> : <ItemDetail product={item} />}
    </div>
  );
};

export default ItemDetailContainer;
