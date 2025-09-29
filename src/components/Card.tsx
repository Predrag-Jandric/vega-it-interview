import React from "react";

function Card({ title, category, price }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{category}</p>
      <h4 className="">{price}</h4>
    </div>
  );
}

export default Card;
