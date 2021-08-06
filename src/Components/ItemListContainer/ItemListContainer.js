import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

import { db } from "./../../firebase";

import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    (async () => {
      let resp;
      categoryName === undefined || categoryName === "all"
        ? (resp = await db.collection("productos").get())
        : (resp = await db
            .collection("productos")
            .where("categoria", "==", categoryName)
            .get());
      setItems(resp.docs.map((item) => ({ id: item.id, ...item.data() })));
    })();
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
