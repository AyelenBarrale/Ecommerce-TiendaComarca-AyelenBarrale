import React from "react";
import Item from "../Item/Item";
import "./../ItemList/ItemList.css";

const ItemList = ({ items }) => {
  return (
    <div className='ItemListContainer'>
      {items.map((item) => (
        <Item key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ItemList;
