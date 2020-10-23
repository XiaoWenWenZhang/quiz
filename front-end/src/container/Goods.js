import React from "react";

const Goods = ({ goods, AddToCart }) => (
  <div className="goods">
    <img src={goods.img} alt={goods.name} />
    <p>{goods.name}</p>
    <p>
      单价：{goods.price}元/{goods.unit}
    </p>
    <button className="add-to-cart" onClick={() => AddToCart(goods)}>
      +
    </button>
  </div>
);
export default Goods;
