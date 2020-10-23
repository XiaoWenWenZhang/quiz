import React from "react";

const Goods = ({ name, price, unit, image, onAddToCart }) => (
  <div className="product">
    <img src={image} alt={name} />
    <p>{name}</p>
    <p className="desc">
      单价：{price}元/{unit}
    </p>
    <button
      className="button-add"
      onClick={() => onAddToCart({ name, price, unit, image })}
    >
      +
    </button>
  </div>
);
export default Goods;