import React from "react";
import Item from "../Item/Item";
import "./../ItemList/ItemList.css";

const ItemList = ({ items }) => {
  return (
    <div className='ItemListContainer'>
      {items.map((item) => (
        <div key={item.id}>
          <Item product={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
